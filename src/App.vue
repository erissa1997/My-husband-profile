<template>
  <v-app>
    <app-header />
    <v-main>
      <v-container>
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </v-container>
    </v-main>
    <app-footer />
  </v-app>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
// import AppHeader from "@/components/layout/AppHeader.vue";
// import AppFooter from "@/components/layout/AppFooter.vue";

// export default defineComponent({
//   name: "App",
//   components: {
//     AppHeader,
//     AppFooter,
//   },
// });
</script>
