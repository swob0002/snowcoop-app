import SideNavigation from './components/side-navigation/side-navigation.component.vue';

export default {
  name: 'app',
  components: {
    SideNavigation
  },
  computed: {
    // call to a getter to check if a user is signed in or not
    /* eslint-disable */
    isLogIn() {
      return this.$store.getters.IS_LOGIN
    }
  },
}