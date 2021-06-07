import Vue from "vue";
import Vuex from "vuex";
import products from "../mock/products.json";

Vue.use(Vuex);

export default new Vuex.Store({
  // state yg perlu disimpan di vuex
  state: {
    // initial state atau state awal
    products: [],
    cart: [],
  },

  getters: {
    products: (state) => state.products,
    cart: (state) => state.cart,
  },
  actions: {
    getProducts({ commit }) {
      commit("getProductData");
    },
  },
  mutations: {
    getProductData(state) {
      state.products = products;
    },
  },
});
