<template>
  <img class="main-logo" :src="mainLogo" alt="mainLogo" />
</template>

<script>
import mainLogo from '../assets/images/mainLogo.png'
export default {
  name: 'v-main-logo',
  data() {
    return {
      mainLogo,
    }
  },
}
</script>

<style lang="scss" scoped></style>
