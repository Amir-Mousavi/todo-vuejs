<template>
  <div class="task-input">
    <input
      type="checkbox"
      @change="onCheckAll"
      :checked="isAllActive"
      class="checkbox task-input__checkbox"
    />
    <input
      type="text"
      v-model="value"
      @keydown.enter="onEnter"
      class="task-input__text-input"
      placeholder="What needs to be done?"
    />
    <div class="task-input__urgent">
      <label for="urgentCheckbox">Urgent</label>
      <input
        class="checkbox"
        @change="onChangeUrgent"
        :checked="isUrgent"
        name="urgentCheckbox"
        type="checkbox"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "TaskInput",

  computed: mapState({
    isAllActive: ({ task: { tasks } }) =>
      !!tasks.length && tasks.every((task) => task.isCompleted),
  }),

  data() {
    return {
      value: "",
      isUrgent: false,
    };
  },

  methods: {
    onEnter() {
      if (this.value) {
        this.$store.commit("addTask", {
          title: this.value,
          isUrgent: this.isUrgent,
        });
        this.value = "";

        setTimeout(() => {
          window.scrollTo(0, document.body.scrollHeight);
        }, 0);
      }
    },

    onChangeUrgent({ target: { checked } }) {
      this.isUrgent = checked;
    },

    onCheckAll({ target: { checked } }) {
      this.$store.commit("completeAll", checked);
    },
  },
};
</script>

<style scoped>
.task-input {
  display: flex;
  text-align: left;
  border-radius: 6px;
  position: relative;
  align-items: center;
  background: #ffffff;
}

.task-input__checkbox {
  margin-left: 24px;
  margin-right: 20px;
}

@media (max-width: 880px) {
  .task-input__checkbox {
    margin-left: 30px;
  }
}

.task-input__text-input {
  border: none;
  flex-grow: 4;
  text-indent: 0;
  border-radius: 0;
  text-shadow: none;
  word-spacing: normal;
  text-transform: none;
  display: inline-block;
  box-sizing: border-box;
  padding: 20px 20px 20px 0;

  font-size: 14px;
  line-height: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;

  color: #413e49;
}

.task-input__text-input::placeholder {
  font-size: 14px;
  color: #8c869e;
  line-height: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
}

input:focus {
  outline: none;
}

input::placeholder {
  color: #ccc;
}

.task-input__urgent {
  border: none;
  display: flex;
  margin-right: 5px;
  align-items: center;
  justify-content: center;
}

.task-input__urgent > label {
  border: none;
  outline: none;

  font-size: 17px;
  background: none;
  color: #141518;
  line-height: 20px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
}

.task-input__urgent > input {
  margin-left: 10px;
  margin-right: 20px;
}
</style>
