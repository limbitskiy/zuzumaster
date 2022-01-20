<template>
  <router-link
    :to="{
      name: 'Product',
      params: {
        id: product.id,
        slug: product.slug,
      },
    }"
  >
    <div class="product">
      <figure>
        <img :src="/images/ + product.gallery[0]" />
        <figcaption>
          {{ product.name[currentLang] }}
          <p>&#8372; {{ product.price }}</p>
        </figcaption>
      </figure>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "CatalogItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  flex: 0 0 320px;
  border-radius: 0.5rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  text-align: center;

  figcaption {
    font-size: var(--font-size-13);
    padding-block: 1rem;
  }

  img {
    width: 100%;
  }
}

.prod-header {
  border-radius: 0.5rem 0.5rem 0 0;
  background-color: var(--accent-color1);
}
</style>