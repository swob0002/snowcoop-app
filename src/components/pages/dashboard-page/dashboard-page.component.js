export default {
    name: 'dashboardPage',
    data() {
      return {
        firstName: this.$store.getters.USER.firstName
      }
    },
    computed: {
      isLogIn() {
        return this.$store.getters.IS_LOGIN
      }
    }
  }