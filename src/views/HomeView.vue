<template>
    <v-app id="inspire" :style="{background: $vuetify.theme.themes.dark.background}">
      <SideBar></SideBar>
      <v-container>
      <v-row class="mt-n6">
        <v-col cols="12" md="12" sm="12" class="mt-10">
           <v-toolbar color="rgba(0,0,0,0)" flat class="mt-n2">
       <v-toolbar-title>
        <h2>
            Usuarios
        </h2>
      </v-toolbar-title>
         <v-spacer></v-spacer>
       </v-toolbar>
       <v-data-table
          :headers="headers"
          :items="triviaData.data"
          :sort-by="name"
          :sort-desc="[false, true]"
          multi-sort
          :loading = "loadtable"
          loading-text="Cargando..."
          class="elevation-1"
        >
        <template v-slot:[`item.name`]= "{ item }">{{ item.user.first_name }} {{ item.user.surname}}</template>
        <template v-slot:[`item.time`]= "{ item }">{{ item.result.time_played }}</template>
        <template v-slot:[`item.hits`]= "{ item }">{{ item.result.right_answers }}</template>
        <template v-slot:[`item.errors`]= "{ item }">{{ item.result.wrong_answers }}</template>
        <template v-slot:[`item.success_rate`]= "{ item }">{{ item.result.success_rate }}</template>
        </v-data-table>
        </v-col>
      </v-row> 
  </v-container>
</v-app>  
</template>
<script>
  import SideBar from '../components/SideBar'
  import axios from "axios";
 
  export default {
   name: 'Home',
   data() {
      return {
        loadtable:true,
        headers: [
          {
            text: 'Nombre',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Duración', value: 'time' },
          { text: 'Aciertos', value: 'hits' },
          { text: 'Errores', value: 'errors' },
          { text: 'Puntuación', value: 'success_rate'},
        ],
        triviaData:[],
      }
    },
    components: {
      SideBar,
      
    },
    methods:{
      async fetchDataTrivia() {

        let route = "http://localhost:8080/v1/categories/79416c6d-8a20-4ec7-993a-bbe3f8725b1c/games?page=1";

        await axios.get(route,{
                        headers:{}
            })
            .then((response) =>
            {
              this.triviaData = response.data;
              this.loadtable = false;
            })
            .catch(err => {
              console.log(`${err} whilst contacting the quote API.`)
            });
        
        return Promise.resolve({
            data: []
         })
      }
      
    },
    created(){
      this.fetchDataTrivia()
    }  
  }
</script>
<style>
.space{
  margin-left: -100px;
  margin-right: -100px;
}
 
</style>