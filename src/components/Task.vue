<template>
  <!-- card that displays tasks -->
  <div class="text-left item row m-2 p-3">
    <!-- assign class to choose label color based on task type -->
    <div v-if="type === 'personal'" class="personal-label">
    </div>
    <div v-else-if="type === 'work'" class="work-label">
    </div>
    <div v-else class="other-label">
    </div>
    <div class="col">
      <h3 class="mb-0">{{ name }}</h3>
      <hr class="m-0 mb-1">
      <div class="d-flex justify-content-between">
        <p class="m-0">{{ month + "." + day + "." + year }}</p>
        <!-- only display trash icon if on kanban page -->
        <img v-if="kanban" class="m-0 mt-1" alt="trash icon" src="../assets/trash.png" height="18px" width="18px" @click="$emit('delete', id)">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
    id: Number,
    name: String,
    date: String,
    type: String,
    kanban: Boolean
  },
  data() {
    return {
      // to aid reformatting of date
      month: new Date(this.date).getUTCMonth() + 1,
      day: new Date(this.date).getUTCDate(),
      year: new Date(this.date).getUTCFullYear()
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

  .personal-label {
    background-color: #daadcb;
  }

  .work-label {
    background-color: #809dd1;
  }

  .other-label {
    background-color: #ebd29e;
  }

  .label {
    background-color: #D0D0D0;
  }

  .personal-label, .work-label, .other-label, .label {
    border-radius: 10px;
    width: 5%;
  }

  .item {
    background-color: white;
    border-radius: 10px;
  }
</style>