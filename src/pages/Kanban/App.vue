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
        <div class="row mt-3 mb-5">
          <div class="text-center col-md-4 mt-4">
            <h2>Backlog</h2>
            <div class="kanban-group p-2">
              <draggable class="kanban-column p-3" :list="arrBacklog" group="tasks">
                <Item v-for="task in arrBacklog" :key="task.name" :name="task.name" :date="task.date" :type="task.type"/>
              </draggable>
              <img class="m-3" alt="Backlog Add" src="../../assets/add.png" height="40px" width="40px" @click="showModal = true; stage = 'backlog'">
            </div>
          </div>
          <div class="text-center col-md-4 mt-4">
            <h2>In Progress</h2>
            <div class="kanban-group p-2">
              <draggable class="kanban-column p-3" :list="arrInProgress" group="tasks">
                <Item v-for="task in arrInProgress" :key="task.name" :name="task.name" :date="task.date" :type="task.type"/>
              </draggable>
              <img class="m-3" alt="In Progress Add" src="../../assets/add.png" height="40px" width="40px" @click="showModal = true; stage = 'progress'">
            </div>
          </div>
          <div class="text-center col-md-4 mt-4">
            <h2>Done</h2>
            <div class="kanban-group p-2">
              <draggable class="kanban-column p-3" :list="arrDone" group="tasks">
                <Item v-for="task in arrDone" :key="task.name" :name="task.name" :date="task.date" :type="task.type"/>
              </draggable>
              <img class="m-3" alt="Done Add" src="../../assets/add.png" height="40px" width="40px" @click="showModal = true; stage = 'done'">
            </div>
          </div>
        </div>
        <Modal v-if="showModal" @close="showModal = false" @new-task="addTask"/>
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
import Modal from '../../components/Modal.vue';

export default {
  name: 'App',
  components: {
    draggable,
    TopBar,
    SideMenu,
    Footer,
    Item,
    ProgressBar,
    Modal
  },
  data() {
    return {
      arrBacklog: [],
      arrInProgress: [],
      arrDone: [],
      showModal: false,
      stage: ""
    }
  },
  methods: {
    addTask(task) {
      if(task.name && task.date && task.type) {
        if(this.stage === "backlog") {
          this.arrBacklog.push({name: task.name, date: task.date, type: task.type});
        }
        else if(this.stage === "progress") {
          this.arrInProgress.push({name: task.name, date: task.date, type: task.type});
        } 
        else if(this.stage === "done") {
          this.arrDone.push({name: task.name, date: task.date, type: task.type});
        }
      }
      this.showModal = false;
    }
  },
  mounted() {
    if(localStorage.arrBacklog) {
      this.arrBacklog = JSON.parse(localStorage.arrBacklog);
    }
    if(localStorage.arrInProgress) {
      this.arrInProgress = JSON.parse(localStorage.arrInProgress);
    }
    if(localStorage.arrDone) {
      this.arrDone = JSON.parse(localStorage.arrDone);
    }
  },
  watch: {
    arrBacklog(newBacklog) {
      localStorage.arrBacklog = JSON.stringify(newBacklog);
    },
    arrInProgress(newInProgress) {
      localStorage.arrInProgress = JSON.stringify(newInProgress);
    },
    arrDone(newDone) {
      localStorage.arrDone = JSON.stringify(newDone);
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

  img {
    cursor: pointer;
  }

  .kanban-group {
    background-color: #DAEEF2;
    border-radius: 10px;
  }

  .kanban-column {
    min-height: 500px;
  }

</style>
