<template>
  <div>
    <img alt="ToDo List Add" src="../assets/add.png" height="30px" width="30px" @click="addToDo">
  </div>
</template>

<script>
export default {
  name: 'ToDo',
  props: {
    id: Number,
    name: String
  },
  data() {
    return {
      src: require("@/assets/unchecked.png"),
      currentImage: 0
    }
  },
  methods: {
    switchIcon() {
      if(this.currentImage == 0) {
        this.src = require("@/assets/checked.png");
        this.currentImage = 1;
      }
      else {
        this.src = require("@/assets/unchecked.png");
        this.currentImage = 0;
      }
    }
  }
};
</script>

<style scoped>

</style>