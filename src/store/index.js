import Vue from "vue";
import Vuex from "vuex";

import { generateId } from "../utils/generateID";
import { saveToLocalStorage } from "../utils/localStorage";

import {
  ADD_TODO,
  TOGGLE_TODO_DONE,
  DELETE_TODO,
  SET_FILTER,
  SET_TODOS,
  CLEAR_COMPLETED,
} from "./mutation_types";
import { FILTER_ACTIVE, FILTER_ALL, FILTER_COMPLETED } from "./types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    filterState: FILTER_ALL,
  },
  mutations: {
    [SET_TODOS]: (state, todos) => {
      state.todos = todos;
    },
    [ADD_TODO]: (state, todoTitle) => {
      state.todos.push({
        id: generateId(),
        text: todoTitle,
        done: false,
      });
    },
    [TOGGLE_TODO_DONE]: (state, todoId) => {
      const currentTodo = state.todos.find((t) => t.id === todoId);
      currentTodo.done = !currentTodo.done;
      saveToLocalStorage("todos", state.todos); // тут вручную вызываю обновление LS, не знаю почему watch не срабатывает, наверное особенности реактивности Vue 2 и Vue 3
    },
    [DELETE_TODO]: (state, todoId) => {
      state.todos = state.todos.filter((t) => t.id !== todoId);
    },
    [SET_FILTER]: (state, filter) => {
      state.filterState = filter;
    },
    [CLEAR_COMPLETED]: (state) => {
      state.todos = state.todos.filter((t) => !t.done);
    },
  },
  getters: {
    filteredTodos(state, getters) {
      switch (state.filterState) {
        case FILTER_ALL:
          return getters.allTodos;
        case FILTER_ACTIVE:
          return getters.notCompletedTodos;
        case FILTER_COMPLETED:
          return getters.completedTodos;
        default:
          return getters.allTodos;
      }
    },
    allTodos(state) {
      return state.todos;
    },
    completedTodos(state) {
      return state.todos.filter((t) => t.done);
    },
    notCompletedTodos(state) {
      return state.todos.filter((t) => !t.done);
    },
    currentFilterState(state) {
      return state.filterState;
    },
  },
});
