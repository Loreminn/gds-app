<template>
  <div class="todo-item">
    <div
      class="todo-item__title"
      :class="{ completed: todo.done }"
      @click="toggleHandler"
    >
      {{ todo.text }}
    </div>
    <div class="todo-item__icon" @click="deleteHandler">&#10006;</div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

import { TOGGLE_TODO_DONE, DELETE_TODO } from "../store/mutation_types";

export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true,
      default() {
        return {
          id: 0,
          text: "",
          done: false,
        };
      },
    },
  },
  methods: {
    ...mapMutations({
      toggleTodoDone: TOGGLE_TODO_DONE,
      deleteTodo: DELETE_TODO,
    }),
    toggleHandler() {
      this.toggleTodoDone(this.todo.id);
    },
    deleteHandler() {
      this.deleteTodo(this.todo.id);
    },
  },
};
</script>

<style>
.todo-item {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 20px;
  margin-bottom: 1rem;
}

.todo-item__title {
  cursor: pointer;
  user-select: none;
}

.todo-item__icon {
  cursor: pointer;
}

.todo-item__title.completed {
  text-decoration: line-through;
}
</style>
