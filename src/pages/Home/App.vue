<template>
  <div>
    <TopBar/>
    <div class="row">
      <div class="col-2">
        <SideMenu/>
      </div>
      <div class="col pt-5 pr-5">
        <h1>Today's Dashboard</h1>
        <div class="row">
          <div class="col-md-6 mt-4">
            <h2>Upcoming Deadlines</h2>
            <div class="container upcoming p-2">
              <h3 v-if="upcomingDeadlines.length === 0" class="text-center pt-4">No Upcoming Deadlines</h3>
              <Item v-for="deadline in upcomingDeadlines" :key="deadline.name" :name="deadline.name" :date="deadline.date" :type="deadline.type" v-bind:class="{ reminder: new Date(deadline.date) - Date.now() < threeDays }"/>
            </div>
          </div>
          <div class="col-md-6 mt-4">
            <h2>Upcoming Events</h2>
            <div class="container upcoming p-2">
              <Item v-for="event in upcomingEvents" :key="event.name" :name="event.name" :date="event.date" :type="event.type"/>
            </div>
          </div>
        </div>
        <div class="row mt-5 mb-5">
          <div class="col-md-12">
            <h2>To-Do List</h2>
            <ProgressBar :finished="finished.length" :all="todo.length + finished.length"/>
            <div id="todo-container" class="container mt-4 p-4">
              <h3 v-if="todo.length === 0 && finished.length === 0" class="text-center pt-4">Currently Empty</h3>
              <ToDo v-for="task in todo" :key="task.id" :name="task.name" :id="task.id" :status="0" @checked-item="checkedUpdate" @unchecked-item="uncheckedUpdate" @delete="deleteToDo"/>
              <ToDo v-for="task in finished" :key="task.id" :name="task.name" :id="task.id" :status="1" @checked-item="checkedUpdate" @unchecked-item="uncheckedUpdate" @delete="deleteToDo"/>
              <div id="add-area">
                <b-form-input :class="{ hidden: !showInput }" v-model="newToDo" placeholder="Task Name..." @keyup.enter="addToDo"></b-form-input>
                <img class="ml-2" alt="ToDo List Add" src="../../assets/add.png" height="40px" width="40px" @click="showInput = !showInput">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import TopBar from '../../components/TopBar.vue';
import SideMenu from '../../components/SideMenu.vue';
import Item from '../../components/Item.vue';
import ProgressBar from '../../components/ProgressBar.vue';
import ToDo from '../../components/ToDo.vue';
import Footer from '../../components/Footer.vue';

export default {
  name: 'App',
  components: {
    TopBar,
    SideMenu,
    Item,
    ProgressBar,
    ToDo,
    Footer
  },
  data() {
    return {
      upcomingDeadlines: [],
      upcomingEvents: [
        { name: "Dinner Date", date: "03.19.2022"},
        { name: "Sister Birthday", date: "03.22.2022"},
        { name: "Marathon", date: "03.31.2022"}
      ],
      newToDo: "",
      todo: [],
      finished: [],
      showInput: false,
      threeDays: 1000 * 60 * 60 * 24 * 3,
      id: 0
    }
  },
  methods: {
    addToDo() {
      if(this.newToDo) {
        this.todo.push({name: this.newToDo, id: this.id});
        this.id++;
        this.newToDo = "";
      }
      this.showInput = false;
    },
    deleteToDo(id) {
      for(let i = 0; i < this.todo.length; i++) {
        if(this.todo[i].id === id) {
          this.todo.splice(i, 1);
        }
      }

      for(let j = 0; j < this.finished.length; j++) {
        if(this.finished[j].id === id) {
          this.finished.splice(j, 1);
        }
      }
    },
    checkedUpdate(id) {
      for(let i = 0; i < this.todo.length; i++) {
        if(this.todo[i].id === id) {
          this.finished.splice(0, 0, this.todo[i]);
          this.todo.splice(i, 1);
        }
      }
    },
    uncheckedUpdate(id) {
      for(let i = 0; i < this.finished.length; i++) {
        if(this.finished[i].id === id) {
          this.todo.splice(this.todo.length, 0, this.finished[index]);
          this.finished.splice(index, 1);
        }
      }
    }
  },
  mounted() {
    if(localStorage.todo) {
      this.todo = JSON.parse(localStorage.todo);
    }
    if(localStorage.finished) {
      this.finished = JSON.parse(localStorage.finished);
    }
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
  },
  watch: {
    todo(newToDo) {
      localStorage.todo = JSON.stringify(newToDo)
    },
    finished(newFinished) {
      localStorage.finished = JSON.stringify(newFinished)
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

  .container {
    background-color: #DAEEF2;
    border-radius: 10px;
  }

  .hidden {
    display: none;
  }

  .upcoming {
    min-height: 315px;
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
  
  .reminder {
    border: 2px solid #E3B28F;
    background-color: #faf2ec;
  }
</style>
