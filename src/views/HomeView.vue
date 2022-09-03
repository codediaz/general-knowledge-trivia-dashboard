<template>
    <v-app id="inspire" :style="{background: $vuetify.theme.themes.dark.background}">
      <SideBar></SideBar>
      <SideBarRigth></SideBarRigth>
    </v-app>
</template>

<script>

  import SideBar from '@/components/SideBar.vue';

  export default {
    name: 'Home',

    components: {
    SideBar,
},
  }
</script>
