import { v4 as uuidv4 } from "uuid";

export const addTask = (state, title) => {
  state.tasks = [
    { id: uuidv4(), title, isCompleted: false, urgent: false },
    ...state.tasks,
  ];
};

export const toggleCompleteness = (state, id) => {
  state.tasks = state.tasks.map((task) => {
    if (task.id === id) {
      return {
        ...task,
        isCompleted: !task.isCompleted,
      };
    }

    return task;
  });
};

export const urgentTask = (state, id) => {
  state.tasks = state.tasks.map((task) => {
    if (task.id === id) {
      return {
        ...task,
        urgent: !task.urgent,
      };
    }

    return task;
  });
};

export const completeAll = (state, value) => {
  state.tasks = state.tasks.map((task) => ({
    ...task,
    isCompleted: value,
  }));
};

export const changeFilter = (state, newFilter) => {
  state.filter = newFilter;
};

export const clearCompleted = (state) => {
  state.tasks = state.tasks.filter((task) => !task.isCompleted);
};

export const removeTask = (state, id) => {
  state.tasks = state.tasks.filter((task) => task.id !== id);
};
