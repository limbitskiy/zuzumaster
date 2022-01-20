import { createStore } from "vuex";

export default createStore({
  state: {
    products: [],
    cart: [],
    config: null,
    sidebarOpen: false,
    currentLang: "rus",
    translations: null,
    productsLoaded: false,
    translationsLoaded: false,
    configLoaded: false
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    setTranslations(state, translations) {
      state.translations = translations
    },
    setConfig(state, config) {
      state.config = config
    },
    setProductsLoaded(state, value) {
      state.productsLoaded = value
    },
    setTranslationsLoaded(state, value) {
      state.translationsLoaded = value
    },
    setConfigLoaded(state, value) {
      state.configLoaded = value
    },
    setSidebarOpen(state, value) {
      state.sidebarOpen = value
    },
    setCart(state, value) {
      state.cart = value
    }
  },
  actions: {
    fetchProducts({ commit }) {
      fetch("products.json")
        .then(res => res.json())
        .then(data => commit('setProducts', data))
        .then(() => {
          commit('setProductsLoaded', true)
        })
    },
    fetchTranslations({ commit }) {
      fetch('translations.json')
        .then(res => res.json())
        .then(translations => commit('setTranslations', translations))
        .then(() => {
          commit('setTranslationsLoaded', true)
        })
    },
    fetchConfig({ commit }) {
      fetch('config.json')
        .then(res => res.json())
        .then(config => commit('setConfig', config))
        .then(() => {
          commit('setConfigLoaded', true)
        })
    },
    addToCart(context, product) {
      const itemInCart = context.state.cart.find(prod => prod.id === product.id)
      if (!itemInCart) {
        const cart = [...context.state.cart]
        cart.push(product)
        context.commit('setCart', cart)
      }
    },
    removeFromCart(context, id) {
      const filteredCart = context.state.cart.filter(item => item.id !== id)
      context.commit('setCart', filteredCart)
    },
    editConfig({ commit }, data) {
      commit('setConfig', data)
    }
  },
  getters: {
    cartTotal(state) {
      return state.cart.reduce((acc, product) => {
        return acc += product.price
      }, 0)
    }
  },
});
