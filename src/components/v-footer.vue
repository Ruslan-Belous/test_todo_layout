<template>
  <footer class="v-footer">
    <div class="content">
      <div class="content__top">
        <v-main-logo class="footer-logo" />
        <v-footer-nav class="content__nav" />
      </div>
      <hr />
      <p class="content__privacy">
        Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal
        Opportunity Lender.
      </p>
    </div>
  </footer>
</template>

<script>
import VFooterNav from './v-footer-nav.vue'
import vMainLogo from './v-main-logo.vue'

export default {
  components: { vMainLogo, VFooterNav },
  name: 'v-footer',
}
</script>

<style lang="scss" scoped>
.v-footer {
  width: 100%;
  background-color: #333333;
  .content {
    max-width: 1184px;
    margin: 0 auto;
    &__top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__privacy {
      color: #fff;
      font: 500 12px 'Montserrat';
      padding: 25px 0 25px 10px;
    }
    &__nav {
      padding: 35px 30px;
    }
    & hr {
      margin: 0;
    }
  }
}
.footer-logo {
  width: 56px;
  height: 35px;
  padding-left: 10px;
}

@media (max-width: 1200px) {
  .v-footer {
    .content {
      max-width: 970px;
    }
  }
}

@media (max-width: 992px) {
  .v-footer {
    .content {
      max-width: 750px;
    }
  }
}

@media (max-width: 767px) {
  .v-footer {
    .content {
      max-width: 450px;
      &__nav {
        padding: 20px 0px 20px 30px;
      }
    }
  }
}

@media (max-width: 480px) {
  .v-footer {
    .content {
      max-width: none;
      &__nav {
        padding: 20px 0px 20px 30px;
      }
      hr {
        width: 90%;
        margin: 0 auto;
      }
      &__privacy {
        padding: 30px 10px;
      }
    }
  }
}
</style>
