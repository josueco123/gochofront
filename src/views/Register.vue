<template>
  <div class="register">
    <h1 class="title">Sign Up</h1>
    <form action class="form" @submit.prevent="register">
         <label class="form-label" for="#user">Usuario:</label>
      <input
        v-model="email"
        class="form-input"
        type="text"
        id="user"
        required
        placeholder="Usuario"
      >
      <label class="form-label" for="#email">Email:</label>
      <input
        v-model="email"
        class="form-input"
        type="email"
        id="email"
        required
        placeholder="Email"
      >
      <label class="form-label" for="#password">Contraseña:</label>
      <input
        v-model="password"
        class="form-input"
        type="password"
        id="password"
        placeholder="Password"
      >
      <label class="form-label" for="#password-repeat">Repite la contraseña:</label>
      <input
        v-model="passwordRepeat"
        class="form-input"
        type="password"
        id="password-repeat"
        placeholder="Password"
      >
      <input class="form-submit" type="submit" value="Sign Up">
    </form>
  </div>
</template>

<script>
import UserApi from "../ApiCalls/UserApi";

export default {
  data: () => ({
    user: "",
    email: "",
    password: "",
    passwordRepeat: ""
  }),
  methods: {
    async register() {
    
        await UserApi.CreateUser(this.user,this.email,this.password).then((response) => {
            console.log(response);
        });
    }
  }
};
</script>

