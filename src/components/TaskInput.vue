<template>
  <div>
    <input
      :checked="isAllActive"
      @change="onCheckAll"
      class="checkbox"
      type="checkbox"
    />
    <input
      type="text"
      v-model="value"
      class="text-input"
      @keydown.enter="onEnter"
      placeholder="What needs to be done?"
    />
    <div class="urgent">
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
div {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  border-radius: 6px;
  position: relative;
  background: #ffffff;
  border-bottom: 1px solid #ededed;
  margin-bottom: 10px;
}

.checkbox {
  width: 45px;
  margin-left: 25px;
  margin-right: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  cursor: pointer;
  height: 28px;
}

@media (max-width: 880px) {
  .checkbox {
    margin-left: 30px;
  }
}

.text-input {
  width: 100%;
  border: none;
  border-radius: 0;
  text-indent: 0;
  text-shadow: none;
  word-spacing: normal;
  text-transform: none;
  display: inline-block;
  box-sizing: border-box;
  padding: 20px 20px 20px 0;

  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
}

input:focus {
  outline: none;
}

input::placeholder {
  color: #ccc;
}

.urgent {
  display: flex;
  margin-right: 5px;
  align-items: center;
  justify-content: center;
  top: 5px;
  border: none;
  box-shadow: none !important;
}

.urgent > input,
label {
  border: none;
  outline: none;
}

.urgent > input {
  margin-left: 10px;
}
</style>
