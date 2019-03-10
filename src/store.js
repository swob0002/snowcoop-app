import Vue from 'vue';
import Vuex from 'vuex';
import AuthService from './services/auth.service';

Vue.use(Vuex);

const store = new Vuex.Store({
    // created state
    state: {
        token: null,
        user: null,
    },
    getters: {},
    // created mutations
    mutations: {
        SET_TOKEN: (state, payload) => {
            state.token = payload;
        },
        SET_USER: (state, payload) => {
            state.user = payload;
        }
    },
    actions: {
        // define an action LOG_IN to be used in other Vue components and centralize the state
        LOG_IN: async (context, payload) => { // async means function operates asyncronously, waiting each line to be complete until next line
            const { user, access_token } = await AuthService.login(payload);
            await AuthService.storeToken(access_token);
            await AuthService.setHeader(access_token);
            await context.commit('SET_IS_LOGIN', access_token);

            await AuthService.storeUser(user);
            await context.commit('SET_USER', user);
        }
    }
});

export default store;