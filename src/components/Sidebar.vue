<template>
    <v-app top-fixed-navbar left-fixed-sidebar>
        <header>
            <v-navbar fixed>
                <v-navbar-logo>Admin</v-navbar-logo>
            </v-navbar>
        </header>
        <main>
            <v-sidebar id="leftSidebar" router fixed ripple v-bind:items="menuItems"></v-sidebar>
            <v-container fluid>
                <transition mode="out-in">
                    <router-view></router-view>
                </transition>
            </v-container>
        </main>
    </v-app>
</template>

<script>
export default {
  
}
</script>