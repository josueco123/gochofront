
<template>
  <div id="nav">
    <b-button-toolbar justify aria-label="Toolbar with justify">
      <b-button-group class="mx-1">
        <b-button variant="outline-secondary">
          <router-link to="/task">Mis Tareas</router-link>
        </b-button>
        <b-button variant="outline-secondary">
          <router-link to="/create">Agregar Tareas</router-link>
        </b-button>
      </b-button-group>

      <b-dropdown variant="link" class="mx-1" right text="">
        <b-dropdown-header id="dropdown-header-label">
          {{ user }}
        </b-dropdown-header>
        <b-dropdown-item v-on:click="logOut()">Cerrar Session</b-dropdown-item>
      </b-dropdown>
    </b-button-toolbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: sessionStorage.getItem("name"),
    };
  },
  mounted() {
    if (sessionStorage.getItem("token") === null) this.$router.push("/login");
  },
  methods: {
    logOut() {
      sessionStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>
<style>
#nav {
  background-color: #212122;
  padding: 6px;
}
</style>