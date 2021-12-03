<template>
  <header id="topbar" class="d-flex justify-content-between pt-2 pl-5 pr-5">
    <a href="index"><h2>motivately</h2></a>
    <div>
      {{ new Date().toDateString() }}
      <img class="ml-3" alt="profile icon" src="../assets/profile.png" height="40" width="40">
    </div>
  </header>
</template>

<script>
export default {
  name: 'TopBar'
};
</script>

<style scoped>
  a:hover {
    color:#705133;
    text-decoration: none;
  }
  
  h2 {
    color: #705133;
  }
  
  #topbar {
    width: 100%;
    background-color: #BDD7C1;
  }
</style>
