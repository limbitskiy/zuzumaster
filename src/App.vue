<script>
import Sidebar from "@/components/Sidebar.vue";
import Cart from "@/components/Cart.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  data() {
    return {};
  },
  components: { Sidebar, Cart, TheFooter },
  computed: {
    translationsAndConfigLoaded() {
      return (
        this.$store.state.translationsLoaded && this.$store.state.configLoaded
      );
    },
    fontClass() {
      return {
        ubuntu: this.$store.state.config.font === "ubuntu",
        roboto: this.$store.state.config.font === "roboto",
        openSans: this.$store.state.config.font === "openSans",
      };
    },
    colorClass() {
      return {
        colors1: this.$store.state.config.colors === "colors1",
        colors2: this.$store.state.config.colors === "colors2",
        colors3: this.$store.state.config.colors === "colors3",
      };
    },
    navOptions() {
      return {
        "--nav-align": this.$store.state.config.navAlign,
        "--nav-gap": this.$store.state.config.navGap + "rem",
      };
    },
  },
  created() {
    this.$store.dispatch("fetchProducts");
    this.$store.dispatch("fetchTranslations");
    this.$store.dispatch("fetchConfig");
  },
};
</script>

<template>
  <div
    v-if="translationsAndConfigLoaded"
    :class="[this.fontClass, this.colorClass]"
  >
    <div id="nav" class="navigation" :style="navOptions">
      <router-link to="/">
        {{ localize.homeBtn }}
      </router-link>
      <router-link to="/options">
        {{ localize.options }}
      </router-link>

      <Sidebar v-if="this.$store.state.sidebarOpen">
        <Cart />
      </Sidebar>
      <hamburger @click="this.$store.commit('setSidebarOpen', !sideBarOpen)" />
    </div>
    <router-view :key="this.$route.path" />
    <TheFooter />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  --nav-height: 50px;

  --grey-color: rgb(71, 71, 71);
  --medium-grey-color: #938e8e;
  --lightgrey-color: #c4c4c4;

  --font-size-08: 0.8rem;
  --font-size-13: 1.3rem;
  --font-size-15: 1.5rem;

  --font-xsmall: 0.8rem;
  --font-small: 0.9rem;
}

/* config options */

.ubuntu {
  font-family: "Ubuntu", sans-serif;
}

.roboto {
  font-family: "Roboto", sans-serif;
}

.openSans {
  font-family: "Open sans", sans-serif;
}

.colors1 {
  * {
    --accent-color1: #42b983;
    --accent-color2: #e09520;
    --accent-color3: #00b2f7;
  }
}

.colors2 {
  * {
    --accent-color1: #ef1b28;
    --accent-color2: #4e69e9;
    --accent-color3: #348c00;
  }
}

.colors3 {
  * {
    --accent-color1: #004b84;
    --accent-color2: #8ae280;
    --accent-color3: #daa21c;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #222;
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: var(--nav-align);
  gap: var(--nav-gap);

  a {
    font-weight: bold;
    color: var(--accent-color1);

    &.router-link-exact-active {
      color: var(--accent-color2);
    }
  }
}

a {
  color: #222;
}

.container {
  padding-inline: 1rem;
}

.small-container {
  width: 100%;
  padding-inline: 5px;
  height: 100%;
  display: grid;
  place-items: center;
  justify-items: stretch;
}

.section {
  padding: 4em 0;
}

.btn-group {
  display: flex;

  button:first-of-type {
    background-color: var(--accent-color1);
  }
}

.form-btn-group {
  justify-content: space-between;
}

.product-btn-group {
  gap: 1rem;
}

.btn-center {
  justify-content: center;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #e9e9e9;
}

::-webkit-scrollbar-thumb {
  background: rgb(58, 58, 58);
  &:hover {
    background: rgb(90, 90, 90);
  }
}

.title-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  margin-bottom: 2.5rem;
}

.section-title {
  font-size: clamp(1.5rem, calc(20px + 1vw), 3rem);
  font-weight: 500;
}

.section-subtitle {
  font-size: clamp(1rem, calc(1rem + 1vw), 1.3rem);
  width: 80%;
  line-height: 26px;
  color: var(--grey-color);
}

@media (min-width: 768px) {
  .container {
    max-width: 1400px;
    margin-inline: auto;
  }
  .small-container {
    max-width: 800px;
    margin-inline: auto;
  }

  .section-subtitle {
    width: 80%;
  }
}
</style>
