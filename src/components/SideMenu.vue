<template>
  <div id="sidemenu" class="p-2 pl-4 pr-4">
    <a href="/">
      <div class="menu-button p-2 m-1">
        Dashboard
      </div>
    </a>
    <a href="kanban">
      <div class="menu-button p-2 m-1">
        Kanban
      </div>
    </a>
    <a href="calendar">
      <div class="menu-button p-2 m-1">
        Calendar
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SideMenu'
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

  #sidemenu {
    height: 100%;
    text-align: center;
    background-color: #F3E3D8;
  }

  .menu-button {
    border-radius: 10px;
  }

  .menu-button:hover {
    background-color: #C4C4C4;
  }
</style>