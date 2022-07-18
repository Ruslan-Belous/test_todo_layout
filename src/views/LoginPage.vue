<template>
  <main class="v-container">
    <img class="v-container__main-bg" :src="mainBg" alt="" />
    <div class="content">
      <div class="content__article">
        <p class="content__title">
          Welcome to<br />
          Business Analytics Online
        </p>
        <div class="content__section">
          <p class="content__note">
            <span>Business Analytics</span> — a new, convenient tool for
            managing and forecasting your business performance, which will help
            analyze your own finances and cash flows, visualize your reporting,
            business processes, KPI's
          </p>
          <ul>
            <li v-for="(li, i) in list" :key="i">
              <span>{{ li.title }}</span>
              <p>{{ li.note }}</p>
            </li>
          </ul>
        </div>
      </div>
      <v-form class="content__form" />
    </div>
  </main>
</template>

<script>
import mainBg from '../assets/images/background.png'
import vForm from '../components/v-form.vue'
export default {
  components: { vForm },
  name: 'LoginPage',
  data() {
    return {
      mainBg,
      list: [
        {
          title: 'Interactive Reporting',
          note: 'In just a few clicks, you can connect your data from 1C, CRM (Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and many more systems that reflect different aspects of business activities.',
        },
        {
          title: 'Automated data updates',
          note: 'The application automatically updates and structures the data in just 60 seconds, saving you time and money.',
        },
        {
          title: 'Data Security',
          note: 'The Bank guarantees the safety of your personal data, ensuring their integrity and confidentiality.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.v-container {
  &__main-bg {
    width: 100%;
    height: 457px;
    position: absolute;
    top: 149px;
    left: 0;
  }
  .content {
    max-width: 1184px;
    margin: 0 auto;
    padding: 0 10px 0 10px;
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    margin-top: 215px;
    &__article {
      width: 61%;
    }
    &__title {
      font: 500 55px/86px 'Roboto';
      color: #fff;
      margin: 0 0 70px 0;
    }
    &__section {
      width: 100%;
      float: left;
      margin: 40px 0 40px 0;
      ul {
        list-style: none;
        li {
          position: relative;
          margin: 0 0 15px 37px;
          p {
            font: 400 14px/22px 'Roboto';
          }
        }
        li::before {
          content: '';
          position: absolute;
          background: url('../assets/images/listIcon.png') center center/contain
            no-repeat;
          width: 23px;
          height: 17px;
          left: -37px;
          top: 5px;
        }
      }
      span {
        font: 500 15px/25px 'Roboto';
      }
    }
    &__note {
      font: 400 15px/25px 'Roboto';
      color: #333333;
      margin-bottom: 15px;
      span {
        font: 500 15px/25px 'Roboto';
      }
    }
    &__form {
      width: 41%;
    }
  }
}

@media (max-width: 1200px) {
  .v-container {
    .content {
      max-width: 970px;
      margin: 100px auto;
      align-items: center;
      display: flex;
      flex-direction: column;
      &__form {
        width: 70%;
        justify-self: center;
        align-self: center;
      }
      &__section {
        margin: 75px 0;
      }
    }
  }
}

@media (max-width: 992px) {
  .v-container {
    .content {
      width: 100%;
      max-width: 750px;
      align-items: flex-start;
      padding: 0;
      &__article,
      &__form {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        align-items: center;
      }
    }
  }
}

@media (max-width: 767px) {
  .v-container {
    .content {
      max-width: 450px;
      &__article,
      &__form {
        width: 100%;
      }
    }
  }
}

@media (max-width: 480px) {
  .v-container {
    .content {
      max-width: none;
      &__note {
        padding: 0 10px;
      }
      ul {
        padding: 10px;
      }
      &__section {
        margin: 75px 0 30px 0;
      }
      &__title {
        padding: 0 10px;
      }
    }
  }
}
</style>
