<template>
  <div :class="{ completed: task.isCompleted }">
    <input
      @click="click"
      type="checkbox"
      class="checkbox"
      v-model="task.isCompleted"
    />
    <label>
      {{ task.title }}
    </label>
    <button
      title="Urgent"
      v-if="!task.urgent"
      class="btn-urgent"
      @click="toggleUrgent"
    >
      <img width="18" height="18" src="../assets/flag.svg" />
    </button>
    <button
      v-else
      title="Undo Urgent"
      class="btn-urgent btn-urgent-red"
      @click="toggleUrgent"
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
    click() {
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
  font-family: Inter;
  line-height: 16px;
  font-style: normal;
  font-weight: normal;
  word-break: break-all;
  transition: color 0.4s;
}
.completed {
  transition: text-decoration 0.5s;
  text-decoration: line-through;
}

button {
  visibility: hidden;
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
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
