<template>
  <div class="text-left item row m-2 p-3">
    <div v-if="type === 'personal'" class="personal-label">
    </div>
    <div v-else-if="type === 'work'" class="work-label">
    </div>
    <div v-else-if="type === 'other'" class="other-label">
    </div>
    <div v-else class="label">
    </div>
    <div class="col">
      <h3 class="mb-0">{{ name }}</h3>
      <hr class="m-0 mb-1">
      <div class="d-flex justify-content-between">
        <p class="m-0">{{ date }}</p>
        <img class="m-0" alt="trash icon" src="../assets/trash.png" height="20px" width="20px" @click="$emit('delete', id)">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    id: Number,
    name: String,
    date: String,
    type: String
  }
};
</script>

<style scoped>
  h3 {
    font-size: 20px !important;
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