<script>
import ContactForm from "@/components/ContactForm.vue";
import TheCalculator from "@/components/TheCalculator.vue";
import SocialIcons from "@/components/SocialIcons.vue";

export default {
  components: { ContactForm, TheCalculator, SocialIcons },
};
</script>

<template>
  <header>
    <div class="contact-header">
      <div class="container">
        <div class="header-logo"></div>
        <div class="header-phone">
          <i class="fa fa-mobile" aria-hidden="true"></i>
          <a
            href="tel:+7 916 633 56 23"
            id="headerPhoneNum"
            onclick="ym(87449113,'reachGoal','headerPhoneNum')"
            >+7 916 633 56 23</a
          >
        </div>
        <div class="header-adress">
          <i class="fa fa-map-marker only-mobile" aria-hidden="true"></i>
          <span class="only-desktop">
            Москва, <br />ул.Плеханова, 10а. <br />1,5 км от метро «Шоссе
            Энтузиастов»
          </span>
        </div>
      </div>
    </div>
    <div class="hero">
      <div class="container">
        <div class="hero-text">
          <h1>
            zuzumaster.ru<br />
            <span>Фрезерная резка под заказ</span>
          </h1>
          <ContactForm
            btnId="headerFormBtn"
            onclick="ym(87449113,'reachGoal','headerFormBtn')"
          />
        </div>
        <div class="hero-image">
          <img class="only-desktop" src="/images/hero-bg.png" alt="" />
        </div>
      </div>
    </div>
  </header>

  <main>
    <div class="container">
      <div class="about section">
        <div class="about-text">
          <div class="title-box">
            <h2 class="section-title">
              Мы занимаемся фрезерной обработкой неметаллов по чертежам клиента
              на оборудовании с ЧПУ.
            </h2>
          </div>
          <p>
            В нашей мастерской осуществляется, прежде всего,
            <span class="accent-text">криволинейный раскрой</span>
            неметаллических плитных материалов. Работы производим по макетам
            заказчика, или макетам, разработанным специалистами компании.
          </p>
          <p>
            Также мы, попутно, оказываем инженерную, технологическую и
            техническую помощь, в частности, при
            <span class="accent-text">реализации стартап проектов.</span>
            Ведь эти факторы, по одному, или в совокупности, являются, зачастую,
            сложностью для начинающих предпринимателей.
          </p>
          <p>
            Практикуем <span class="accent-text">индивидуальный подход</span> к
            каждому клиенту, при этом не имеет значение характер заказа:
            разовый/систематический; единичный/серийный; дешевый/дорогой – мы
            просто делаем свою работу и получаем от этого удовольствие.
          </p>

          <div class="btn-group">
            <TheBtn
              id="gotoCalc"
              href="#calc"
              color="#606060"
              onclick="ym(87449113,'reachGoal','gotoCalc')"
              >КАЛЬКУЛЯТОР</TheBtn
            >
            <TheBtn
              id="gotoPrice"
              href="#prices"
              color="#606060"
              onclick="ym(87449113,'reachGoal','gotoPrice')"
              >ПРАЙС</TheBtn
            >
            <!-- <TheBtn color="#606060">ГАЛЕРЕЯ РАБОТ</TheBtn> -->
            <TheBtn
              id="gotoContacts"
              href="#footer"
              color="#606060"
              onclick="ym(87449113,'reachGoal','gotoContacts')"
              >КОНТАКТЫ</TheBtn
            >
          </div>
        </div>
        <div class="about-image only-desktop">
          <img src="/images/about-bg.png" alt="" />
        </div>
      </div>
    </div>

    <div class="services section">
      <div class="container">
        <div class="title-box text-center">
          <h2 class="section-title">
            <span class="accent-text">Дополнительные услуги:</span>
          </h2>
          <p class="section-subtitle">
            Помимо очевидной фрезерной резки по вашему чертежу, мы также
            предоставляем некоторые
            <span class="accent-text">другие услуги:</span>
          </p>
        </div>

        <div class="split-three">
          <div class="service">
            <div class="s-header">
              <img src="/images/service1.svg" alt="icon - drilling" />
              <span>3D фрезеровка, сборка</span>
            </div>
            <p>
              Вам требуется выполнить рельефную обработку поверхности,
              изготовить матрицу, или пуансон, Вам необходимо провести ряд работ
              с использованием «прямых» рук -
              <span class="accent-text">Вы обратились по адресу.</span>
            </p>
          </div>

          <div class="service">
            <div class="s-header">
              <img src="/images/service2.svg" alt="icon - ingeneering" />
              <span>инженерная/технологическая помощь</span>
            </div>
            <p>
              Вам нужно скорректировать рабочий макет, или создать новый по
              чертежу, эскизу, или образцу; Вам нужно подобрать подходящий
              материал, или уточнить свойства и специфику обработки выбранного
              Вами – <span class="accent-text">Вы обратились по адресу.</span>
            </p>
          </div>

          <div class="service">
            <div class="s-header">
              <img src="/images/service3.svg" alt="icon - idea" />
              <span
                >содействие в разработке/доработке пилотных
                изделий/проектов</span
              >
            </div>
            <p>
              Вы реализуете некую идею, Вам не хватает опыта, Вы не можете
              спрогнозировать качественность результата, Вам требуется более
              углубленный уровень взаимодействие с подрядчиком, нежели банальный
              «все выполнено по вашим чертежам», чтобы минимизировать затраты
              времени и денег на эксперименты и тестирование –
              <span class="accent-text">Вы обратились по адресу.</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="calculator section" id="calc">
      <!-- <div class="container"> -->
      <div class="title-box text-center">
        <h2 class="section-title">Калькулятор:</h2>
        <p class="section-subtitle">
          Для подсчета стоимости Вашей работы, Вы можете воспользоваться нашим
          <span class="accent-text">калькулятором цен.</span> Немного ниже Вы
          также можете найти
          <span class="accent-text">таблицу со всеми расценками.</span>
        </p>
      </div>

      <div class="small-window">
        <TheCalculator />
        <ul class="calculator-comments">
          <i class="fas fa-exclamation-triangle"></i>
          <p>Тарифы разделены на 3 группы:</p>
          <li>до 500пм</li>
          <li>до 1000пм</li>
          <li>от 1000пм</li>
        </ul>

        <a
          id="fromCalcToTable"
          href="#prices"
          onclick="ym(87449113,'reachGoal','fromCalcToTable')"
          >Смотреть в виде таблицы</a
        >
      </div>

      <p class="text-center">
        Остались вопросы? Звоните -
        <a href="tel:+7 916 633 56 23">+7&nbsp;916&nbsp;633&nbsp;56&nbsp;23</a>
      </p>
      <!-- </div> -->
    </div>

    <div class="prices section" id="prices">
      <!-- <div class="container"> -->
      <div class="title-box text-center">
        <h2 class="section-title">Таблица тарифов:</h2>
        <p class="section-subtitle">
          Здесь размещены
          <span class="accent-text">все наши тарифы в одном месте.</span> Для
          тех, кто предпочитает таблицы калькуляторам.
        </p>
      </div>
      <h3 class="text-center">Работы:</h3>
      <div class="small-window">
        <div style="overflow-x: auto">
          <div class="price-table">
            <table cellspacing="25px">
              <thead>
                <tr>
                  <td class="selected" rowspan="2">Материал</td>
                  <td class="selected" rowspan="2">Толщина</td>
                  <td class="selected" colspan="3">Цена за 1мп</td>
                </tr>
                <tr>
                  <td class="selected">до 500</td>
                  <td class="selected">до 1000</td>
                  <td class="selected">от 1000</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="selected" rowspan="7">Фанера, МДФ, ДСП, Дерево</td>
                  <td>1-6</td>
                  <td>17</td>
                  <td>15</td>
                  <td>13</td>
                </tr>
                <tr>
                  <td>7-12</td>
                  <td>33</td>
                  <td>29</td>
                  <td>25</td>
                </tr>
                <tr>
                  <td>13-18</td>
                  <td>46</td>
                  <td>42</td>
                  <td>38</td>
                </tr>
                <tr>
                  <td>19-24</td>
                  <td>59</td>
                  <td>55</td>
                  <td>51</td>
                </tr>
                <tr>
                  <td>25-30</td>
                  <td>74</td>
                  <td>69</td>
                  <td>64</td>
                </tr>
                <tr>
                  <td>31-36</td>
                  <td>86</td>
                  <td>81</td>
                  <td>76</td>
                </tr>
                <tr>
                  <td>37-40</td>
                  <td>99</td>
                  <td>94</td>
                  <td>89</td>
                </tr>
                <tr>
                  <td class="selected" rowspan="4">Акрил</td>
                  <td>2-4</td>
                  <td>17</td>
                  <td>15</td>
                  <td>13</td>
                </tr>
                <tr>
                  <td>5-8</td>
                  <td>33</td>
                  <td>29</td>
                  <td>25</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>46</td>
                  <td>42</td>
                  <td>38</td>
                </tr>
                <tr>
                  <td>12-15</td>
                  <td>61</td>
                  <td>56</td>
                  <td>51</td>
                </tr>
                <tr>
                  <td class="selected">Композит</td>
                  <td>3-4</td>
                  <td>17</td>
                  <td>15</td>
                  <td>13</td>
                </tr>
                <tr>
                  <td class="selected" rowspan="2">ПВХ</td>
                  <td>0.5-6</td>
                  <td>17</td>
                  <td>15</td>
                  <td>13</td>
                </tr>
                <tr>
                  <td>7-12</td>
                  <td>33</td>
                  <td>29</td>
                  <td>25</td>
                </tr>
                <tr>
                  <td class="selected" rowspan="2">Полистирол, ПЭТ</td>
                  <td>1-2</td>
                  <td>17</td>
                  <td>15</td>
                  <td>13</td>
                </tr>
                <tr>
                  <td>3-4</td>
                  <td>33</td>
                  <td>29</td>
                  <td>25</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- </div> -->

      <h3 class="text-center">Услуги:</h3>
      <div class="small-window">
        <table cellspacing="15px">
          <tbody>
            <tr>
              <td class="selected">3D фрезеровка</td>
              <td>1500 р/час</td>
            </tr>
            <tr>
              <td class="selected">Проектирование</td>
              <td>500 р/час</td>
            </tr>
            <tr>
              <td class="selected">Подготовка 2D макета</td>
              <td>500 р/час</td>
            </tr>
            <tr>
              <td class="selected">Правка 2D макета</td>
              <td>500 р/час</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>

  <footer id="footer">
    <div class="container">
      <div class="f-about">
        <p class="f-logo">zuzumaster.ru</p>
        <p>
          Криволинейный раскрой неметаллических плитных материалов. Работы по
          макетам заказчика, или макетам, разработанным специалистами компании.
          Инженерная, технологическая и техническая помощь при реализации
          стартап проектов.
        </p>

        <SocialIcons />
      </div>

      <div class="f-contacts">
        <p class="f-title">КОНТАКТЫ</p>
        <img src="/images/map.jpg" />
        <div class="contact-items">
          <div class="contact-item">
            <i class="fa fa-map-marker"></i>
            <p>
              Москва, ул.Плеханова, 10а. 1,5 км от метро «Шоссе Энтузиастов»
            </p>
          </div>
          <div class="contact-item">
            <i class="fa fa-envelope"></i>
            <p>zuzumaster@yandex.ru</p>
          </div>
          <div class="contact-item">
            <i class="fa fa-clock"></i>
            <p>Пн-Пт. 10:00 - 18:00</p>
          </div>
        </div>
      </div>

      <div class="f-form">
        <p class="f-title">СВЯЖИТЕСЬ С НАМИ</p>
        <ContactForm
          btnId="footerFormBtn"
          onclick="ym(87449113,'reachGoal','footerFormBtn')"
        />
        <SocialIcons />
      </div>
    </div>
  </footer>
  <div class="sub-footer">
    <div class="container">2022 zuzumaster.ru</div>
  </div>
</template>

<style lang="scss">
// =====VARIABLES=====

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-feature-settings: "pnum" on, "lnum" on;

  --accent-color1: #34779d;

  --hero-bg: #404952;
  --hero-bg-lighten: #475059;

  --black-color: #222222;

  --grey-text: #888888;

  --grey-bg: #f4f3f3;

  --font-xsmall: 0.75rem;
  --font-small: 0.875rem;
  --font-big: 1.125rem;
  --font-bigger: 1.25rem;
  --font-big: 1.375rem;

  --font-raleway: "Raleway", sans-serif;
  --font-roboto: "Roboto", sans-serif;

  --border-radius: 8px;

  --box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.25);
}

// =====GENERAL=====

#app {
  font-family: var(--font-raleway);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--black-color);
}

html {
  scroll-behavior: smooth;
}

a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-color1);
  }
}

p {
  color: var(--grey-text);
  margin-bottom: 1rem;
  font-weight: 500;
  line-height: 30px;
}

// ol {
//   margin-left: 3vw;

//   li::marker {
//     font-weight: 700;
//   }
// }

ul {
  list-style: none;
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

.small-window {
  background-color: var(--grey-bg);
  box-shadow: var(--box-shadow);
  margin-inline: auto;
  padding: 2rem;
  width: 100%;
}

// =====UTILITY=====

.container {
  padding-inline: 1rem;
}

.text-center {
  text-align: center;
}

.split-three {
  display: grid;
  gap: 2rem;
}

.section {
  padding: 4em 0;
}

.title-box {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.section-title {
  font-size: clamp(1.5rem, calc(20px + 1vw), 3rem);
  font-weight: 600;
}

.section-subtitle {
  font-size: clamp(1rem, calc(1rem + 1vw), 1.3rem);
  line-height: 30px;
  color: var(--grey-text);
  margin: 0;
}

.only-desktop {
  display: none;
}

.only-mobile {
  display: block;
}

.accent-text {
  color: var(--accent-color1);
}

.btn-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;

  > * {
    width: 100%;
  }
}

.form-btn-group {
  justify-content: space-between;
}

.btn-center {
  justify-content: center;
}

// =====PAGE=====

//header
header {
  h1 {
    color: white;
    font-family: var(--font-roboto);
    font-size: clamp(38px, calc(1.7rem + 3vw), 45px);
    letter-spacing: 3px;
    line-height: 70%;

    span {
      font-weight: 400;
      font-size: var(--font-bigger);
      line-height: 10px;
    }
  }

  .contact-header {
    background-color: var(--hero-bg-lighten);
    color: white;
    height: 60px;

    .container {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      justify-items: center;
      height: 100%;

      > * {
        display: flex;
        align-items: center;
        justify-items: center;
        gap: 0.5rem;
      }
    }

    i {
      font-size: 20px;
    }

    .header-phone {
      font-size: var(--font-small);
      font-weight: 600;
    }

    .header-adress {
      font-size: var(--font-xsmall);
      font-weight: 500;
      justify-self: right;
      text-align: right;
    }
  }

  .hero {
    background-color: var(--hero-bg);
    padding-block: 3rem;
  }
}

//about
.about {
}

//services
.services {
  background-color: #3c3c3c;
  color: white;

  p {
    color: white;
  }

  .s-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-family: var(--font-roboto);
    font-weight: 600;
    margin-bottom: 1rem;

    img {
      width: 57px;
      height: 57px;
    }
  }
}

//calculator
.calculator {
  a {
    color: var(--accent-color1);

    &:hover {
      text-decoration: underline;
    }
  }

  .calculator-comments {
    margin-block: 1rem;
    list-style: disc;

    i {
      color: orange;
    }

    p {
      display: inline-block;
      margin: 0 0 0.5rem 0.5rem;
    }

    li {
      margin-left: 2rem;
      line-height: 25px;
    }
  }
}

//price-table
.prices {
  h3 {
    margin-block: 4rem 1.5rem;
  }

  table {
    color: grey;

    td {
      padding: 0 1vw;
    }

    .selected {
      color: var(--black-color);
      font-weight: 500;
    }
  }

  .price-table {
    table {
      border-collapse: collapse;
      text-align: center;

      thead {
        td {
          padding: 5px 10px;
        }
      }

      tbody {
        tr {
          border-top: 1px solid lightgrey;
          border-bottom: 1px solid lightgrey;
        }

        tr:last-child {
          border-bottom: none;
        }

        td {
          padding: 15px;
        }
      }

      th {
        tr {
          border: none;
        }
      }
    }
  }
}

//footer
footer {
  background-color: var(--black-color);
  padding-block: 4rem 2rem;

  .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .f-title {
    color: var(--accent-color1);
    font-weight: 600;
  }

  .f-about {
    align-self: center;
  }

  .f-logo {
    font-family: var(--font-roboto);
    font-size: 35px;
    letter-spacing: 3px;
    line-height: 70%;
    color: var(--accent-color1);
  }

  img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
  }

  .f-about {
    .social {
      display: none;
    }
  }

  .f-form {
    .social {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
    }
  }

  .contact-items {
    margin-block: 0.5rem;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: white;

    i {
      font-size: 20px;
    }

    p {
      margin: 0;
    }
  }
}

.sub-footer {
  background-color: var(--hero-bg);
  color: white;
  padding: 1rem;
}

// =====MEDIA=====

@media (min-width: 768px) {
  .small-window {
    width: fit-content;
  }

  .split-three {
    grid-template-columns: repeat(3, 1fr);
  }

  .btn-group {
    > * {
      width: min-content;
    }
  }

  .container {
    max-width: 1400px;
    margin-inline: auto;
  }
  // .small-container {
  //   max-width: 800px;
  //   margin-inline: auto;
  // }

  .title-box {
    align-items: center;
  }

  .section-subtitle {
    width: 80%;
  }

  .only-desktop {
    display: block;
  }

  .only-mobile {
    display: none;
  }

  //header
  header {
    .contact-header {
      .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        place-items: center;
      }
    }
    .hero {
      background-color: var(--hero-bg);
      padding-block: 0;

      .container {
        display: grid;
        grid-template-columns: repeat(2, 40%);
        align-items: center;
        justify-content: space-between;
        gap: 10%;
      }
    }

    .hero-image {
      img {
        object-fit: cover;
        width: 100%;
      }
    }
  }

  //about
  .about {
    display: grid;
    grid-template-columns: 65% 30%;
    place-items: center;
    gap: 1.5rem;

    p {
      text-indent: 20px;
    }

    .about-image {
      display: none;
    }
  }

  //footer
  footer {
    .container {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 3rem;
    }

    .f-about {
      .social {
        display: flex;
      }
    }

    .f-form {
      .social {
        display: none;
      }
    }
  }
}

@media (min-width: 1000px) {
  .about {
    .about-image {
      display: block;

      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
