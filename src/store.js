import Vue from 'vue'
import Vuex from 'vuex'
import AuthService from './services/auth.service'
import Axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
  // created state
  // (data to store a value globally; treat as global variable with particular manners to call and manipulate)
  state: {
    token: null || localStorage.getItem('token'),
    user: null || localStorage.getItem('user'),
    addressList: null
  },
  // created getters
  // (methods allowing Vue components to access state members globally)
  getters: {
    USER: state => {
      return state.user
    },
    IS_LOGIN: state => {
      return !!state.token
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
    GET_ADDRESS_LIST: (context) => {
      return Axios.get('http://localhost:3000/address')
        .then(async response => {
          if (response.status === 200 || response.status === 201) {
            const { payload } = response.data
            await context.commit('SET_ADDRESS_LIST', payload)
            return payload
          }
        })
    }

  }
})

export default store
