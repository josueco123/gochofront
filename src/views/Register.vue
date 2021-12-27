<template>
  <b-container fluid="md">
    <div class="register">
      <b-row class="justify-content-md-center">
        <b-col md="auto">
          <b-card class="text-center">
            <h1 class="title">Registrate</h1>
            <b-form action class="form" @submit.prevent="register">              
              <b-form-group
                id="input-group-1"
                label="Usuario:"
                label-for="user"
              >
              <b-form-input
                v-model="email"
                class="form-input"
                type="text"
                id="user"
                required
                placeholder="Usuario"
              />
              </b-form-group>

              <b-form-group
                id="input-group-2"
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
                id="input-group-3"
                label="Contraseña:"
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
            
              <b-form-group
                id="input-group-4"
                label="Repetir Contraseña:"
                label-for="password-repeat"
              >
              <b-form-input
                v-model="passwordRepeat"
                class="form-input"
                type="password"
                id="password-repeat"
                placeholder="Password"
              />
              </b-form-group>
                <b-button type="submit" variant="primary">Registrarse </b-button>
             
            </b-form>           
          </b-card>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import UserApi from "../ApiCalls/UserApi";

export default {
  data: () => ({
    user: "",
    email: "",
    password: "",
    passwordRepeat: "",
  }),
  methods: {
    async register() {
      await UserApi.CreateUser(this.user, this.email, this.password).then(
        (response) => {
          console.log(response);
        }
      );
    },
  },
};
</script>

