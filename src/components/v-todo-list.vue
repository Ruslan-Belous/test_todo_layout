<template>
  <div class="v-todo-list">
    <v-todo-item v-for="(item, i) in todoList" :key="i" :item="item" />
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import vTodoItem from './v-todo-item.vue'
export default {
  components: { vTodoItem },
  name: 'v-todo-list',
  data() {
    return {}
  },
  computed: {
    ...mapState(['todoList']),
  },
  methods: {
    ...mapMutations(['DELETE_SELECTED', 'CHOOSE_ALL']),
  },
}
</script>

<style lang="scss" scoped>
.v-todo-list {
  max-width: 1184px;
  margin: 40px 0;
}
</style>
