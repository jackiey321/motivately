<template>
  <!-- to do list entry -->
  <div class="wrapper d-flex justify-content-between m-2 p-3">
    <div class="content">
      <!-- binding alt and src to update dynamically based on if check or unchecked -->
      <img v-bind:alt="alts[currentImage]" v-bind:src="paths[currentImage]" height="24px" width="24px" tabIndex="0" @click="switchIcon" @keyup.enter="switchIcon">
      <h3 class="ml-2 mb-0">{{ name }}</h3>
    </div>
    <!-- trash icon for deleting -->
    <img class="m-0" alt="trash icon" src="../assets/trash.png" height="20px" width="20px" tabIndex="0" @click="$emit('delete', id)" @keyup.enter="$emit('delete', id)">
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
      // to aid in switching between check or unchecked
      paths: [require("@/assets/unchecked.png"), require("@/assets/checked.png")],
      alts: ["unchecked box", "checked box"],
      currentImage: this.status
    }
  },
  methods: {
    switchIcon() {
      // conduct actual switching of checked or unchecked
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
  h3 {
    font-size: 20px !important;
  }

  img:hover {
    cursor: pointer;
  }

  .wrapper {
    width: 60%;
    display: flex;
    background-color: white;
    border-radius: 10px;
  }

  .content {
    display: flex;
  }
</style>