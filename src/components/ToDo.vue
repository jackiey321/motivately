<template>
  <div @click="switchIcon">
    <img alt="checkbox" v-bind:src="src" height="24px" width="24px">
    <label for="todo" class="ml-2"><h3>{{ name }}</h3></label>
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
        this.$emit("checked-item", this.name);
      }
      else {
        this.src = require("@/assets/unchecked.png");
        this.currentImage = 0;
        this.$emit("unchecked-item", this.name);
        this.$emit("unchecked-item", this.name);
      }
    }
  }
};
</script>

<style scoped>
  div {
    display: flex;
  }

  h3 {
    font-size: 20px !important;
  }
</style>