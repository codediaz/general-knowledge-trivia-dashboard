<template>
    <v-app id="inspire" :style="{background: $vuetify.theme.themes.dark.background}">
      <SideBar></SideBar>
      <SideBarRigth></SideBarRigth>
    </v-app>
</template>

<script>

  import SideBar from '@/components/SideBar.vue';
  import SideBarRigth from '@/components/SideBarRigth.vue';

  export default {
    name: 'Home',

    components: {
    SideBar,
    SideBarRigth
},
  }
</script>
