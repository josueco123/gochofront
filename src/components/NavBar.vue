
<template>
  <div id="nav">
    <b-button-toolbar justify aria-label="Toolbar with justify">
      <b-button-group class="mx-1">
        <router-link class="nav-link" to="/task">Mis Tareas</router-link>
        <router-link class="nav-link" to="/create">Agregar Tareas</router-link>
      </b-button-group>

      <b-dropdown variant="link" right >
        <template #button-content>
          <b-icon icon="person-fill" aria-hidden="true"></b-icon> {{ user }}
        </template>       
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
a.nav-link {
  text-decoration: none;
}
</style>