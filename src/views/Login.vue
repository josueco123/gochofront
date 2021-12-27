<template>
  <b-container fluid="md">    
      <div class="login">
        <b-row  class="justify-content-md-center">
        <b-col  md="auto">
          <b-card  class="text-center">
            <h1 class="title">Login </h1>
            <b-form action class="form" @submit.prevent="login">
              <b-form-group
                id="input-group-1"
                label="Correo:"
                label-for="email"
              >
                <b-form-input
                  v-model="email"
                  class="form-input"
                  type="email"
                  id="email"
                  required
                  placeholder="Email"
                />
              </b-form-group>
              <b-form-group
                id="input-group-2"
                label="Password:"
                label-for="password"
              >
                <b-form-input
                  v-model="password"
                  class="form-input"
                  type="password"
                  id="password"
                  placeholder="Password"
                />
              </b-form-group>
              <p v-if="error" class="error">
                Has introducido mal el email o la contraseña.
              </p>
              <b-button type="submit" variant="primary">Ingresar </b-button>
            </b-form>
            <p class="msg">
              ¿No tienes cuenta?
              <router-link to="/registro">Regístrate</router-link>
            </p>
          </b-card>
        </b-col>
        </b-row>
      </div>
    
  </b-container>
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

          this.$router.push("/test");
        }
      });

      //this.$router.push('/test');
    },
  },
};
</script>


