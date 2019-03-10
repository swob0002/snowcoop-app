import Vue from 'vue';
import Vuex from 'vuex';
import AuthService from './services/auth.service';

Vue.use(Vuex);

const store = new Vuex.Store({
    // created state (data to store a value globally; treat as global variable with particular manners to call an manipulate)
    state: {
        token: null,
        user: null,
    },
    // created getters (methods allowing Vue components to access state members globally)
    getters: {
        USER: state => {
          return state.user;
        },
        IS_LOGIN: state => {
          return !!state.token;
        }
      },
    // created mutations (setters which can set state members' values; setters are created to encapsulate value setting logics)
    mutations: {
        SET_TOKEN: (state, payload) => {
            state.token = payload;
        },
        SET_USER: (state, payload) => {
            state.user = payload;
        }
    },
    actions: { // actions execute logics related to state, and commit to mutations to store the values
        // define an action LOG_IN to be used in other Vue components and centralize the state
        LOG_IN: (context, payload) => { // async means function operates asyncronously, waiting each line to be complete until next line
            return AuthService.login(payload).then(async (token) => {
                const { user, access_token } = token;
                AuthService.storeToken(access_token);
                AuthService.setHeader(access_token);
                await context.commit('SET_TOKEN', access_token);
                AuthService.storeUser(user);
                await context.commit('SET_USER', user);
                return user;
            });

        }
    }
});

export default store;
