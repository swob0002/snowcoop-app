export default {
    name: 'registerPage',
    directives: {
        // auto-focusing on first-name input
        focus: {
            inserted: function (el) {
                el.firstElementChild.focus()
            }
        }
    },
    data() {
        var passwordValidate = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('Please input the password'));
        } else {
        if (this.formData.passwordConfirm !== "") {
            this.$refs.formData.validateField('passwordConfirm');
        } 
            callback();
        }
        };
        var confirmValidate = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('Please input the password again'));
        } else if (value !== this.formData.password) {
            callback(new Error('Two inputs don\'t match!'));
        } else {
            callback();
        }
        };

        return {
            formData: {
                firstName: null,
                lastName: null,
                email: null,
                password: null,
                passwordConfirm: null,
            },
            rules: {
                firstName: [{
                    required: true,
                    message: 'Please input first name',
                    trigger: 'blur'
                },],
                lastName: [{
                    required: true,
                    message: 'Please input last name',
                    trigger: 'blur'
                },],
                email: [{
                    required: true,
                    message: 'Please input email address',
                    trigger: 'blur'
                },
                {
                    type: 'email',
                    message: 'Please input correct email address',
                    trigger: ['blur', 'change']
                }],
                password: [{
                    required: true,
                    message: 'Please input password',
                    trigger: 'blur'
                },
                {
                    validator: passwordValidate,
                    trigger: 'blur'
                }],
                passwordConfirm: [{
                    required: true,
                    message: 'Please input password',
                    trigger: 'blur'
                },
                {
                    validator: confirmValidate,
                    trigger: 'blur'
                }]
                }, //end rules
            isFormValidated: false,
        }; //end return
    }, //end data

    methods: {
        updateIsFormValidated() {
            const fields = this.$refs.formData.fields
            this.isFormValidated = fields.reduce((acc, field) => {
                const valid = (field.isRequired && field.validateState === 'success');
                const noError = (!field.isRequired && field.validateState !== 'error');
                return acc && (valid || noError);
            }, true);
        },
        register() {
            if (this.isFormValidated) {
                const newUser = {
                    firstName: this.formData.firstName,
                    lastName: this.formData.lastName,
                    email: this.formData.email,
                    password: this.formData.password
                }
                this.$store
                .dispatch('REGISTER', newUser)
                .then(
                    (user) => this.onRegisterSuccessful(user),
                    (error) => this.onRegisterFailed(error)
                )
            }
        },
        onRegisterSuccessful(user) {
            if (!user) {
                throw new Error('Something went wrong!')
            }
            this.$router.push('dashboard')
        },
        onRegisterFailed(error) {
            /* eslint-disable */
            console.error(error)
        }
    } //end methods
}; //end export default