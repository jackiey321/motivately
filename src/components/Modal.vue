<template>
  <!-- modal for add task form -->
  <!-- adapted from: https://codesandbox.io/s/github/vuejs/vuejs.org/tree/master/src/v2/examples/vue-20-modal-component?from-embed=&file=/index.html:1164-1354 -->
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
            <!-- modal header -->
            <div class="d-flex justify-content-between">
              <h2>New Task</h2>
              <img alt="x icon" src="../assets/x.png" height="40px" width="40px" tabindex="0" @click="$emit('close')">
            </div>

            <!-- modal add task form -->
            <label for="name" class="mt-3">Task Name</label>
            <b-form-input id="name" if="name" v-model="name" required></b-form-input>
            <label for="type" class="mt-3">Task Type</label>
            <b-form-select id="type" v-model="type" :options="options" required></b-form-select>
            <label for="date" class="mt-3" required>Due Date</label>
            <b-form-datepicker id="date" v-model="date" :min="new Date()" class="mb-2"></b-form-datepicker>

            <!-- modal submit -->
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
      // data of new task
      name: "",  
      date: "",
      type: null,
      // type options for dropdown
      options: [
        { value: null, text: 'Select Type' },
        { value: 'personal', text: 'Personal' },
        { value: 'work', text: 'Work' },
        { value: 'other', text: 'Other' }
      ]
    }
  },
  methods: {
    // emit submitted info to parent for creating new task
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

button {
  background-color: #E3B28F;
}

button:hover {
  background-color: #C4C4C4;
}

img:hover {
  cursor: pointer;
}

/* CSS from sample modal */
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
</style>