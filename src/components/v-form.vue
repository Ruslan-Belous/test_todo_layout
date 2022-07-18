<template>
  <form class="v-form" @submit.prevent="onSubmit">
    <div class="v-form__input-wrapp">
      <label for="lofin" class="">Name</label>
      <input
        type="text"
        class="form-control"
        id="name"
        :class="{ required: isLoginNotValid }"
        v-model="form.login"
      />
      <p v-if="isLoginNotValid">× Enter correct login</p>
    </div>
    <div class="v-form__input-wrapp">
      <label for="password" class="">Password</label>
      <input
        type="password"
        class="form-control"
        :class="{ required: isPassNotValid }"
        id="value"
        v-model="form.password"
      />
      <p v-if="isPassNotValid">× Enter correct password</p>
    </div>
    <button class="btn-blue btn-primary" type="submit">LOGIN</button>
    <p class="v-form__forgot">Forgot Password</p>
    <p class="v-form__register">Register now</p>
  </form>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'v-from',
  data() {
    return {
      form: {
        login: '',
        password: '',
      },
      isUserLogged: false,
      isLoginNotValid: false,
      isPassNotValid: false,
    }
  },
  computed: {},
  watch: {
    isUserLogged() {
      this.isUserLogged = localStorage.getItem('isUserLogged')
    },
  },
  methods: {
    ...mapMutations(['CHANGE_USER_STATUS']),
    onSubmit() {
      this.isLoginNotValid = !this.form.login
      this.isPassNotValid = !this.form.password
      if (this.form.login === 'Admin' && this.form.password === '12345') {
        localStorage.setItem('isUserLogged', true)
        localStorage.setItem('userName', 'Admin')
        this.CHANGE_USER_STATUS()
        this.$router.push({
          name: 'TodoPage',
        })
      } else (this.isLoginNotValid = true) && (this.isPassNotValid = true)
    },
  },
}
</script>

<style lang="scss" scoped>
.v-form {
  width: 100%;
  height: 100%;
  background: #fff;
  box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__input-wrapp {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 40px 30px;
    label {
      margin-bottom: 7px;
      font: 300 16px 'Roboto';
    }
    input {
      border: 1px solid #9a9a9a;
      font: 400 18px 'Roboto';
      color: #333333;
      padding: 16px 15px;
    }
    .required {
      border: 1px solid #d60000;
    }
    p {
      color: #d60000;
      margin-top: 5px;
    }
  }
  &__forgot {
    margin: 20px 23px;
    font: 400 20px 'Roboto';
    color: #056dae;
  }
  &__register {
    background: #f6f6f6;
    text-align: center;
    width: 100%;
    padding: 17px 0;
    font: 400 25px 'Roboto';
    color: #333333;
  }
}

@media (max-width: 480px) {
  .v-form {
    max-width: none;
    .btn-primary {
      padding: 12px 100px;
    }
  }
}
</style>
