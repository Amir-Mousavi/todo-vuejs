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
}
#app {
  margin: 20px;
  color: #2c3e50;
  position: relative;
  text-align: center;
  border-radius: 5px;
  background: #f5f5f5;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
}

.freezed {
  top: 0px;
  left: 30px;
  right: 30px;
  position: sticky;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
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
</style>
