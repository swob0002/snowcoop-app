// Template Code
export default {
    name: 'loginPage',
    components: {},
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
                    { required: true, message: 'Please input email address', trigger: 'blur' },
                    { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
                ],
                password: [
                    { required: true, message: 'Please input password', trigger: 'blur' }
                ]
            },
            isFormValidated: false,
        }; // end return
    }, // end data
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
              this.$store.dispatch('LOG_IN', {
                  email: this.formData.email,
                  password: this.formData.password
              });
            }
          }
    }
}; // end export default