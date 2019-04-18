import mapView from '../../shared/map-view/map-view.component.vue';
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
    this.$store.dispatch('GET_ADDRESS_LIST').then(addressList => {
      /* eslint-disable */ 
      console.log(addressList);
      this.addressList = addressList
    })
  }
};
