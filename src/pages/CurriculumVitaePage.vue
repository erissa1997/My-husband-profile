<template>
  <div class="curriculum-vitae">
    <h1 class="section__title mb-6">Curriculum Vitae</h1>

    <v-card>
      <v-tabs
        v-model="activeTab"
        bg-color="background"
        slider-color="accent"
        centered
      >
        <v-tab value="educational">Educational</v-tab>
        <v-tab value="professional">Professional</v-tab>
        <v-tab value="other">Other</v-tab>
      </v-tabs>

      <v-card-text class="pa-6">
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
import { useCVStore } from "../store";

const activeTab = ref("educational");
const cvStore = useCVStore();

const educationalItems = cvStore.getEducationalItems;
const professionalItems = cvStore.getProfessionalItems;
const otherItems = cvStore.getOtherItems;
</script>
