import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 2;
    },
    stringCounter: state => {
      return state.counter + ' Clicks';
    },
    value: state => {
      return state.value;
    }
  },
  mutations: {
    increment: (state, payload) => {
      state.counter += payload;
    },
    decrement: state => {
      state.counter--;
    },
    upfateValue: (state, payload) => {
      state.value = payload;
    }
  },
  actions: {
    increment: ({ commit }, payload) => {
     commit('increment', payload);
    },
    decrement: context => {
      context.commit('decrement');
    },
    asyncIncrement: ({ commit }) => {
      setTimeout(() => {
        commit('increment')
      }, 1000);
    },
    asyncdecrement: ({ commit }) => {
      setTimeout(() => {
        commit('decrement')
      }, 1000);
    },
    updateValue({commit},payload) {
      commit('updateValue', payload);
    }
  }
});