<script>
export default {
  data() {
    return {
      exeptionArr: ["МДИ", "МДІ", "(ППУ)", "«GRACO»", "«GAMA»"],
    };
  },
  name: "InputBeautifier",
  props: ["productDesc"],
  computed: {
    beautifier() {
      let input = this.productDesc.split(/\s+/);
      let idx;
      input.forEach((element, index) => {
        // console.log(index);
        // console.log(element);
        if (this.exeptionArr.includes(element.replace(/[.,:;]/g, ""))) return;
        let reg = /\d/;
        if (reg.test(element)) {
          //   console.log(`${element} contains numbers`);
          return;
        }
        // if (element === "ТОВ") return;
        if (
          element === element.toUpperCase() &&
          (element.length > 3 || idx + 1 === index)
        ) {
          if (idx + 1 === index) {
            // console.log(element);
            input[index] = element.toLowerCase();
            input[index] = "<b>" + input[index] + "</b>";
            idx = index;
            return;
          }
          input[index] = element.toLowerCase();
          input[index] =
            "<br /><br /><b> " +
            input[index][0].toUpperCase() +
            input[index].slice(1) +
            "</b>";
          idx = index;
        }
      });
      let output = input.join(" ");
      return output;
    },
  },
};
</script>

<template>
  <p v-html="beautifier"></p>
</template>

<style lang="scss" scoped>
p {
  line-height: 1.3;
}
</style>