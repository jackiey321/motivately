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
            <div class="container mt-4 p-4">
              <ToDo v-for="task in todo" :key="task.name" :name="task.name"/>
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
      todo: [
        { name: "Clean House" },
        { name: "Feed Dog" },
        { name: "Pick Up Children" },
        { name: "Buy Groceries" }
      ]
    }
  }
};
</script>

<style>
  h1 {
    font-size: 36px;
  }

  h2 {
    font-size: 30px;
  }

  div {
    font-family: 'Petrona', Arial, Helvetica, sans-serif;
  }

  .container {
    background-color: #DAEEF2;
    border-radius: 10px;
  }

</style>
