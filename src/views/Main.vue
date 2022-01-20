<template>
  <div class="cta" :style="[heroImage, heroTextColor]">
    <h1>
      {{ heroText }}
    </h1>
  </div>

  <div class="container section">
    <Catalog v-if="productsLoaded" />
  </div>

  <div class="section">
    <div class="title-box">
      <h2 class="section-title">
        {{ localize.aboutTitle }}
      </h2>
      <p class="section-subtitle">
        Главной задачей предприятия является не только обеспечение клиента
        продукцией высокого качества, но и выстраивание отношений,
        ориентированных на решение проблем и удовлетворение нужд потребителя.
      </p>
    </div>
    <div class="about-body">
      <figure>
        <img src="/images/about1.jpg" />
        <figcaption :class="{ open1: about1Open }">
          ЧП «Химпоставщик» на сегодняшний день занимает одно из лидирующих мест
          в химической отрасли страны. Стараясь развиваться по многим
          направлениям, предприятие успешно производит и реализует продукцию для
          различных сегментов рынка: комплекс аддитивов и связующих для ЛКМ
          строительного и индустриального назначения; комплекс аддитивов для
          переработки ПВХ; смолы для пропитки бумаги под ламинирование ДСП;
          ненасыщенные полиэфирные смолы и многое другое.
        </figcaption>
        <span @click="about1Open = !about1Open"
          >Читать далее<i class="fas fa-arrow-right"></i
        ></span>
      </figure>

      <figure>
        <img src="/images/about2.jpg" />
        <figcaption :class="{ open2: about2Open }">
          Еще одно перспективное направление производства – насыщенные
          полиэфирные смолы, которые являются основой для получения жёстких
          пенополиуретанов, применяющихся для теплоизоляции стен, кровель,
          резервуаров, трубопроводов, а также в производстве предизолированных
          труб, скорлуп, холодильного оборудования, для изготовления элементов
          декоративной отделки фасадов зданий.
        </figcaption>
        <span @click="about2Open = !about2Open"
          >Читать далее<i class="fas fa-arrow-right"></i
        ></span>
      </figure>

      <figure>
        <img src="/images/about3.jpg" />
        <figcaption :class="{ open3: about3Open }">
          Инвестиции в развитие исследовательской и производственной базы,
          привлечение высококвалифицированных кадров в технологический и
          управленческий состав позволили создать научно-производственное
          предприятие, владеющее собственным исследовательским центром,
          включающим в себя лабораторию технологического взаимодействия с
          потребителем. На его базе разрабатываются технологии производства
          продуктов для применения в различных нишах химической отрасли.
        </figcaption>
        <span @click="about3Open = !about3Open"
          >Читать далее<i class="fas fa-arrow-right"></i
        ></span>
      </figure>
    </div>
  </div>

  <div class="w-body">
    <div class="w-item">
      <div class="w-icon">
        <img src="/images/w-icon1.png" />
      </div>
      <div class="w-text">
        <p>НИЗКАЯ ЦЕНА/ВЫСОКОЕ КАЧЕСТВО</p>
        <p>Собственное производство - означает никаких накруток</p>
      </div>
    </div>

    <div class="w-item">
      <div class="w-icon">
        <img src="/images/w-icon2.png" />
      </div>
      <div class="w-text">
        <p>СОБСТВЕННЫЕ ЛАБОРАТОРИИ</p>
        <p>Технологическая поддержка и ведение клиента</p>
      </div>
    </div>

    <div class="w-item">
      <div class="w-icon">
        <img src="/images/w-icon3.png" />
      </div>
      <div class="w-text">
        <p>КОМПЛЕКС УСЛУГ</p>
        <p>Осуществляем выезд на обьект и все работы по напылению</p>
      </div>
    </div>
  </div>
</template>

<script>
import Catalog from "@/components/Catalog.vue";
export default {
  name: "Main",
  data() {
    return {
      about1Open: false,
      about2Open: false,
      about3Open: false,
    };
  },
  components: { Catalog },
  computed: {
    productsLoaded() {
      return this.$store.state.productsLoaded;
    },
    heroImage() {
      return {
        "--hero-image":
          "url('/images/" +
          this.$store.state.config.heroImage +
          "') center no-repeat",
      };
    },
    heroText() {
      return this.$store.state.config.heroText;
    },
    heroTextColor() {
      return {
        "--hero-text-color": this.$store.state.config.heroTextColor,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--hero-image);
  background-attachment: fixed;
  background-size: cover;
  gap: 2em;
  padding: 7rem 1rem;
  color: white;

  h1 {
    font-size: clamp(1.5rem, calc(1.5rem + 2vw), 3rem);
    color: var(--hero-text-color);
    max-width: min-content;
    line-height: 3rem;
  }

  li {
    font-size: clamp(1rem, calc(1rem + 1vw), 1.5rem);
    font-weight: 500;
    line-height: 2rem;
  }
}

.about-body {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;

  > p {
    max-width: 50vw;
  }

  figure {
    flex: 0 1 400px;

    img {
      width: 100%;
    }
  }

  figcaption {
    font-family: "Roboto", sans-serif;
    color: var(--medium-grey-color);
    margin-block: 1rem;
    overflow: hidden;
    height: 6.5ch;
    transition: all 0.3s ease;

    &.open1 {
      height: 30ch;
    }

    &.open2 {
      height: 28ch;
    }

    &.open3 {
      height: 34ch;
    }
  }

  span {
    font-size: var(--font-small);
    font-weight: 600;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: black;
    }

    &:hover i {
      transform: translateX(5px);
    }
  }

  i {
    font-size: 12px;
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
  }
}

.w-body {
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;

  .w-item {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 1.5rem 2rem;

    &:nth-child(2n) {
      background-color: #dae9ff;
    }

    &:nth-child(2n - 1) {
      background-color: #fcdfdf;
    }

    p:first-child {
      font-size: var(--font-xsmall);
      font-weight: 500;
      margin-bottom: 0.2rem;
    }

    p:last-child {
      font-size: var(--font-small);
      color: var(--medium-grey-color);
    }
  }
}

@media (min-width: 768px) {
  .cta {
    align-items: flex-start;
    padding: 10rem;

    h1 {
      max-width: 25ch;
      text-align: left;
    }

    li {
      margin-left: 4em;
      line-height: 2.6rem;
    }
  }

  .about-body {
    figcaption {
      &.open1 {
        height: 24ch;
      }

      &.open2 {
        height: 19ch;
      }

      &.open3 {
        height: 26ch;
      }
    }
  }

  .w-body {
    flex-direction: row;
  }
}
</style>