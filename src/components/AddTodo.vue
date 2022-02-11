<template>
  <div class="add-todo">
    <input placeholder="Добавить задачу" v-model="title" @keydown.enter="add" />
    <button class="btn" @click="add">Добавить</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

import { ADD_TODO, SET_FILTER } from "../store/mutation_types";
import { FILTER_ALL } from "../store/types";

export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapMutations({
      addTodo: ADD_TODO,
      setFilter: SET_FILTER,
    }),
    add() {
      if (this.title) {
        this.addTodo(this.title);
        this.setFilter(FILTER_ALL);

        this.title = "";
      }
    },
  },
};
</script>

<style>
.add-todo {
  margin-bottom: 2rem;
}

.add-todo input {
  padding: 10px;
  border-radius: 25px;
  border: 1px solid #ccc;
  outline: none;
  margin-right: 10px;
  font-family: "Inter", sans-serif;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
}

.add-todo input:focus {
  border: 1px solid #c7c7c7;
}
</style>
