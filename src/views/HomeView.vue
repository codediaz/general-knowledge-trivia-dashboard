<template>
    <v-app id="inspire" :style="{background: $vuetify.theme.themes.dark.background}">
      <SideBar></SideBar>
      <v-container>
      <v-row class="mt-n6">
        <v-col cols="12" md="12" sm="12">
           <v-toolbar color="rgba(0,0,0,0)" flat class="mt-n2">
       <v-toolbar-title></v-toolbar-title>
         <v-spacer></v-spacer>
       </v-toolbar>
       <v-data-table
          :headers="headers"
          :items="desserts"
          :sort-by="['calories', 'fat']"
          :sort-desc="[false, true]"
          multi-sort
          :loading = "loadtable"
          loading-text="Cargando... Por favor espere"
          class="elevation-1">
        </v-data-table>
        </v-col>
      </v-row> 
  </v-container>
</v-app>  
</template>
<script>
  import SideBar from '../components/SideBar'
 
  export default {
    name: 'Home',
    data () {
      return {
        loadtable:false,
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 200,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 200,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 300,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 300,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 400,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 400,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 400,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 400,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 500,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 500,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      }
    },
    components: {
      SideBar,
      
    },
    provide: {
    //[THEME_KEY]: "green"
  },  
  }
</script>
<style>
.space{
  margin-left: -100px;
  margin-right: -100px;
}
 
</style>