<template>
  <div class="login">
    <h1 class="title">Login in the page</h1>
    <form action class="form" @submit.prevent="login">
      <label class="form-label" for="#email">Email:</label>
      <input
        v-model="email"
        class="form-input"
        type="email"
        id="email"
        required
        placeholder="Email"
      />
      <label class="form-label" for="#password">Password:</label>
      <input
        v-model="password"
        class="form-input"
        type="password"
        id="password"
        placeholder="Password"
      />
      <p v-if="error" class="error">
        Has introducido mal el email o la contraseña.
      </p>
      <input class="form-submit" type="submit" value="Login" />
    </form>
    <p class="msg">
      ¿No tienes cuenta?
      <router-link to="/registro">Regístrate</router-link>
    </p>
  </div>
</template>

<script>
//import auth from "@/logic/auth";
import UserApi from "../ApiCalls/UserApi";
export default {
  data: () => ({
    email: "",
    password: "",
    error: false,
  }),
  methods: {
    async login() {

      await UserApi.Login(this.email, this.password).then((response) => {
        console.log(response);
        if (typeof response.data.error !== "undefined") {
          this.error = true;
        } else {

          sessionStorage.setItem("token", response.data.token);
          sessionStorage.setItem("name", response.data.name);
          sessionStorage.setItem("id", response.data.id);

          this.$router.push('/test');
        }
      });

      //this.$router.push('/test');
    },
  },
};
</script>


