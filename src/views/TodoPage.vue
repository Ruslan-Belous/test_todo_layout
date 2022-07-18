<template>
  <main class="v-container">
    <v-main-logo class="v-container__logo logo" />
    <div class="content">
      <h1>Thank you {{ getUserName }}!</h1>
      <button
        class="content__btn btn-blue btn-primary"
        @click="addTodoList"
        :class="{ hide: todoList.length }"
      >
        <font-awesome-icon
          icon="fa-solid fa-list"
          class="v-header__admin-panel__icon"
        />
        &nbsp;&nbsp; New todo list
      </button>
      <p v-if="!todoList.length">Theare no todos</p>
      <form
        class="content__new-todo"
        @submit.prevent="onSubmit"
        v-if="isFormVisible"
      >
        <input type="text" v-model="value" />
        <button class="btn-m btn-blue" type="submit" :disabled="cantAddTodo">
          Add new todo
        </button>
      </form>
      <v-todo-list class="content__todo-list" :todoList="todoList" />
    </div>
  </main>
</template>

<script>
import VMainLogo from '../components/v-main-logo.vue'
import VTodoList from '../components/v-todo-list.vue'
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'TodoList',
  components: { VTodoList, VMainLogo },

  data() {
    return {
      value: '',
      isFormVisible: false,
    }
  },
  computed: {
    ...mapState(['todoList']),
    cantAddTodo() {
      return !this.value
    },
    getUserName() {
      return localStorage.getItem('userName')
    },
  },
  watch: {
    todoList() {
      if (this.todoList.length === 0) {
        this.isFormVisible = false
      }
    },
  },
  methods: {
    ...mapMutations(['ADD_TODO_ITEM']),
    addTodoList() {
      this.isFormVisible = true
    },
    onSubmit() {
      const todoItem = {
        id: Date.now(),
        title: this.value,
        mode: true,
        isCompleted: false,
      }
      this.ADD_TODO_ITEM(todoItem)
      this.value = ''
    },
  },
}
</script>
<style lang="scss" scoped>
.v-container {
  background: linear-gradient(180deg, #00afed 25%, #00569a 64%, #e5e5e5 0%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  &__logo {
    align-self: center;
    margin: 65px 0;
  }
}
.content {
  max-width: 1184px;
  width: 100%;
  background-color: #fff;
  margin: 0 auto 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    margin: 32px 0;
  }
  &__btn {
    padding: 12px 0px;
    width: 50%;
  }
  p {
    margin: 20px 0 0px 0;
    text-align: center;
  }
  &__new-todo {
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin: 40px 0;
    input {
      border: 1px solid #9a9a9a;
      font: 400 18px 'Roboto';
      color: #333333;
      padding: 16px 25px;
      width: 60%;
    }
  }
  &__todo-list {
    width: 50%;
  }
}
@media (max-width: 1200px) {
  .content {
    max-width: 970px;
    &__new-todo {
      width: 70%;
      input {
        margin-right: 30px;
      }
    }
    &__todo-list {
      width: 70%;
    }
  }
}

@media (max-width: 992px) {
  .content {
    max-width: 750px;
  }
}

@media (max-width: 767px) {
  .content {
    max-width: 450px;
    &__new-todo {
      width: 90%;
      margin: 15px 0;
    }
    &__todo-list {
      width: 90%;
    }
    &__btn {
      width: auto;
      padding: 15px;
    }
  }
}

@media (max-width: 480px) {
  .content {
    max-width: none;
  }
}
</style>
