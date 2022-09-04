<template lang="">
    <v-app id="inspire" :style="{background: $vuetify.theme.themes.dark.background}">
      <SideBar></SideBar>
      <v-container>
      <v-toolbar color="rgba(0,0,0,0)" flat class="mt-n5">
          <v-toolbar-title class="mt-10">
          </v-toolbar-title>
      </v-toolbar>
      </v-container>
      <v-item-group mandatory class="mt-n4">
    <v-container>
      <v-row justify="center" class="space mt-10">
        <v-col
          cols="12"
          md="3"
        >
          <v-item v-slot="{ toggle }" > 
           <v-card
              :color="'red'"
              class="d-flex align-center rounded-xl"
              dark
              height="200"
              @click="toggle"
              
            >
              <v-row>
                <v-col cols="12" sm="12">
                  <v-list-item three-line  class="mt-10">
                    <v-list-item-content>
                      <div class="mb-4">
                       
                          <v-icon  x-large :color="white">fa-solid fa-face-laugh-beam</v-icon>
                       
                      </div>
                      <v-list-item-subtitle :class="'white--text'">Entretenimiento</v-list-item-subtitle>
                      <v-list-item-title class="headline mb-1" :class="'white--text'">
                        <strong>10</strong>
                      </v-list-item-title>
                      
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
              
            </v-card>
          </v-item>
        </v-col>
         <v-col
          cols="12"
          md="3"
        >
          <v-item v-slot="{ toggle }">
            <v-card
              :color="'blue'"
              class="d-flex align-center rounded-xl"
              dark
              height="200"
              @click="toggle"
            >
              <v-row>
                <v-col cols="12" sm="12">
                  <v-list-item three-line  class="mt-10">
                    <v-list-item-content>
                      <div class="mb-4">
                       
                          <v-icon  x-large :color="white">fa-solid fa-earth-americas</v-icon>
                       
                      </div>
                      <v-list-item-subtitle :class="'white--text'">Geografía</v-list-item-subtitle>
                      <v-list-item-title class="headline mb-1" :class="'white--text'">
                        <strong>10</strong>
                      </v-list-item-title>
                      
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
              
            </v-card>
          </v-item>
        </v-col>
      </v-row>

      <v-row justify="center" class="space">
        <v-col
          cols="12"
          md="3"
        >
          <v-item v-slot="{toggle }">
           <v-card
              :color="'#7b49d9'"
              class="d-flex align-center rounded-xl"
              dark
              height="200"
              @click="toggle"
            >
              <v-row>
                <v-col cols="12" sm="12">
                  <v-list-item three-line  class="mt-10">
                    <v-list-item-content>
                      <div class="mb-4">
                       
                          <v-icon  x-large :color="white">fa-solid fa-basketball</v-icon>
                       
                      </div>
                      <v-list-item-subtitle :class="'white--text'">Deportes</v-list-item-subtitle>
                      <v-list-item-title class="headline mb-1" :class="'white--text'">
                        <strong>10</strong>
                      </v-list-item-title>
                      
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
              
            </v-card>
          </v-item>
        </v-col>
         <v-col
          cols="12"
          md="3"
        >
          <v-item v-slot="{ toggle }">
            <v-card
              :color="'green'"
              class="d-flex align-center rounded-xl"
              dark
              height="200"
              @click="toggle"
            >
              <v-row>
                <v-col cols="12" sm="12">
                  <v-list-item three-line  class="mt-10">
                    <v-list-item-content>
                      <div class="mb-4">
                       
                          <v-icon  x-large :color="white">fa-solid fa-landmark</v-icon>
                       
                      </div>
                      <v-list-item-subtitle :class="'white--text'">Historia</v-list-item-subtitle>
                      <v-list-item-title class="headline mb-1" :class="'white--text'">
                        <strong>10</strong>
                      </v-list-item-title>
                      
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
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