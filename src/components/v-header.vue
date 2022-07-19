<template>
  <header class="v-header">
    <div class="v-header__top"></div>
    <div class="v-header__bot">
      <div class="v-header__content">
        <v-main-logo class="logo" />
        <button class="btn-s btn-grey" v-if="isUserLogged" @click="logOut">
          Log out
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import vMainLogo from './v-main-logo.vue'
import { mapState, mapMutations } from 'vuex'
export default {
  components: { vMainLogo },
  name: 'v-header',
  data() {
    return {}
  },
  computed: {
    ...mapState(['isUserLogged']),
  },
  created() {
    if (Object.keys(localStorage)?.length) {
      this.CHANGE_USER_STATUS()
    }
  },
  methods: {
    ...mapMutations(['CHANGE_USER_STATUS']),
    logOut() {
      localStorage.setItem('isUserLogged', false)
      this.CHANGE_USER_STATUS()
      localStorage.clear()
      this.$router.push({
        name: 'Login',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.v-header {
  width: 100%;
  &__top {
    height: 53px;
    background-color: #333333;
  }
  &__bot {
    background: linear-gradient(180deg, #00afed 0%, #00569a 100%);
  }
  &__content {
    max-width: 1184px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    .logo {
      width: 103px;
      height: 66px;
      margin-left: 10px;
      cursor: pointer;
    }
  }
  .btn-grey {
    transition: 0.4s;
    margin-right: 10px;
  }
  .btn-grey:hover {
    border: 2px solid #0076c0;
    background-color: #fff;
    color: #333333;
    transition: 0.7s;
  }
}

@media (max-width: 1200px) {
  .v-header {
    &__content {
      max-width: 970px;
    }
  }
}

@media (max-width: 992px) {
  .v-header {
    &__content {
      max-width: 750px;
    }
  }
}

@media (max-width: 767px) {
  .v-header {
    &__content {
      max-width: 450px;
    }
  }
}

@media (max-width: 480px) {
  .v-header {
    max-width: none;
  }
}
</style>
