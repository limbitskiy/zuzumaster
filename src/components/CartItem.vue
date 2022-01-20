<script>
export default {
  name: "CartItem",
  props: ["itemInCart"],
  computed: {
    product() {
      return this.$store.state.products.find(
        (item) => item.id === this.itemInCart.id
      );
    },
  },
};
</script>

<template>
  <li>
    <div class="popup-item-section">
      <img :src="'/images/' + product.gallery[0]" />
    </div>

    <div class="popup-item-section">
      <span class="cart-item-name">{{ product.name[currentLang] }}</span>
    </div>

    <div class="popup-item-section">
      <span class="cart-item-packing">{{ itemInCart.packing }}</span>
    </div>

    <div class="popup-item-section">
      <span>x</span>
      <input
        class="cart-item-quantity"
        type="number"
        min="1"
        max="99"
        :value="itemInCart.quantity"
        disabled="disabled"
      />
    </div>

    <div class="popup-item-section">
      <span class="cart-item-price">{{ itemInCart.price }}грн</span>
    </div>

    <div
      class="popup-item-section"
      @click="this.$store.dispatch('removeFromCart', itemInCart.id)"
    >
      <i class="fas fa-trash"></i>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.cart-item-name {
  // font-size: var(--font-size-08);
  padding: 5px;
}

img {
  height: 60px;
}

li {
  display: grid;
  grid-template-columns: 0.6fr 2fr 60px 50px 70px 30px;
  grid-gap: 0.5em;
  justify-items: center;
  align-items: center;
  border-bottom: 1px solid #dad7d7;
  height: 80px;
  i {
    color: rgb(0, 0, 0);
    cursor: pointer;
    &:hover {
      color: rgb(221, 43, 43);
    }
  }
}

input {
  width: 1.5em;
  height: 2em;
  border: none;
  color: rgb(0, 0, 0);
  font-size: 16px;
  border-radius: 5px;
  text-align: center;
  margin: 0 5px;
  background-color: rgb(209, 209, 209);
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus-visible {
    outline: none;
  }
}
input[type="number"] {
  -moz-appearance: textfield;
}

@media screen and (max-width: 480px) {
  li {
    grid-template-columns: 1px auto 40px 50px 55px 30px;
    grid-gap: 0.1em;
  }
  img {
    display: none;
    width: 0;
  }
}
</style>