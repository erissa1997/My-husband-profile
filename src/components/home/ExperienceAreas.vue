<template>
  <div class="experience-areas section">
    <h2 class="section__title">Areas of Experience</h2>

    <v-row>
      <v-col v-for="area in areas" :key="area.id" cols="12" sm="6" md="4">
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            v-bind="props"
            :elevation="isHovering ? 8 : 2"
            class="pa-4 h-100 transition-swing"
            :class="{ 'on-hover': isHovering }"
          >
            <div class="d-flex flex-column align-center text-center h-100">
              <v-icon
                :icon="area.icon"
                size="x-large"
                color="primary"
                class="mb-4"
              />
              <v-card-title class="font-weight-bold">{{
                area.title
              }}</v-card-title>
              <v-card-text>{{ area.description }}</v-card-text>
            </div>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { useExperienceStore } from "../../store/index.ts";
const experienceStore = useExperienceStore();
const areas = experienceStore.areas;
</script>

<style lang="scss" scoped>
.experience-areas {
  .v-card {
    transition: transform 0.3s, box-shadow 0.3s;

    &.on-hover {
      transform: translateY(-8px);
    }
  }
}
</style>
