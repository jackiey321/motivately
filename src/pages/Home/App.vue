<template>
  <div>
    <!-- header -->
    <TopBar/>
    <div class="row">
      <!-- side menu -->
      <div class="col-2">
        <SideMenu :current="'dashboard'"/>
      </div>
      <div class="col pt-5 pr-5">
        <main>
          <h1>Today's Dashboard</h1>
          <div class="row">
            <!-- display upcoming deadlines based on kanban -->
            <div class="col-md-6 mt-4">
              <h2>Upcoming Deadlines</h2>
              <div class="container upcoming p-3">
                <!-- display messages if no upcoming deadlines -->
                <h3 v-if="upcomingDeadlines.length === 0" class="text-center pt-4">No Upcoming Deadlines</h3>
                <!-- display all upcoming deadlines and add reminder class if the deadline is within 3 days -->
                <Task v-for="deadline in upcomingDeadlines" :key="deadline.name" :name="deadline.name" :date="deadline.date" :type="deadline.type" v-bind:class="{ reminder: new Date(deadline.date) - Date.now() < threeDays }"/>
              </div>
            </div>

            <!-- notes section -->
            <div class="col-md-6 mt-4">
              <h2>Notes</h2>
              <div class="container upcoming p-3 px-4">
                <label for="notes-input" class="m-0">Jot Down Notes Here</label>
                <b-form-textarea id="notes-input" v-model="notes" rows="10" no-resize></b-form-textarea>
              </div>
            </div>
          </div>

          <div class="row mt-5 mb-5">
            <!-- to do list -->
            <div class="col-md-12">
              <h2>To-Do List</h2>
              <ProgressBar :finished="finished.length" :all="todo.length + finished.length"/>
              <div id="todo-container" class="container mt-4 p-3">
                <!-- display message if no to do list items -->
                <h3 v-if="todo.length === 0 && finished.length === 0" class="text-center pt-4">Currently Empty</h3>
                <!-- display unfinished bfore the finished -->
                <ToDo v-for="task in todo" :key="task.id" :name="task.name" :id="task.id" :status="0" @checked-item="checkedUpdate" @unchecked-item="uncheckedUpdate" @delete="deleteToDo"/>
                <ToDo v-for="task in finished" :key="task.id" :name="task.name" :id="task.id" :status="1" @checked-item="checkedUpdate" @unchecked-item="uncheckedUpdate" @delete="deleteToDo"/>
        
                <!-- add new todo items -->
                <div id="add-area">
                  <label for="task-input" class="mt-3 invisible">Task Name</label>
                  <!-- input for new task that is visible after clicking the add button -->
                  <b-form-input id="task-input" :class="{ hidden: !showInput }" v-model="newToDo" placeholder="Task Name..." @keyup.enter="addToDo"></b-form-input>
                  <img class="ml-2" alt="ToDo List Add" src="../../assets/add.png" height="40px" width="40px" tabIndex="0" @click="showInput = !showInput" @keyup.enter="showInput = !showInput" >
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import TopBar from '../../components/TopBar.vue';
import SideMenu from '../../components/SideMenu.vue';
import Task from '../../components/Task.vue';
import ProgressBar from '../../components/ProgressBar.vue';
import ToDo from '../../components/ToDo.vue';
import Footer from '../../components/Footer.vue';

export default {
  name: 'App',
  components: {
    TopBar,
    SideMenu,
    Task,
    ProgressBar,
    ToDo,
    Footer
  },
  data() {
    return {
      // to hold upcoming deadlines
      upcomingDeadlines: [],
      // for adding new to so
      newToDo: "",
      // unfinished and finished to do items
      todo: [],
      finished: [],
      // to aid in input box display
      showInput: false,
      // milliseconds in three days
      threeDays: 1000 * 60 * 60 * 24 * 3,
      // id for to do items
      id: 0,
      // notes
      notes: ""
    }
  },
  methods: {
    // add new to do to unfinished list
    addToDo() {
      if(this.newToDo) {
        this.todo.push({ id: this.id, name: this.newToDo });
        this.id++;
        this.newToDo = "";
      }
      this.showInput = false;
    },
    // delete given to do from either list
    deleteToDo(id) {
      for(let i = 0; i < this.todo.length; i++) {
        if(this.todo[i].id === id) {
          this.todo.splice(i, 1);
          return;
        }
      }

      for(let j = 0; j < this.finished.length; j++) {
        if(this.finished[j].id === id) {
          this.finished.splice(j, 1);
          return;
        }
      }
    },
    // move item from unfinished to finished
    checkedUpdate(id) {
      for(let i = 0; i < this.todo.length; i++) {
        if(this.todo[i].id === id) {
          this.finished.splice(0, 0, this.todo[i]);
          this.todo.splice(i, 1);
        }
      }
    },
    // move item from finished to unfinished
    uncheckedUpdate(id) {
      for(let i = 0; i < this.finished.length; i++) {
        if(this.finished[i].id === id) {
          this.todo.splice(this.todo.length, 0, this.finished[i]);
          this.finished.splice(i, 1);
        }
      }
    }
  },
  mounted() {
    // retrieve all stored data from local storage
    if(localStorage.todo) {
      this.todo = JSON.parse(localStorage.todo);
    }
    
    if(localStorage.finished) {
      this.finished = JSON.parse(localStorage.finished);
    }
    
    // get deadlines of unfinished tasks on kanban
    if(localStorage.arrBacklog || localStorage.arrInProgress) {
      let tasks = [];
      if(localStorage.arrBacklog) {
        tasks = tasks.concat(JSON.parse(localStorage.arrBacklog));
      }
      if(localStorage.arrInProgress) {
        tasks = tasks.concat(JSON.parse(localStorage.arrInProgress));
      }
      tasks.sort((a, b) => new Date(a.date) - new Date(b.date));
      if(tasks.length > 3) {
        this.upcomingDeadlines = tasks.slice(0, 3);
      }
      else {
        this.upcomingDeadlines = tasks;
      }
    }
    
    if(localStorage.todoId) {
      this.id = parseInt(localStorage.todoId);
    }

    if(localStorage.notes) {
      this.notes = localStorage.notes;
    }
  },
  watch: {
    // update local storage as data changes
    todo(newToDo) {
      localStorage.todo = JSON.stringify(newToDo)
    },
    finished(newFinished) {
      localStorage.finished = JSON.stringify(newFinished)
    },
    id(newId) {
      localStorage.todoId = newId;
    },
    notes(newNotes) {
      localStorage.notes = newNotes;
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

  img:hover {
    cursor: pointer;
  }

  textarea {
    border-radius: 10px;
  }

  .container {
    background-color: #DAEEF2;
    border-radius: 10px;
  }

  .hidden {
    display: none;
  }

  .upcoming {
    height: 315px;
  }

  .reminder {
    border: 2px solid #E3B28F;
    background-color: #faf2ec;
  }

  #todo-container::after {
    content: " ";
    display: block; 
    height: 0; 
    clear: both;
  }

  #add-area {
    display: flex;
    float: right
  }
</style>
