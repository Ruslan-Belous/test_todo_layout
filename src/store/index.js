import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isUserLogged: false,
    todoList: [],
  },
  mutations: {
    CHANGE_USER_STATUS: (state) => state.isUserLogged = JSON.parse(localStorage.getItem('isUserLogged')),
    ADD_TODO_ITEM: (state, todoItem) => state.todoList.push(todoItem),
    DELETE_TODO: (state, id) => state.todoList = state.todoList.filter(el => el.id !== id),
  },
  actions: {
  },
  modules: {
  }
})
