import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

import task from "./modules/task";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    task,
  },

  getters: {},
});

new VuexPersistence({
  storage: window.localStorage,
}).plugin(store);

export default store;
