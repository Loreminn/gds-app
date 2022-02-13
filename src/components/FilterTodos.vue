<template>
  <div class="filter-todos">
    <button
      v-for="filter in filterTitles"
      :key="filter"
      @click="filterHandler(filter)"
      class="btn filter"
      :class="{ active: filterState === filter }"
    >
      {{ filter }}
    </button>
    <button
      v-if="completedTodos.length > 0"
      class="btn clear"
      @click="clearHandler"
    >
      Очистить выполненные
    </button>
  </div>
</template>

<script>
import { FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED } from "../store/types";
import { SET_FILTER, CLEAR_COMPLETED } from "../store/mutation_types";

import { mapMutations, mapGetters } from "vuex";

export default {
  name: "FilterTodos",
  data() {
    return {
      filterTitles: [FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED],
    };
  },
  computed: mapGetters({
    filterState: "currentFilterState",
    completedTodos: "completedTodos",
  }),
  methods: {
    ...mapMutations({
      setFilter: SET_FILTER,
      clearCompleted: CLEAR_COMPLETED,
    }),
    filterHandler(filter) {
      this.setFilter(filter);
    },
    clearHandler() {
      this.clearCompleted();
      this.setFilter(FILTER_ALL);
    },
  },
};
</script>

<style>
.filter-todos {
  display: flex;
  margin-bottom: 2rem;
}

.filter-todos button {
  margin-left: 20px;
}

.filter-todos button:first-child {
  margin-left: 0;
}
</style>
