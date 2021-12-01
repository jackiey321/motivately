<template>
  <div>
    <TopBar/>
    <div class="row">
      <div class="col form-inline">
        <b-form-input v-model="newTask" placeholder="Enter Task" @keyup.enter="add"></b-form-input><b-button class="ml-2" variant="primary" @click="add">Add</b-button>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-md-3">
        <div class="p-2 alert alert-secondary">
          <h3>Backlog</h3>
          <draggable class="list-group kanban-column" :list="arrBacklog" group="tasks">
            <div class="list-group-item" v-for="element in arrBacklog" :key="element.name">
              {{element.name}}
            </div>
          </draggable>
        </div>
      </div>
      <div class="col-md-3">
        <div class="p-2 alert alert-primary">
          <h3>In Progress</h3>
          <draggable class="list-group kanban-column" :list="arrInProgress" group="tasks">
            <div class="list-group-item" v-for="element in arrInProgress" :key="element.name">
              {{element.name}}
            </div>
          </draggable>
        </div>
      </div>
      <div class="col-md-3">
        <div class="p-2 alert alert-success">
          <h3>Done</h3>
          <draggable class="list-group kanban-column" :list="arrDone" group="tasks">
            <div class="list-group-item" v-for="element in arrDone" :key="element.name">
              {{element.name}}
            </div>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import TopBar from "../../components/TopBar.vue";

export default {
  name: 'App',
  components: {
    draggable,
    TopBar
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

<style>
  div {
    font-family: 'Petrona', Arial, Helvetica, sans-serif;
  }
  .kanban-column {
    min-height: 300px;
  }
</style>
