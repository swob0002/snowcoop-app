// Template Code
export default {
    name: 'listPage',
    computed: {
      isLogIn() {
        return this.$store.getters.IS_LOGIN
      }
    }
  }