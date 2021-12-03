<template>
  <!-- navigation menu on the side -->
  <div id="sidemenu" class="p-2 pl-4 pr-4">
    <!-- buttons have conditional classes to mark which page is active -->
    <a href="index">
      <div v-bind:class="{ active: current === 'dashboard' }" class="menu-button p-2 m-1">
        Dashboard
      </div>
    </a>
    <a href="kanban">
      <div v-bind:class="{ active: current === 'kanban' }" class="menu-button p-2 m-1">
        Kanban
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
  props: {
    current: String
  } 
};
</script>

<style scoped>
  a {
    font-size: 20px;
    color: black;
    text-decoration: none;
  }

  a:hover {
    color: black;
    text-decoration: none;
  }

  .menu-button {
    border-radius: 10px;
  }

  .menu-button:hover {
    background-color: #C4C4C4;
  }

  .active {
    background-color: #C4C4C4;
  }

  #sidemenu {
    height: 100%;
    text-align: center;
    background-color: #F3E3D8;
  }
</style>