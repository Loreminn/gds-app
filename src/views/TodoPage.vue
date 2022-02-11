<template>
  <div id="app">
    <add-todo />
    <filter-todos />
    <todo-counter />
    <todo-list />
  </div>
</template>

<script>
import AddTodo from "../components/AddTodo.vue";
import FilterTodos from "../components/FilterTodos.vue";
import TodoList from "../components/TodoList.vue";
import TodoCounter from "../components/TodoCounter.vue";

export default {
  components: { AddTodo, TodoList, FilterTodos, TodoCounter },
  name: "TodoPage",
  data() {
    return {};
  },
};
</script>
