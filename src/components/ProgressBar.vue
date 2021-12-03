<template>
  <!-- dynamic progress bar -->
  <div>
    <!-- regular progress bar display -->
    <h3 v-if="all > 0">Progress: {{ Math.round(finished / all * 100) }}%</h3>
    <!-- alt display for divide by zero percentage -->
    <h3 v-else>Progress: N/A</h3>
    <!-- actual progress bar -->
    <b-progress :value="Math.round(finished / all * 100)" :max="100"></b-progress>
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

<style>
  h3 {
    font-size: 20px !important;
  }

  .progress {
    background-color: #EAE6D8 !important;
    border-radius: 10px !important;
  }

  .progress-bar {
    background-color: #E3B28F !important;
  }
</style>