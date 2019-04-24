import mapView from "../../shared/map-view/map-view.component.vue";

export default {
    name: 'dashboardPage',
    components: {
      mapView,
    },
    data() {
      return {
        firstName: this.$store.getters.USER.firstName,
        addressList: null
      }
    },
    computed: {
      isLogIn() {
        return this.$store.getters.IS_LOGIN
      }
    },
    mounted() {
      this.$store.dispatch("GET_ADDRESS_LIST").then(addressList => {
        /* eslint-disable */ 
        // console.log(addressList);
        this.addressList = addressList
      })
    },    
  }