<template>
  <div class="wrapper d-flex justify-content-between m-2 p-3">
    <div class="content">
      <img v-bind:alt="alts[currentImage]" v-bind:src="paths[currentImage]" height="24px" width="24px" @click="switchIcon">
      <h3 class="ml-2 mb-0">{{ name }}</h3>
    </div>
    <img class="m-0" alt="trash icon" src="../assets/trash.png" height="20px" width="20px" @click="$emit('delete', id)">
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
      alts: ["unchecked box", "checked box"],
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
  .wrapper {
    width: 60%;
    display: flex;
    background-color: white;
    border-radius: 10px;
  }

  .content {
    display: flex;
  }

  h3 {
    font-size: 20px !important;
  }

  img:hover {
    cursor: pointer;
  }
</style>