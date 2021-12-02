// Adapted from: https://codesandbox.io/s/github/vuejs/vuejs.org/tree/master/src/v2/examples/vue-20-modal-component?from-embed=&file=/index.html:1164-1354
<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
            <div class="d-flex justify-content-between">
              <h2>New Task</h2>
              <img alt="x icon" src="../assets/x.png" height="40px" width="40px" @click="$emit('close')">
            </div>
            <label for="name" class="mt-3">Task Name</label>
            <b-form-input if="name" v-model="name" required></b-form-input>
            <label for="type" class="mt-3">Task Type</label>
            <b-form-select v-model="type" :options="options" required></b-form-select>
            <label for="date" class="mt-3" required>Due Date</label>
            <b-form-datepicker id="date" v-model="date" class="mb-2"></b-form-datepicker>
            <div class="text-center">
              <b-button class="mt-5" @click="sendData">Add</b-button>
            </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Item',
  data() {
    return {
      name: "",
      date: "",
      type: null,
      options: [
        { value: null, text: 'Select Type' },
        { value: 'personal', text: 'Personal' },
        { value: 'work', text: 'Work' },
        { value: 'other', text: 'Other' }
      ]
    }
  },
  methods: {
    sendData() {
      this.$emit('new-task', {name: this.name, date: this.date, type: this.type});
    }
  }
};
</script>

<style scoped>
h2 {
  text-decoration: underline #BDD7C1 5px;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: 'Petrona', Arial, Helvetica, sans-serif;
}

.modal-default-button {
  float: right;
}

button {
  background-color: #E3B28F;
}

button:hover {
  background-color: #C4C4C4;
}

img:hover {
  cursor: pointer;
}
</style>