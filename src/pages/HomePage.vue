<template>
  <div class="home-page">
    <v-row>
      <v-col cols="12">
        <profile-section />
      </v-col>

      <v-col cols="12">
        <v-divider class="my-8" />
      </v-col>

      <v-col cols="12">
        <experience-areas />
      </v-col>

      <v-col cols="12">
        <v-divider class="my-8" />
      </v-col>

      <v-col cols="12">
        <social-links />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import ProfileSection from "../components/home/ProfileSection.vue";
import ExperienceAreas from "../components/home/ExperienceAreas.vue";
import SocialLinks from "../components/home/SocialLinks.vue";
</script>
