<template>
  <NavBar />
  <h2 style="margin: 10px">Mis Tareas</h2>
  <b-dropdown text="Ver: " variant="primary" class="m-1" dropright>
    <b-dropdown-item v-on:click="taskpending()"
      >Tareas Pendientes</b-dropdown-item
    >
    <b-dropdown-item v-on:click="taskfinished()"
      >Tareas completadas</b-dropdown-item
    >
    <b-dropdown-item v-on:click="taskbydue()"
      >Ordenar por Fecha de Vencimiento</b-dropdown-item
    >
  </b-dropdown>

  <b-alert variant="success" v-model="successcomplete" dismissible
    >Tarea Completada con Exito</b-alert
  >
  <b-alert v-model="errorcomplete" variant="danger" dismissible>
    Hubo un Error al Completar la tarea</b-alert
  >

  <b-alert variant="success" v-model="successdelete" dismissible
    >Tarea Borrada con Exito</b-alert
  >
  <b-alert v-model="errordelete" variant="danger" dismissible>
    Hubo un Error al Borrar la tarea</b-alert
  >

  <div class="d-flex justify-content-center" v-if="loading">
    <b-spinner variant="success"></b-spinner>
  </div>

  <b-card
    border-variant="dark"
    style="max-width: 30rem; margin: 0 auto; display: flex; align-items: center"
    v-for="item in tasks"
    :key="item.id"
    v-else
  >
    <p>
      <b>Fecha de Inicio:</b> {{ item.start_date }} - <b> Fecha de Fin:</b>
      {{ item.due_date }}
    </p>
    <p>{{ item.description }}</p>
    <p v-if="item.state === 1">Terminada</p>
    <p v-else>No Terminada</p>
    <b-button
      pill
      style="margin-right: 10px"
      variant="primary"
      v-on:click="goedit(item.id, item.description, item.due_date)"
      >Editar</b-button
    >
    <b-button
      style="margin-right: 10px"
      disabled
      pill
      variant="success"
      v-if="item.state === 1"
      >Completar</b-button
    >
    <b-button
      v-on:click="completetask(item.id)"
      pill
      style="margin-right: 10px"
      variant="success"
      v-else
      >Completar</b-button
    >
    <b-button pill variant="danger" v-on:click="deletetask(item.id)"
      >Eliminar</b-button
    >
  </b-card>
</template>

<script>
import TaskApi from "../../ApiCalls/TaskApi";
import NavBar from "../../components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      tasks: [],
      loading: true,
      successcomplete: false,
      errorcomplete: false,
      successdelete: false,
      errordelete: false,
    };
  },
  mounted() {
    this.loadtask();
  },
  methods: {
    async taskpending() {
      this.loading = true;
      await TaskApi.getPendingTasks(sessionStorage.getItem("id")).then(
        (response) => {
          this.tasks = response.data;
          this.loading = false;
        }
      );
    },
    async taskfinished() {
      this.loading = true;
      await TaskApi.getFinishedTasks(sessionStorage.getItem("id")).then(
        (response) => {
          this.tasks = response.data;
          this.loading = false;
        }
      );
    },
    async taskbydue() {
      this.loading = true;
      await TaskApi.getTasksByDue(sessionStorage.getItem("id")).then(
        (response) => {
          this.tasks = response.data;
          this.loading = false;
        }
      );
    },

    async goedit(id, description, dueDate) {
      this.$router.push({
        name: "edit",
        params: { id: id, description: description, dueDate: dueDate },
      });
    },
    async completetask(id) {
      const task = { id: id };
      await TaskApi.completeTask(task).then((response) => {
        if (response.status === 200) {
          this.successcomplete = true;
          this.loadtask();
        } else {
          this.errorcomplete = true;
        }
      });
    },
    async deletetask(id) {
      const task = { id: id };
      await TaskApi.deleteTask(task).then((response) => {
        if (response.status === 200) {
          this.successdelete = true;
          this.loadtask();
        } else {
          this.errordelete = true;
        }
      });
    },
    async loadtask() {
      this.loading = true;
      TaskApi.getMyTask(sessionStorage.getItem("id")).then((response) => {
        console.log(response.data);
        this.tasks = response.data;
        this.loading = false;
      });
    },
  },
};
</script>