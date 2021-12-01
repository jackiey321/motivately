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
            <div class="container p-2">
              <Item v-for="deadline in upcomingDeadlines" :key="deadline.name" :name="deadline.name" :date="deadline.date"/>
            </div>
          </div>
          <div class="col-md-6 mt-4">
            <h2>Upcoming Events</h2>
            <div class="container p-2">
              <Item v-for="event in upcomingEvents" :key="event.name" :name="event.name" :date="event.date"/>
            </div>
          </div>
        </div>
        <div class="row mt-5 mb-5">
          <div class="col-md-12">
            <h2>To-Do List</h2>
            <ProgressBar :finished="5" :all="12"/>
            <div id="todo-container" class="container mt-4 p-4">
              <ToDo v-for="task in todo" :key="task.name" :name="task.name"/>
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
      upcomingDeadlines: [
        { name: "Paint Project", date: "03.17.2022"},
        { name: "Marathon Training", date: "03.29.2022"},
        { name: "Tax Returns", date: "04.15.2022"}
      ],
      upcomingEvents: [
        { name: "Dinner Date", date: "03.19.2022"},
        { name: "Sister Birthday", date: "03.22.2022"},
        { name: "Marathon", date: "03.31.2022"}
      ],
      newToDo: "",
      todo: [
        { name: "Clean House" },
        { name: "Feed Dog" },
        { name: "Pick Up Children" },
        { name: "Buy Groceries" }
      ],
      showInput: false
    }
  },
  methods: {
    addToDo() {
      if(this.newToDo) {
        this.todo.push({name: this.newToDo});
        this.newToDo = "";
      }
      this.showInput = false;
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

  .hidden {
    display: none;
  }
</style>
