<template>
    <v-navigation-drawer v-model="drawer" app color="white" mini-variant mini-variant-width="80">
        <v-avatar class="d-block text mx-auto mt-4" size="40">
            <v-icon color="#7b49d9" large> fab fa-trello</v-icon>
        </v-avatar>
        <v-divider class="mx-3 my-5"></v-divider>
        <v-list flat class="mt-5">
            <v-list-item-group>
                <v-list-item v-for = "(item,i) in items" :key="i" :to="item.router" active-class="border" :ripple="false">
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        data:()=>({
            selectItem:0,
            drawer:null,
            items:[
                {icon: 'fas fa-house', router:'/',status:'active'},
                {icon: 'fas fa-th-large',router:'/questionnaires'},
                {icon: 'fas fa-chart-line',router:'/analytics'},
            ]
        })
        
    }
</script>

<style lang="scss" scoped>

    .border{
        margin-left: 12px;
        margin-right: 12px;
        background: #7b49d9 !important;
        border-radius: 50%;
        text-decoration: none;

    }
    .v-list-item-group .v-list-item--active{
        color:white !important;
        text-decoration: none;
    }
    .icons-link{
        text-decoration: none;

    }
    .icons-link:link{
        color:white !important ;
    }
     


</style>