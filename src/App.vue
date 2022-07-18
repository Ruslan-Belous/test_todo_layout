<template>
  <div id="app">
    <v-header />
    <router-view />
    <v-footer />
  </div>
</template>

<script>
import VFooter from './components/v-footer.vue'
import VHeader from './components/v-header.vue'

export default {
  components: { VHeader, VFooter },
  name: 'app',
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
p {
  margin: 0;
  padding: 0;
}
ul {
  padding: 0;
  margin: 0;
}
li {
  margin: 0;
  padding: 0;
}
input {
  margin: 0;
  padding: 0;
}
#app {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
