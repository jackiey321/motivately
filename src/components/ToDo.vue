<template>
  <div @click="switchIcon">
    <img alt="checkbox" v-bind:src="paths[currentImage]" height="24px" width="24px">
    <label for="todo" class="ml-2"><h3>{{ name }}</h3></label>
  </div>
</template>

<script>
export default {
  name: 'ToDo',
  props: {
    id: Number,
    name: String,
    status: Number
  },
  data() {
    return {
      paths: [require("@/assets/unchecked.png"), require("@/assets/checked.png")],
      currentImage: this.status
    }
  },
  methods: {
    switchIcon() {
      if(this.currentImage == 0) {
        this.currentImage = 1;
        this.$emit("checked-item", this.id);
      }
      else {
        this.currentImage = 0;
        this.$emit("unchecked-item", this.id);
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