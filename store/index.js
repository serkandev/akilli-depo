import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {},
    mutations: {},
    actions: {
      nuxtServerInit(VuexContext, context) {
        context.$axios.get("/").then(res => {});
      }
    },
    getters: {}
  });
};

export default createStore;
