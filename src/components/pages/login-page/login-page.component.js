export default {
    name: 'loginPage',
    components: {},
    directives: {
        // auto-focusing on email input
        focus: {
            inserted: function (el) {
                el.firstElementChild.focus()
            }
        }
    },
    data () {
        return {
            // Adds formData as a property
            formData: {
                email: null,
                password: null,
            },
            // Adds rules for form items on login page
            rules: {
                email: [
                    { 
                    required: true,
                    message: 'Please input email address',
                    trigger: 'blur'
                    },
                    {
                    type: 'email',
                    message: 'Please input correct email address',
                    trigger: ['blur', 'change']
                    }
                ],
                password: [
                    {
                    required: true,
                    message: 'Please input password',
                    trigger: 'blur'
                    }
                ]
            },
            isFormValidated: false,
        }; // end return
    }, // end data
    mounted() {
        if (this.$store.getters.IS_LOGIN) {
          this.$router.push("dashboard");
        }
    },
    methods: {
        updateIsFormValidated() { // will execute every time your focus is out on the form control, updating isFormValidated property
            const fields = this.$refs.formData.fields;
            this.isFormValidated = fields.reduce((acc, field) => {
                let valid = (field.isRequired && field.validateState === 'success');
                let noError = (!field.isRequired && field.validateState !== 'error');
                return acc && (valid || noError);
            }, true);
        },
        signIn() { // will be executed when button is enabled and clicked to dispatch an action
            if (this.isFormValidated) {
                const credentials = {
                    email: this.formData.email,
                    password: this.formData.password
                };
                this.$store.dispatch('LOG_IN', credentials).then (
                    (user) => this.onLoginSuccessful(user),
                    (error) => this.onLoginFailed(error)
                );
            }
        },
        // passing user as a payload from the action
        // check if user is an empty object
        // if empty object, throw error
        // if not empty object, redirect user to dashboard page, this.$router.push('dashboard');
        onLoginSuccessful(user) {
            if (!user) {
                throw new Error('Something went wrong!');
            }
            this.$router.push('/dashboard');
        },
        onLoginFailed(error) {
            /*eslint-disable*/
            console.error(error);
        },
    }
}; // end export default