<template>
  <NavBar />
  <h2 style="margin: 10px">Agregar Tareas</h2>
  <b-container fluid="md">  
    <b-alert variant="success"  v-model="success" dismissible>Tarea Agregada con Exito</b-alert>
<b-alert v-model="error" variant="danger" dismissible> Hubo un Error al Guardar</b-alert>  
      <div class="login">
        <b-row  class="justify-content-md-center">
        <b-col  md="auto">
          <b-card  class="text-center">           
            <b-form action class="form" @submit.prevent="savetask">
              <b-form-group
                id="input-group-1"
                label="Descripcion:"
                label-for="description"
              >
                <b-form-input
                  v-model="description"
                  class="form-input"
                  type="text"
                  id="description"
                  required                  
                />
              </b-form-group>
              <b-form-group
                id="input-group-2"
                label="Fecha de fin:"
                label-for="duedate"
              >
                <b-form-input
                  v-model="duedate"
                  class="form-input"
                  type="date"
                  id="duedate"
                  required                  
                />
              </b-form-group>
             
              <b-button type="submit" variant="primary">Guardar </b-button>
            </b-form>           
          </b-card>
        </b-col>
        </b-row>
      </div>
    
  </b-container>
</template>

<script>
import TaskApi from "../../ApiCalls/TaskApi";
import NavBar from "../../components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  data: () => ({
    description: "",
    duedate: null,
    error: false,
    success: false
  }),
   methods: {
    async savetask() {
      
      const task = {
          description: this.description,
          due_date: this.duedate,
          user_id: sessionStorage.getItem('id'),
          _token: sessionStorage.getItem('token')
      }

      await TaskApi.createTask(task).then((response) =>{
          if(response.status === 200){
              this.success = true;
          }else{
              console.log("prueba");
              this.error = true;
          }
      })

      //this.$router.push('/test');
    },
  },
}

</script>