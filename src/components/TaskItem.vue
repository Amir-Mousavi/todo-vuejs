<template>
  <div
    :title="task.title"
    class="task-item"
    :class="{ 'task-item__completed': task.isCompleted }"
  >
    <input
      type="checkbox"
      class="checkbox"
      v-model="task.isCompleted"
      @click="toggleCompleteness"
    />
    <label>
      {{ task.title }}
    </label>
    <button
      title="Urgent"
      v-if="!task.urgent"
      @click="toggleUrgent"
      class="task-item__btn-urgent"
    >
      <img width="18" height="18" src="../assets/flag.svg" />
    </button>
    <button
      v-else
      title="Undo Urgent"
      @click="toggleUrgent"
      class="task-item__btn-urgent task-item__btn-urgent-red"
    >
      <img width="18" height="18" src="../assets/flag_red.svg" />
    </button>

    <button title="Delete Task" @click="remove">
      <img width="14" height="14" src="../assets/close.svg" />
    </button>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  props: ["task"],
  methods: {
    toggleCompleteness() {
      this.$store.commit("toggleCompleteness", this.task.id);
    },
    remove() {
      this.$store.commit("removeTask", this.task.id);
    },
    toggleUrgent() {
      this.$store.commit("urgentTask", this.task.id);
    },
  },
};
</script>

<style scoped>
.task-item {
  display: flex;
  padding: 20px;
  font-size: 24px;
  text-align: left;
  background: #fff;
  align-items: center;
  border-bottom: 1px solid #ededed;
}

.task-item:hover {
  background: #eeedf1;
}

label {
  flex-grow: 1;
  display: block;
  font-size: 17px;
  line-height: 20px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;

  text-overflow: clip;

  color: #141518;
  word-break: break-all;
  transition: color 0.4s;
}
.task-item__completed {
  color: gray;
  animation: textanim 0.8s;
  text-decoration: line-through;
}

@keyframes textanim {
  from {
    background: #f9f9fa;
  }
  to {
    color: #6f697d;
  }
}

button {
  border: none;
  outline: none;
  cursor: pointer;
  background: none;
  visibility: hidden;
}

@media (max-width: 600px) {
  button {
    visibility: visible;
  }
}

div:hover > button {
  visibility: visible;
}

.task-item__btn-urgent {
  margin-right: 10px;
  margin-left: 20px;
}

.task-item__btn-urgent-red {
  visibility: visible;
}
</style>
