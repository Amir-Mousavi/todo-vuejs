<template>
  <div id="app">
    <div class="freezed">
      <h1>todos</h1>
      <TaskFilter />
      <TaskInput />
    </div>
    <di>
      <TaskList />
    </di>
  </div>
</template>

<script>
import TaskFilter from "@/components/Filter";
import TaskList from "@/components/TaskList";
import TaskInput from "@/components/TaskInput";

export default {
  name: "App",
  components: {
    TaskList,
    TaskInput,
    TaskFilter,
  },
};
</script>

<style>
h1 {
  padding: 10px 0;
  font-family: Inter;
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 64px;
  /* identical to box height, or 100% */

  color: #141518;
}

body {
  background: #d4d1dc;
}
#app {
  margin: 20px;
  color: #2c3e50;
  position: relative;
  text-align: center;
  border-radius: 5px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.freezed {
  top: 0;
  left: 30px;
  right: 30px;
  position: sticky;
  margin-bottom: 10px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 10px 10px 0 0;
}

@media (max-height: 600px) {
  .freezed {
    position: unset;
  }
}

@media (max-width: 500px) {
  .freezed {
    position: unset;
  }
}

.checkbox {
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  cursor: pointer;
  margin-right: 20px;

  background-color: #fff;
  border: 1px solid #ccc;
}

.checkbox:checked {
  background: #fff;
}

.checkbox:checked {
  background: #4e2bba;
}
</style>
