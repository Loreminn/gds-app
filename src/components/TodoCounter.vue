<template>
  <div class="todo-counter">
    <div>
      Активные задачи: <span>{{ activeTodos.length }}</span>
    </div>
    <div>
      Выполненные задачи: <span>{{ completedTodos.length }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TodoCounter",
  computed: mapGetters({
    completedTodos: "completedTodos",
    activeTodos: "notCompletedTodos",
  }),
};
</script>

<style>
.todo-counter {
  margin-bottom: 2rem;
  font-size: 18px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.todo-counter div {
  margin-bottom: 1rem;
}
</style>
