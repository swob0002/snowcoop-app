// Template Code
// export default {
//     name: 'listPage',
//     computed: {
//       isLogIn() {
//         return this.$store.getters.IS_LOGIN
//       }
//     }
//   }

import mapView from '../../shared/map-view/map-view-component.vue';
export default {
  name: 'listPage',
  components: {
    mapView
  },
  data () {
    return {
      addressList: null
    }
  },
  mounted () {
    /* eslint-disable */
    console.log('mounted...');
    this.$store.dispatch('GET_ADDRESS_LIST').then(addressList => {
      console.log(addressList);
      this.addressList = addressList
    })
  }
};
