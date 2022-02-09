<script>
export default {
  name: "TheBtn",
  props: {
    color: {
      required: true,
    },
    href: {
      required: false,
    },
    id: {
      required: false,
    },
  },
  computed: {
    btnStyle() {
      return "--btn-color:" + this.color;
    },
  },
};
</script>

<template>
  <a :href="href" :style="btnStyle" :id="id">
    <slot></slot>
  </a>
</template>

<style lang="scss" scoped>
a {
  cursor: pointer;
  font-size: var(--font-xsmall);
  font-weight: 600;
  padding: 1em 2.8em;
  border: 1px solid var(--btn-color);
  border-radius: var(--border-radius);
  /* box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3); */
  color: var(--btn-color);
  background-color: transparent;
  text-align: center;
  line-height: 20px;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: white;
    background-color: var(--accent-color1);
  }
}
</style>