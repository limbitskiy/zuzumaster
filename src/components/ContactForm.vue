<template>
  <div class="contact-form">
    <form>
      <TheInput v-model="this.name" placeholder="Имя" />
      <TheInput v-model="phoneNumber" placeholder="Телефон" />
      <TheBtn
        :id="this.btnId"
        :onclick="this.onclick"
        color="white"
        @click="
          sendData();
          afterSendData();
        "
        >ЗАКАЗАТЬ ЗВОНОК</TheBtn
      >
    </form>
    <p>
      <span>*</span>Оставьте нам свои контакты и мы свяжемся с вами в ближайшее
      время
    </p>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  props: ["btnId", "onclick"],
  data() {
    return {
      name: "",
      phoneNumber: "",
    };
  },
  methods: {
    sendData() {
      if (!this.name || !this.phoneNumber) {
        alert("Пожалуйста заполните поля 'Имя' и 'Телефон'");
        return;
      }

      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("phoneNumber", this.phoneNumber);

      fetch("mail.php", {
        method: "post",
        body: formData,
      })
        .then(function (response) {
          return response.text();
        })
        .then(function (text) {
          console.log(text);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    afterSendData() {
      alert("Благодарим за Вашу заявку. Мы свяжемся с Вами в кратчайшие сроки");
      this.name = "";
      this.phoneNumber = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-form {
  margin-block: 2rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    * {
      border-radius: var(--border-radius);
      height: 45px;
    }

    input {
      border: none;
      padding-inline: 1rem;
    }
  }

  p {
    color: white;
    font-size: var(--font-small);
    line-height: 18px;
    margin-block: 0.5rem;

    span {
      font-size: var(--font-big);
    }
  }
}
</style>