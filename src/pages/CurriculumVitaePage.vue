<template>
  <div class="curriculum-vitae">
    <h1 class="text-h3 text-primary mb-6">Curriculum Vitae</h1>

    <v-card elevation="3" class="rounded-lg" color="background">
      <v-tabs
        v-model="activeTab"
        bg-color="surface"
        slider-color="secondary"
        align-tabs="center"
        fixed-tabs
      >
        <v-tab value="educational" class="text-h6">Educational</v-tab>
        <v-tab value="professional" class="text-h6">Professional</v-tab>
        <!-- <v-tab value="other" class="text-h6">Other</v-tab> -->
      </v-tabs>

      <v-divider></v-divider>

      <v-card-text class="pa-6">
        <v-window v-model="activeTab">
          <v-window-item value="educational">
            <cv-timeline :items="educationalItems" />
          </v-window-item>

          <v-window-item value="professional">
            <cv-timeline :items="professionalItems" />
          </v-window-item>

          <!-- <v-window-item value="other">
            <cv-timeline :items="otherItems" />
          </v-window-item> -->
        </v-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CvTimeline from "../components/cv/CVTimeline.vue";
import { useCVStore } from "../store";

const activeTab = ref("educational");
const cvStore = useCVStore();

const educationalItems = cvStore.getEducationalItems;
const professionalItems = cvStore.getProfessionalItems;
</script>

<style lang="scss" scoped>
.curriculum-vitae {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;

  .v-card {
    border: 1px solid rgba(0, 0, 0, 0.05);
    overflow: hidden;
  }
}

/* Use ::v-deep syntax for Vue 3 compatibility */
.curriculum-vitae :deep(.cv-tab) {
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: none;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
}

.curriculum-vitae :deep(.v-tab--selected) {
  color: variables.$primary;
}

.curriculum-vitae :deep(.v-slide-group__container) {
  border-bottom: 1px solid variables.$primary;
}
</style>
