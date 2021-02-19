<template>
  <div :class="{ completed: task.isCompleted }">
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
      class="btn-urgent"
      v-if="!task.urgent"
      @click="toggleUrgent"
    >
      <img width="18" height="18" src="../assets/flag.svg" />
    </button>
    <button
      v-else
      title="Undo Urgent"
      @click="toggleUrgent"
      class="btn-urgent btn-urgent-red"
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
div {
  display: flex;
  padding: 20px;
  font-size: 24px;
  text-align: left;
  align-items: center;
  border-bottom: 1px solid #ededed;
}
.checkbox {
  width: 45px;
  height: 28px;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #ccc;
}
label {
  flex-grow: 1;
  display: block;
  font-size: 14px;
  line-height: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  word-break: break-all;
  transition: color 0.4s;
}
.completed {
  color: #ccc;
  animation: textanim 0.8s;
  text-decoration: line-through;
}

@keyframes textanim {
  from {
    text-decoration: none;
  }
  to {
    text-decoration: line-through;
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

.btn-urgent {
  margin-right: 10px;
}

.btn-urgent-red {
  visibility: visible;
}
</style>
