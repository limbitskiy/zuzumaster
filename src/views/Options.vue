<template>
  <div class="small-container">
    <div class="title-box">
      <h2 class="section-title">{{ localize.options }}</h2>
    </div>
    <!-- <div class="option-group">
        <p>Выберите шрифт:</p>
        <div class="option">
          <br />
          <input
            type="radio"
            id="ubuntu"
            value="ubuntu"
            v-model="font"
            @change="saveOptions"
          />
          <label for="ubuntu">Ubuntu</label><br />
          <input
            type="radio"
            id="roboto"
            value="roboto"
            v-model="font"
            @change="saveOptions"
          />
          <label for="roboto">Roboto</label><br />
          <input
            type="radio"
            id="openSans"
            value="openSans"
            v-model="font"
            @change="saveOptions"
          />
          <label for="openSans">Open sans</label>
        </div>
        <br />
        <p>Выберите цветовую тему:</p>
        <div class="option">
          <br />
          <input
            type="radio"
            id="colors1"
            value="colors1"
            v-model="colors"
            @change="saveOptions"
          />
          <label for="ubuntu">Светлая</label><br />
          <input
            type="radio"
            id="colors2"
            value="colors2"
            v-model="colors"
            @change="saveOptions"
          />
          <label for="roboto">Темная</label><br />
          <input
            type="radio"
            id="colors3"
            value="colors3"
            v-model="colors"
            @change="saveOptions"
          />
          <label for="openSans">Динамическая</label>
        </div>
        <div class="color-samples">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      
    
      <h3>Блоки</h3> -->
    <div class="option-content">
      <div class="diagram">
        <div class="nav" @click="this.showNavOptions = !this.showNavOptions">
          Навигация
        </div>
        <div class="hero" @click="this.showHeroOptions = !this.showHeroOptions">
          Баннер
        </div>
        <div class="cat">Каталог</div>
        <div class="abt">О нас</div>
        <div class="whyus">Преимущества</div>
        <div class="foot">Подвал</div>
      </div>

      <div class="options nav-options" v-if="showNavOptions">
        <p class="option-group-title">Опции навигации:</p>
        <ul class="option-group">
          <li class="option">
            <input
              type="radio"
              id="left"
              value="flex-left"
              v-model="navAlign"
              @change="saveOptions"
            />
            <label for="left">Слева</label>
          </li>
          <li class="option">
            <input
              type="radio"
              id="right"
              value="flex-end"
              v-model="navAlign"
              @change="saveOptions"
            />
            <label for="right">Справа</label>
          </li>
          <li class="option">
            <input
              type="radio"
              id="justify"
              value="space-between"
              v-model="navAlign"
              @change="saveOptions"
            />
            <label for="justify">Равномерно</label>
          </li>
          <li class="option">
            <input
              type="radio"
              id="center"
              value="center"
              v-model="navAlign"
              @change="saveOptions"
            />
            <label for="center">По центру</label>
          </li>
        </ul>
        <p class="option-group-title">Промежуток между пунктами меню(rem):</p>
        <div class="option">
          <input
            type="range"
            id="navGap"
            max="30"
            v-model="navGap"
            @input="saveOptions"
          />
        </div>
      </div>

      <div class="options hero-options" v-if="showHeroOptions">
        <p class="option-group-title">Баннер:</p>
        <ul class="option-group">
          <label>Изображение баннера:</label>
          <input id="heroImage" v-model="heroImage" @change="saveOptions" />
          <label>Текст баннера:</label>
          <textarea
            id="heroText"
            v-model="heroText"
            @change="saveOptions"
            rows="4"
          />
          <label>Цвет текста баннера:</label>
          <input
            id="heroTextColor"
            v-model="heroTextColor"
            @change="saveOptions"
          />
        </ul>
      </div>
    </div>
    <TheBtn
      @click="
        this.$router.back();
        exportOptions();
      "
      >Сохранить и вернуться</TheBtn
    >
  </div>
</template>

<script>
export default {
  name: "Options",
  data() {
    return {
      showNavOptions: false,
      showHeroOptions: true,
      font: this.$store.state.config.font,
      colors: this.$store.state.config.colors,
      navAlign: this.$store.state.config.navAlign,
      navGap: this.$store.state.config.navGap,
      heroImage: this.$store.state.config.heroImage,
      heroText: this.$store.state.config.heroText,
      heroTextColor: this.$store.state.config.heroTextColor,
    };
  },
  methods: {
    saveOptions() {
      this.$store.dispatch("editConfig", {
        font: this.font,
        colors: this.colors,
        navAlign: this.navAlign,
        navGap: this.navGap,
        heroImage: this.heroImage,
        heroText: this.heroText,
        heroTextColor: this.heroTextColor,
      });
    },
    exportOptions() {
      console.log("exporting");
      fetch("saveOptions.php", {
        method: "post",
        body: JSON.stringify(this.$store.state.config),
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.option-content {
  display: flex;
  gap: 1rem;
}

.options {
  margin-block: 5rem;
  width: 15rem;
  border: 1px solid #d6d6d6;
  padding: 1rem;

  .option-group-title {
    margin-block: 1rem;
  }

  .option-group {
    // border-radius: 5px;
    // background-color: #ebebeb;
    padding: 5px;
  }

  .option {
    display: flex;
    gap: 0.3rem;
  }
}

.diagram {
  display: grid;
  grid-template-rows: repeat(6, 60px);
  margin-block: 5rem;
  width: 15rem;

  * {
    border: 1px solid #d6d6d6;
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      color: white;
      background-color: var(--accent-color1);
    }

    &:active,
    &:focus {
      background-color: white;
    }
  }
}

.color-samples {
  display: flex;
  gap: 3px;
  margin-bottom: 1rem;

  * {
    width: 2rem;
    height: 2rem;
    transition: background-color 0.3s ease;
  }
  div:first-child {
    background-color: var(--accent-color1);
  }

  div:nth-child(2n) {
    background-color: var(--accent-color2);
  }

  div:nth-child(3n) {
    background-color: var(--accent-color3);
  }
}
</style>