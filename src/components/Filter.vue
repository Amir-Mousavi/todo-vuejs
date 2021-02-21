<template>
  <div class="filter">
    <div
      class="filter__item-left"
      v-bind:style="{
        opacity: !!leftNumbers ? 1 : 0,
      }"
    >
      {{ `${leftNumbers} ${leftNumbers === 1 ? "item left" : "items left"}` }}
    </div>
    <div class="filter__wrapper">
      <button
        class="filter__btn-filter"
        :class="{ 'filter__btn-active': isAllActive }"
        @click="changeFilter(FILTERS.ALL)"
      >
        All
      </button>
      <button
        class="filter__btn-filter"
        :class="{ 'filter__btn-active': isCompletedActive }"
        @click="changeFilter(FILTERS.COMPLETED)"
      >
        Completed
      </button>
      <button
        class="filter__btn-filter"
        :class="{ 'filter__btn-active': isUncompletedActive }"
        @click="changeFilter(FILTERS.UNCOMPLETED)"
      >
        Active
      </button>
      <button
        class="filter__btn-filter filter__btn-urgent"
        :class="{ 'filter__btn-active': isUrgentActive }"
        @click="changeFilter(FILTERS.URGENT)"
      >
        Urgent
        <img width="14" height="14" src="../assets/flag_red.svg" />
      </button>
    </div>
    <button
      class="filter__btn-clear"
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
    isUrgentActive: ({ task: { filter } }) => filter === FILTERS.URGENT,
    leftNumbers: ({ task: { tasks } }) =>
      tasks.filter((task) => !task.isCompleted).length,
    isAnyCompletedAvailable: ({ task: { tasks } }) =>
      tasks.some((task) => task.isCompleted),
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
.filter {
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #b5b0c3;
}

.filter__wrapper {
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}

.filter__btn-filter {
  width: 170px;
  height: 52px;

  margin: 3px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  background: #f9f9fa;

  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
  color: #8c869e;
}

.filter__btn-filter:hover {
  color: #413e49;
  background: #d4d1dc;
}

.filter__btn-filter:disabled {
  cursor: no-drop;
}

.filter__btn-clear {
  border: none;
  font-size: 17px;
  cursor: pointer;
  background: none;
  color: #141518;
  line-height: 20px;
  padding-left: 50px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
}

.filter__btn-clear:hover {
  text-decoration: underline;
}

.filter__btn-clear:disabled {
  color: #8c869e;
  background: none;
}

.filter__item-left {
  width: 100px;
  min-width: 100px;
  max-width: 100px;

  font-size: 17px;
  line-height: 20px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;

  color: #141518;
  animation: textanim 0.8s;
}

@media (max-width: 600px) {
  .filter__wrapper {
    justify-content: center;
  }

  .filter__btn-filter {
    margin: 2px;
  }

  div {
    flex-direction: column;
  }

  .filter__btn-clear {
    transform: translateX(0px);
  }

  .filter__item-left {
    transform: translateX(0px);
  }
}

.filter__btn-active {
  color: #413e49;
  background: #eeedf1;
}

@keyframes textanim {
  from {
    opacity: 0;
  }
  to {
    color: 1;
  }
}

.filter__btn-urgent {
  display: flex;
  align-items: center;
  justify-content: center;
}

.filter__btn-urgent > img {
  margin-left: 10px;
}
</style>