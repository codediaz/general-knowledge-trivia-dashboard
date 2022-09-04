<template lang="">
    <v-app id="inspire" :style="{background: $vuetify.theme.themes.dark.background}">
      <SideBar></SideBar>
      <v-container>
      <v-toolbar color="rgba(0,0,0,0)" flat class="mt-n5">
          <v-toolbar-title>Charts</v-toolbar-title>
      </v-toolbar>
      </v-container>
    </v-app>
</template>
<script>
import SideBar from '../components/SideBar'
export default {
    components: {
      SideBar,
      
    },
    
}
</script>
<style lang="">
    
</style>