<template>
  <div>
    <!-- header -->
    <TopBar/>
    <div class="row">
      <!-- side menu -->
      <div class="col-2">
        <SideMenu :current="'kanban'"/>
      </div>
      <div class="col pt-5 pr-5">
        <main>
          <h1>Kanban Board</h1>
          <ProgressBar class="mt-3" :finished="arrDone.length" :all="arrBacklog.length + arrInProgress.length + arrDone.length"/>
          <div class="row mt-3 mb-5">
            <!-- backlog column -->
            <div class="text-center col-md-4 mt-4">
              <h2>Backlog</h2>
              <div class="kanban-group p-2">
                <draggable class="kanban-column p-3" :list="arrBacklog" group="tasks">
                  <!-- display relevant tasks with reminder if the deadline is within three days -->
                  <Task v-for="task in arrBacklog" :key="task.id" :id="task.id" :name="task.name" :date="task.date" :type="task.type" :kanban="true" v-bind:class="{ reminder: new Date(task.date) - Date.now() < threeDays }" tabindex="0" @delete="deleteTask"/>
                </draggable>
                <img class="m-3" alt="Backlog Add" src="../../assets/add.png" height="40px" width="40px" tabindex="0" @click="showModal = true; stage = 'backlog'" @keyup.enter="showModal = true; stage = 'backlog'">
              </div>
            </div>

            <!-- in progress column -->
            <div class="text-center col-md-4 mt-4">
              <h2>In Progress</h2>
              <div class="kanban-group p-2">
                <draggable class="kanban-column p-3" :list="arrInProgress" group="tasks">
                  <!-- display relevant tasks with reminder if the deadline is within three days -->
                  <Task v-for="task in arrInProgress" :key="task.id" :id="task.id" :name="task.name" :date="task.date" :type="task.type" :kanban="true" v-bind:class="{ reminder: new Date(task.date) - Date.now() < threeDays }" tabindex="0" @delete="deleteTask"/>
                </draggable>
                <img class="m-3" alt="In Progress Add" src="../../assets/add.png" height="40px" width="40px" tabindex="0" @click="showModal = true; stage = 'progress'" @keyup.enter="showModal = true; stage = 'progress'">
              </div>
            </div>

            <!-- done column -->
            <div class="text-center col-md-4 mt-4">
              <h2>Done</h2>
              <div class="kanban-group p-2">
                <draggable class="kanban-column p-3" :list="arrDone" group="tasks">
                  <!-- display relevant tasks; no reminder needed if completed -->
                  <Task v-for="task in arrDone" :key="task.id" :id="task.id" :name="task.name" :date="task.date" :type="task.type" :kanban="true" tabindex="0" @delete="deleteTask"/>
                </draggable>
                <img class="m-3" alt="Done Add" src="../../assets/add.png" height="40px" width="40px" tabindex="0" @click="showModal = true; stage = 'done'" @keyup.enter="showModal = true; stage = 'done'">
              </div>
            </div>
          </div>
          <!-- add new task modal -->
          <Modal v-if="showModal" @close="showModal = false" @new-task="addTask"/>
        </main>
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
import Task from '../../components/Task.vue';
import ProgressBar from '../../components/ProgressBar.vue';
import Modal from '../../components/Modal.vue';

export default {
  name: 'App',
  components: {
    draggable,
    TopBar,
    SideMenu,
    Footer,
    Task,
    ProgressBar,
    Modal
  },
  data() {
    return {
      // lists for kanban tasks
      arrBacklog: [],
      arrInProgress: [],
      arrDone: [],
      // aid in modal display
      showModal: false,
      // current stage to add to 
      stage: "",
      // milliseconds in three days
      threeDays: 1000 * 60 * 60 * 24 * 3,
      // task id
      id: 0
    }
  },
  methods: {
    // add given task to the current stage selected
    addTask(task) {
      if(task.name && task.date && task.type) {
        if(this.stage === "backlog") {
          this.arrBacklog.push({ id: this.id, name: task.name, date: task.date, type: task.type });
        }
        else if(this.stage === "progress") {
          this.arrInProgress.push({ id: this.id, name: task.name, date: task.date, type: task.type });
        } 
        else if(this.stage === "done") {
          this.arrDone.push({ id: this.id, name: task.name, date: task.date, type: task.type });
        }
        this.id++;
      }
      this.showModal = false;
    },
    // delete task from any of the columns
    deleteTask(id) {
      for(let i = 0; i < this.arrBacklog.length; i++) {
        if(this.arrBacklog[i].id === id) {
          this.arrBacklog.splice(i, 1);
          return;
        }
      }

      for(let j = 0; j < this.arrInProgress.length; j++) {
        if(this.arrInProgress[j].id === id) {
          this.arrInProgress.splice(j, 1);
          return;
        }
      }

      for(let k = 0; k < this.arrDone.length; k++) {
        if(this.arrDone[k].id === id) {
          this.arrDone.splice(k, 1);
          return;
        }
      }
    }
  },
  mounted() {
    // retrieve data from local storage
    if(localStorage.arrBacklog) {
      this.arrBacklog = JSON.parse(localStorage.arrBacklog);
    }
    if(localStorage.arrInProgress) {
      this.arrInProgress = JSON.parse(localStorage.arrInProgress);
    }
    if(localStorage.arrDone) {
      this.arrDone = JSON.parse(localStorage.arrDone);
    }
    if(localStorage.taskId) {
      this.id = parseInt(localStorage.taskId);
    }
  },
  watch: {
    // update local storage as data changes
    arrBacklog(newBacklog) {
      localStorage.arrBacklog = JSON.stringify(newBacklog);
    },
    arrInProgress(newInProgress) {
      localStorage.arrInProgress = JSON.stringify(newInProgress);
    },
    arrDone(newDone) {
      localStorage.arrDone = JSON.stringify(newDone);
    },
    id(newId) {
      localStorage.taskId = newId;
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
    min-height: 480px;
  }

  .item {
    box-shadow: 0 4px 8px 0 rgba(34, 34, 34, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
  }

  .reminder {
    border: 2px solid #E3B28F;
    background-color: #faf2ec;
  }

  .kanban-column div:hover {
    cursor: pointer;
  }
</style>
