<template>
  <div class="calculator">
    <TheSelectMain
      :options="this.materialOptions"
      v-model="material"
      @reset="reset"
      >Материал:</TheSelectMain
    >
    <TheSelectSub :options="this.thicknessOptions" v-model="thickness"
      >Толщина:</TheSelectSub
    >
    <TheSelectSub :options="this.lengthOptions" v-model="length"
      >Метраж:</TheSelectSub
    >
    <div class="result">
      <label>Цена:</label>
      <output>{{ this.price }}</output>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheCalculator",
  data() {
    return {
      material: null,
      thickness: null,
      length: null,
    };
  },
  methods: {
    reset() {
      // this.thickness = null;
      this.length = null;
    },
  },
  computed: {
    materialOptions() {
      return this.$store.state.materials;
    },
    thicknessOptions() {
      if (this.material) {
        return this.materialOptions.filter(
          (item) => item.id === this.material
        )[0].thickness;
      } else {
        return 0;
      }
    },
    lengthOptions() {
      if (this.thickness) {
        return this.thicknessOptions[this.thickness];
      } else {
        return 0;
      }
    },
    price() {
      if (this.length) {
        return this.lengthOptions[this.length] + "руб/пм";
      } else {
        return "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.calculator {
  display: grid;
  grid-template-columns: 250px;
  gap: 1rem;

  .result {
    display: flex;
    flex-direction: column;

    output {
      height: 45px;
      border: none;
      border-radius: 8px;
      background-color: white;
      padding-inline: 5px;
      font-size: 1rem;
      font-family: var(--font-roboto);
      margin-top: 5px;
      line-height: 45px;
    }
  }
}

@media (min-width: 768px) {
  .calculator {
    display: grid;
    grid-template-columns: repeat(2, 250px);
    gap: 1rem;

    .result {
      output {
      }
    }
  }
}
</style>