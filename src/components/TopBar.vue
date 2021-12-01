<template>
  <div id="topbar" class="pt-2 pl-5 pr-5">
    <a href="/"><h2>motivately</h2></a>
    <div>
      {{ new Date().toDateString() }}
      <img class="ml-3" alt="profile icon" src="../assets/profile.png" height="40" width="40">
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar'
};
</script>

<style scoped>
  a:hover {
    color:#805C3B;
    text-decoration: none;
  }
  
  h2 {
    color: #805C3B;
  }
  
  #topbar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #BDD7C1;
  }
</style>
