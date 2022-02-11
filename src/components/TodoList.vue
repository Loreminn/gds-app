<template>
  <div class="todo-list">
    <todo-item v-for="todo in todos" :key="todo.id" :todo="todo" />
    <div class="todo-list__empty" v-if="todos.length === 0">
      Ваш список задач пуст
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

import { mapGetters, mapMutations } from "vuex";

import { SET_TODOS } from "../store/mutation_types";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/localStorage";

export default {
  name: "TodoList",
  components: { TodoItem },
  computed: mapGetters({
    todos: "filteredTodos",
  }),
  watch: {
    todos(newTodos) {
      saveToLocalStorage("todos", newTodos);
    },
  },
  methods: mapMutations({
    setTodos: SET_TODOS,
  }),
  mounted() {
    const todos = getFromLocalStorage("todos");
    if (todos) {
      this.setTodos(todos);
    }
  },
};
</script>

<style>
.todo-list {
  max-width: 400px;
  width: 100%;
}

.todo-list__empty {
  display: flex;
  justify-content: center;
  color: brown;
  font-size: 16px;
}
</style>
