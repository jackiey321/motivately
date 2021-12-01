<template>
  <div class="item row m-2 p-3">
    <div id="label" class="col-2">
    </div>
    <div class="col">
      <h3>{{ name }}</h3>
      <p class="m-0">{{ date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    name: String,
    date: String
  }
};
</script>

<style scoped>
  h3 {
    font-size: 24px;
  }

  #label {
    background-color: #D0D0D0;
    border-radius: 10px;
  }

  .item {
    height: 86px;
    background-color: white;
    border-radius: 10px;
  }
</style>