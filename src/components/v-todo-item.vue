<template>
  <div class="v-todo-item">
    <div class="v-todo-item__state" v-if="item.mode">
      <input
        class="v-todo-item__checkbox"
        type="checkbox"
        @change="isTodoCompleted"
      />

      <span
        :class="{ completed: item.isCompleted }"
        @dblclick="switchModeTodo"
        v-touch:touchhold="switchModeTodo"
        >{{ item.title }}</span
      >

      <button class="btn-s btn-del" @click="DELETE_TODO(item.id)">
        Delete
      </button>
    </div>
    <div class="v-todo-item__state" v-if="!item.mode">
      <input
        class="v-todo-item__input"
        type="text"
        v-model="item.title"
        @keyup.enter="switchModeTodo"
      />
      <button class="btn-s btn-grey" @click="switchModeTodo">Save</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'v-todo-item',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations(['DELETE_TODO']),
    switchModeTodo() {
      this.item.mode = !this.item.mode
    },
    isTodoCompleted() {
      this.item.isCompleted = !this.item.isCompleted
    },
  },
}
</script>

<style lang="scss" scoped>
.v-todo-item {
  margin-bottom: 15px;
  &__state {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__checkbox {
    width: 30px;
    height: 30px;
  }
  &__input {
    border: 1px solid #9a9a9a;
    font: 400 18px 'Roboto';
    color: #333333;
    padding: 8px 25px;
    width: 50%;
  }
  span {
    font: 500 18px 'Roboto';
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 6px;
  }
}
</style>
