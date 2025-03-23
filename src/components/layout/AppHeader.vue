<template>
  <v-app-bar app color="secondary" elevation="1" class="border-b-thin">
    <v-container class="d-flex align-center">
      <v-app-bar-title class="text-primary font-weight-bold">
        <router-link to="/" class="text-decoration-none text-primary">
          Thomas R Crespo
        </router-link>
      </v-app-bar-title>

      <v-spacer />

      <v-app-bar-nav-icon @click="drawer = !drawer" />
    </v-container>
  </v-app-bar>

  <!-- Navigation Drawer -->
  <v-navigation-drawer v-model="drawer" temporary color="secondary">
    <v-list>
      <v-list-item
        v-for="item in navigationItems"
        :key="item.title"
        :to="item.route"
        @click="drawer = false"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon" />
        </template>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const drawer = ref(false);
const navigationItems = [
  { title: "Home", route: "/", icon: "mdi-home" },
  { title: "Curriculum Vitae", route: "/cv", icon: "mdi-file-document" },
  { title: "Blog", route: "/blog", icon: "mdi-post" },
  {
    title: "Consulting Services",
    route: "/consulting",
    icon: "mdi-briefcase",
  },
];
</script>
