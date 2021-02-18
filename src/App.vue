<template>
  <div id="app">
    <h1>todos</h1>
    <TaskFilter />
    <TaskInput />
    <TaskList />
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
  padding: 20px 0;
}
#app {
  background: #f5f5f5;
  margin: 20px;
  color: #2c3e50;
  text-align: center;
  border-radius: 5px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
}
</style>
