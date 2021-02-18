<template>
  <div class="root">
    <div
      class="item-left"
      v-bind:style="{
        opacity: !!leftNumbers ? 1 : 0,
      }"
    >
      {{ `${leftNumbers} ${leftNumbers === 1 ? "item left" : "items left"}` }}
    </div>
    <div class="filter-wrapper">
      <button
        :class="{ active: isAllActive }"
        @click="changeFilter(FILTERS.ALL)"
      >
        All
      </button>
      <button
        :class="{ active: isCompletedActive }"
        @click="changeFilter(FILTERS.COMPLETED)"
      >
        Completed
      </button>
      <button
        :class="{ active: isUncompletedActive }"
        @click="changeFilter(FILTERS.UNCOMPLETED)"
      >
        Active
      </button>
      <button
        class="btn-urgent"
        :class="{ active: isUrgentActive }"
        @click="changeFilter(FILTERS.URGENT)"
      >
        Urgent
        <img width="14" height="14" src="../assets/flag_red.svg" />
      </button>
    </div>
    <button
      class="btn-clear"
      @click="clearCompleted"
      :disabled="!isAnyCompletedAvailable"
    >
      Clear completed
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { FILTERS } from "../constants";

export default {
  name: "TaskFilter",

  data() {
    return {
      FILTERS,
    };
  },

  computed: mapState({
    isAllActive: ({ task: { filter } }) => filter === FILTERS.ALL,
    isCompletedActive: ({ task: { filter } }) => filter === FILTERS.COMPLETED,
    isUncompletedActive: ({ task: { filter } }) =>
      filter === FILTERS.UNCOMPLETED,
    leftNumbers: ({ task: { tasks } }) =>
      tasks.filter((task) => !task.isCompleted).length,
    isAnyCompletedAvailable: ({ task: { tasks } }) =>
      tasks.some((task) => task.isCompleted),
    isUrgentActive: ({ task: { filter } }) => filter === FILTERS.URGENT,
  }),

  methods: {
    changeFilter(newFilter) {
      this.$store.commit("changeFilter", newFilter);
    },
    clearCompleted() {
      this.$store.commit("clearCompleted");
    },
  },
};
</script>

<style scoped>
.root {
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
}

div {
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.filter-wrapper {
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

button {
  width: 150px;
  min-width: 150px;
  max-width: 150px;

  margin: 3px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 16px 48px;
  border-radius: 8px;
  background: #f9f9fa;
}

button:hover {
  background: #d4d1dc;
}

button:disabled {
  cursor: no-drop;
}

@media (max-width: 1000px) {
  .filter-wrapper {
    display: flex;
    flex-direction: column;
  }

  button {
    margin: 2px;
  }

  div {
    flex-direction: column;
  }
}

.btn-clear {
  background: #eeedf1;
}

.active {
  background: #eeedf1;
}

.item-left {
  width: 100px;
  min-width: 100px;
  max-width: 100px;
}

.btn-urgent {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-urgent > img {
  margin-left: 10px;
}
</style>