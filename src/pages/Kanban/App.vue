<template>
  <div>
    <TopBar/>
    <div class="row">
      <div class="col-2">
        <SideMenu/>
      </div>
      <div class="col pt-5 pr-5">
        <h1>Kanban Board</h1>
        <ProgressBar class="mt-3" :finished="arrDone.length" :all="arrBacklog.length + arrInProgress.length + arrDone.length"/>
          <!-- <div class="col form-inline">
            <b-form-input v-model="newTask" placeholder="Enter Task" @keyup.enter="add"></b-form-input><b-button class="ml-2" variant="primary" @click="add">Add</b-button>
          </div> -->
        <div class="row mt-3 mb-5">
          <div class="text-center col-md-4 mt-4">
            <h2>Backlog</h2>
            <div class="kanban-group p-2">
              <draggable class="kanban-column p-3" :list="arrBacklog" group="tasks">
                <Item v-for="task in arrBacklog" :key="task.name" :name="task.name" :date="task.date"/>
              </draggable>
              <img class="m-3" alt="Backlog Add" src="../../assets/add.png" height="40px" width="40px">
            </div>
          </div>
          <div class="text-center col-md-4 mt-4">
            <h2>In Progress</h2>
            <div class="kanban-group p-2">
              <draggable class="kanban-column p-3" :list="arrInProgress" group="tasks">
                <Item v-for="task in arrInProgress" :key="task.name" :name="task.name" :date="task.date"/>
              </draggable>
              <img class="m-3" alt="In Progress Add" src="../../assets/add.png" height="40px" width="40px">
            </div>
          </div>
          <div class="text-center col-md-4 mt-4">
            <h2>Done</h2>
            <div class="kanban-group p-2">
              <draggable class="list-group kanban-column p-3" :list="arrDone" group="tasks">
                <Item v-for="task in arrDone" :key="task.name" :name="task.name" :date="task.date"/>
              </draggable>
              <img class="m-3" alt="Done Add" src="../../assets/add.png" height="40px" width="40px">
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import TopBar from "../../components/TopBar.vue";
import SideMenu from '../../components/SideMenu.vue';
import Footer from '../../components/Footer.vue';
import Item from '../../components/Item.vue';
import ProgressBar from '../../components/ProgressBar.vue';

export default {
  name: 'App',
  components: {
    draggable,
    TopBar,
    SideMenu,
    Footer,
    Item,
    ProgressBar
  },
  data() {
    return {
      newTask: "",
      arrBacklog: [
        {name: "Code Page"},
        {name: "Do Project"},
        {name: "Pack Up"},
        {name: "Black Friday Shopping"}
      ],
      arrInProgress: [],
      arrDone: []
    }
  },
  methods: {
    add() {
      if(this.newTask) {
        this.arrBacklog.push({name: this.newTask});
        this.newTask = "";
      }
    }
  }
};
</script>

<style scoped>
  h1 {
    font-size: 30px !important;
  }

  h2 {
    font-size: 24px !important;
  }

  div {
    font-family: 'Petrona', Arial, Helvetica, sans-serif;
  }

  .kanban-group {
    background-color: #DAEEF2;
    border-radius: 10px;
  }

  .kanban-column {
    min-height: 500px;
  }
</style>
