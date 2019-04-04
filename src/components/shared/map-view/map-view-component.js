import { gmapApi } from 'vue2-google-maps'

export default {
  name: 'mapView',
  props: {
    showList: Boolean,
    addressList: Array
  },
  data () {
    return {
      markers: []
    }
  },
  computed: {
    google: gmapApi
  },
  mounted () {

  },
  method: {
    initPlaces () {
      this.markers = this.addressList.map(address => {
        const marker = {
          lat: address.lat,
          lng: address.lng
        }

        return {
          position: marker
        };
      })
    }
  }
}
