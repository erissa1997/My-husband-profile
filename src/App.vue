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
import { onMounted } from "vue";
import AppHeader from "./components/layout/AppHeader.vue";
import AppFooter from "./components/layout/AppFooter.vue";

onMounted(() => {
  //document.title = "Professional Profile";
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
