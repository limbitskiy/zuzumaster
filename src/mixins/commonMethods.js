export default {
    computed: {
        currentLang() {
            return this.$store.state.currentLang
        },
        localize() {
            return this.$store.state.translations[this.currentLang]
        },
        cart() {
            return this.$store.state.cart
        },
        cartTotal() {
            return this.$store.getters.cartTotal;
        },
    }
}