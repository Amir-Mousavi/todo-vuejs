<template>
  <div>
    <div v-for="task in tasks" :key="task.id">
      <TaskItem :task="task" />
    </div>
  </div>
</template>

<script>
import TaskItem from "@/components/TaskItem";

export default {
  name: "TaskList",
  components: {
    TaskItem,
  },
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    },
  },
};
</script>

<style scoped>
div {
  background: #fff;
  animation: fadein 0.8s;
}

@keyframes fadein {
  from {
    opacity: 0.2;
    background: #ddd;
  }
  to {
    opacity: 1;
    background: #fff;
  }
}
</style>
