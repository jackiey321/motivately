<template>
  <div>
    <input id="todo" type="checkbox">
    <label for="todo" class="ml-2"><h3>{{ name }}</h3></label>
  </div>
</template>

<script>
export default {
  name: 'ToDo',
  props: {
    name: String
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