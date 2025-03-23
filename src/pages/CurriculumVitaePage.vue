<template>
  <div class="curriculum-vitae">
    <h1 class="text-h3 font-weight-bold text-deep-red mb-6">
      Curriculum Vitae
    </h1>

    <v-card elevation="3" class="rounded-lg">
      <v-tabs
        v-model="activeTab"
        bg-color="ice"
        slider-color="deep-red"
        align-tabs="center"
        fixed-tabs
      >
        <v-tab value="educational" class="text-almost-black">Educational</v-tab>
        <v-tab value="professional" class="text-almost-black"
          >Professional</v-tab
        >
        <v-tab value="other" class="text-almost-black">Other</v-tab>
      </v-tabs>

      <v-divider></v-divider>

      <v-card-text class="pa-6 bg-ice">
        <v-window v-model="activeTab">
          <v-window-item value="educational">
            <cv-timeline :items="educationalItems" />
          </v-window-item>

          <v-window-item value="professional">
            <cv-timeline :items="professionalItems" />
          </v-window-item>

          <v-window-item value="other">
            <cv-timeline :items="otherItems" />
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CVTimeline from "../components/cv/CVTimeline.vue";
import { useCVStore } from "../store";

const activeTab = ref("educational");
const cvStore = useCVStore();

// Access the timeline items using getters
const educationalItems = cvStore.getEducationalItems;
const professionalItems = cvStore.getProfessionalItems;
const otherItems = cvStore.getOtherItems;
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

  :deep(.v-tab) {
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: none;
    font-size: 1rem;
    padding: 0.75rem 1.5rem;

    &--selected {
      color: var(--deep-red) !important;
    }
  }

  :deep(.v-slide-group__container) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
}
</style>
