import Vue from 'vue'
import Vuex from 'vuex'
import AuthService from './services/auth.service'
import AddressService from "./services/address.service"
// import Axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  // created state
  // (data to store a value globally; treat as global variable with particular manners to call and manipulate)
  state: {
    token: null || JSON.parse(localStorage.getItem("token")),
    user: null || JSON.parse(localStorage.getItem("user")),
    addressList: null
  },
  // created getters
  // (methods allowing Vue components to access state members globally)
  getters: {
    USER: state => {
      return state.user
    },
    IS_LOGIN: state => {
      if (state.token) {
        // const parsedToken = JSON.parse(state.token) -- DELETED
        AuthService.setHeader(state.token)
      } else {
        Vue.router.push("login")
      }
      return !!state.token;
    },
    ADDRESS_LIST: state => {
      return state.addressList
    }
  },
  // created mutations
  // (setters which can set state members' values; setters are created to encapsulate value setting logics)
  mutations: {
    SET_TOKEN: (state, payload) => {
      state.token = payload
    },
    SET_USER: (state, payload) => {
      state.user = payload
    },
    SET_ADDRESS_LIST: (state, payload) => {
      state.addressList = payload
    }
  },
  // actions execute logics related to state, and commit to mutations to store the values
  actions: {
    // define an action LOG_IN to be used in other Vue components and centralize the state
    LOG_IN: (context, payload) => {
      // async means function operates asyncronously, waiting each line to be complete until next line
      return AuthService.login(payload).then(async (payload) => {
        const { user, token } = payload

        AuthService.storeToken(token)
        AuthService.setHeader(token)
        await context.commit('SET_TOKEN', token)

        AuthService.storeUser(user)
        await context.commit('SET_USER', user)
        return user
      })
    },
    REGISTER: (context, payload) => {
      return AuthService.register(payload).then(async (payload) => {
        const { user, token } = payload

        AuthService.storeToken(token)
        AuthService.setHeader(token)
        await context.commit('SET_TOKEN', token)

        AuthService.storeUser(user)
        await context.commit('SET_USER', user)
        return user
      })
    },
    GET_ADDRESS_LIST: context => {
      return AddressService.getAddressList().then(async payload => {
        await context.commit("SET_ADDRESS_LIST", payload)
        /* eslint-disable */
        console.log('ssss');
        return payload
      })
    },
    ADD_ADDRESS: (context, payload) => {
      return AddressService.addAddress(payload).then(async payload => {
        const addressList = context.state.addressList;
        addressList.push(payload)
        await context.commit("SET_ADDRESS_LIST", addressList)
        return payload
      })
    }
  }
})

export default store