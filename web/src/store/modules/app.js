import Vue from 'vue';
const winVue = new Vue()
const app = {
  state: {
    apiLoading: 0,
  },
  mutations: {
    SET_APP_LOADING: (state, value) => {
      if (value === 0) {
        state.apiLoading = 0
      } else {
        state.apiLoading += value
      }
      if (state.apiLoading > 0) {
        winVue.$Spin.show();
      } else {
        winVue.$Spin.hide();
      }

    },
  },
  actions: {
    setApiLoading: ({ commit }, value) => {
      commit('SET_APP_LOADING', value)
    },
    updateApiLoading: ({ commit }, flag) => {
      if (flag) {
        commit('SET_APP_LOADING', 1)
      } else {
        commit('SET_APP_LOADING', -1)
      }
    },
  }
};

export default app;
