<template>
  <div>
    <h3>Progress: {{ Math.round(finished / all * 100) }}%</h3>
    <div id="bar">
      <div id="progress">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    finished: Number,
    all: Number
  }
};
</script>

<style scoped>
  h3 {
    font-size: 20px !important;
  }

  #bar {
    width: 100%;
    height: 10px;
    background-color: #EAE6D8;
    border-radius: 10px;
  }

  #progress {
    width: 42%;
    height: 10px;
    background-color: #E3B28F;
    border-radius: 10px;
  }
</style>