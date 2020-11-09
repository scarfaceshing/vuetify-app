<template>
<div>
 <v-navigation-drawer dark app enable-resize-watcher :clipped="clipped" v-model="drawer" :color="color" :expand-on-hover="expandOnHover" :mini-variant="miniVariant" :right="right" :permanent="permanent" :src="bg" fixed>
  <v-list dense nav class="py-0">
   <v-list-item two-line :class="miniVariant && 'px-0'">
    <v-list-item-avatar>
     <img src="@/assets/Pimrapat_Phadungwatanachok.png">
    </v-list-item-avatar>

    <v-list-item-content>
     <v-list-item-title>Pimrapat Phadungwatanachok</v-list-item-title>
     <v-list-item-subtitle>BNK48 - mobile</v-list-item-subtitle>
    </v-list-item-content>
   </v-list-item>

   <v-divider></v-divider>
   <v-list-item v-for="(item, index) in routes" :key="index" link :to="item.path" @click="goto()">
    <v-list-item-icon>
     <v-icon>{{ item.icon }}</v-icon>
    </v-list-item-icon>

    <v-list-item-content>
     <v-list-item-title>{{ item.name }}</v-list-item-title>
    </v-list-item-content>
   </v-list-item>
  </v-list>
 </v-navigation-drawer>
 <v-main dark>
  <v-toolbar dark>
   <v-btn icon @click.stop="drawer = !drawer">
    <v-icon>mdi-menu</v-icon>
   </v-btn>
   <v-toolbar-title color="white">
    {{ $route.name }}
   </v-toolbar-title>
   <v-spacer></v-spacer>
   <v-menu bottom left>
    <template v-slot:activator="{ on, attrs }">
     <v-btn dark icon v-bind="attrs" v-on="on">
      <v-icon>mdi-dots-vertical</v-icon>
     </v-btn>
    </template>

    <v-list>
     <v-list-item v-for="(item, i) in items" :key="i">
      <v-list-item-title>{{ item.title }}</v-list-item-title>
     </v-list-item>
    </v-list>
   </v-menu>
  </v-toolbar>
  <v-container fluid dark>
   <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
   <router-view />
  </v-container>
 </v-main>
</div>
</template>

<script>
import router from '@/router/index.js';

export default {
 data() {
  return {
   routes: router.options.routes,
   breadcrumbs: [],
   color: 'black',
   colors: [
    'primary',
    'blue',
    'success',
    'red',
    'teal',
   ],
   drawer: true,
   right: false,
   permanent: false,
   miniVariant: false,
   expandOnHover: false,
   background: false,
   clipped: false,
   bg: "./assets/logo.png",
   items: [{
     title: 'Click Me'
    },
    {
     title: 'Click Me'
    },
    {
     title: 'Click Me'
    },
    {
     title: 'Click Me 2'
    },
   ],
  }
 },
 methods: {
  goto() {
   this.breadcrumbs = [];

   let breadcrumbs = this.$route.path;
   breadcrumbs = breadcrumbs.split("/");
   breadcrumbs.shift();

   breadcrumbs.forEach((item) => {
    this.breadcrumbs.push({
     text: item,
     disabled: false,
     href: item
    })
   })
  }
 }
}
</script>

<style lang="Scss" scoped>

</style>
