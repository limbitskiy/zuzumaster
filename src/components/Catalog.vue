<template>
  <div class="title-box">
    <h2 class="section-title">Каталог</h2>
  </div>
  <div class="catalog">
    <CatalogItem
      v-for="(product, index) in this.$store.state.products"
      :key="product.id"
      :product="product"
      :index="index"
    />
  </div>
</template>

<script>
import CatalogItem from "@/components/CatalogItem.vue";
export default {
  name: "Catalog",
  components: { CatalogItem },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>

<style lang="scss" scoped>
.catalog {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3em;

  > a {
    text-decoration: none;
  }
}
</style>