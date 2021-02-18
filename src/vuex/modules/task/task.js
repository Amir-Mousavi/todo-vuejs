import { FILTERS } from "../../../constants";
import {
  addTask,
  removeTask,
  urgentTask,
  completeAll,
  changeFilter,
  clearCompleted,
  toggleCompleteness,
} from "./mutations";

const { ALL, COMPLETED, UNCOMPLETED, URGENT } = FILTERS;

export default {
  state: {
    tasks: [],
    filter: ALL,
  },

  mutations: {
    addTask,
    removeTask,
    urgentTask,
    completeAll,
    changeFilter,
    clearCompleted,
    toggleCompleteness,
  },

  getters: {
    tasks({ filter, tasks }) {
      switch (filter) {
        case ALL:
          return tasks;

        case COMPLETED:
          return tasks.filter((task) => task.isCompleted);

        case UNCOMPLETED:
          return tasks.filter((task) => !task.isCompleted);

        case URGENT:
          return tasks.filter((task) => task.urgent);

        default:
          return tasks;
      }
    },
  },
};
