<template>
<div class="container">
  <div class="section">
    <div class="details">
      <div class="gallery">
        <img class="enlarged" :src="/images/ + this.enlarged" />
        <div class="thumbnails">
          <img
            v-for="(picture, index) in product.gallery"
            :key="index"
            :src="'/images/' + picture"
            alt="product gallery thumbnail"
            @click="enlargeThumbnail(picture)"
          />
        </div>
      </div>

      <div class="description">
        <h3>{{ product.name[this.currentLang] }}</h3>
        <p class="price">{{ product.price }} грн</p>
        <div class="btn-group product-btn-group">
          <TheBtn @click="addToCart">Купить</TheBtn>
        </div>
        <InputBeautifier :productDesc="product.desc[currentLang]" />
        <p><span class="details-subtitle">Характеристики: </span><br />
          <table class="props-table">
            <tr v-for="(propkey, propvalue) in product.props" :key="propvalue">
            <td>{{ propvalue }}</td>
            <td>{{ propkey }}</td>
            </tr>
          </table>
        </p>
      </div>
    </div>
    <Related />
  </div>
</div>
</template>

<script>
import Related from "@/components/Related.vue";
import InputBeautifier from "@/components/InputBeautifier.vue";

export default {
  name: "Product",
  data() {
    return {
      enlarged: null,
      packingSelected: null,
      quantity: 1,
    };
  },
  components: {
    Related,
    InputBeautifier,
  },
  props: {
    id: { type: Number, required: true },
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addToCart", {
        id: this.product.id,
        quantity: this.quantity,
        // packing: this.packingSelected,
        price: this.product.price,
        // uniqueId: Math.floor(Math.random() * 999999),
      });
      this.$store.state.sidebarOpen = "true";
    },
    enlargeThumbnail(img) {
      this.enlarged = img;
    },
  },
  computed: {
    product() {
      return this.$store.state.products.find(
        (product) => product.id === this.id
      );
    },
  },
  created() {
    this.enlarged = this.product.gallery[0];
  },
};
</script>

<style lang="scss" scoped>
.details {
  display: grid;
  gap: 1rem;
}

.details-subtitle {
  font-weight: 600;
}

.gallery {
  .enlarged {
    width: 100%;
    max-height: 65vh;
    object-fit: contain;
  }

  .thumbnails {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;

    img {
      width: 80px;
      height: 80px;
      border: 1px solid rgb(221, 221, 221);
      cursor: pointer;
      transition: border-color 0.2s ease;

      &:hover {
        opacity: 0.5;
        border-color: var(--accent-green);
      }
    }
  }
}

.description {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  select,
  input {
    height: 2rem;
  }

  .price {
    font-size: var(--font-biger);
  }

  .quantity-and-buy {
    display: flex;
    gap: 0.5rem;

    .incr-decr {
      cursor: pointer;
      width: 2rem;
    }

    .quantity-input {
      width: 2rem;
      text-align: center;
    }

    .buy-btn {
      cursor: pointer;
      background-color: var(--accent-color);
      border-radius: 4px;
      border: none;
      color: white;
      padding-inline: 2rem;
    }
  }

  .props-table {
    font-family: "Noto Sans", Arial, sans-serif;
    font-size: 14px;
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    border: 1px solid #e8e8e8;
    th {
      padding: 5px;
      text-align: left;
      font-weight: normal;
      background: #e5e2e2;
    }
    td {
      width: 50%;
      padding: 5px;
      border-top: 1px #e5e5e5 solid;
      &:first-child {
        border-right: 1px #e5e5e5 solid;
      }
    }
  }
}

@media (min-width: 850px) {
  .details {
    grid-template-columns: 1fr 2fr;
  }

  .description {
    align-items: flex-start;
  }
}
</style>