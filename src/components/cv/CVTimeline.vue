<template>
  <div class="cv-timeline">
    <v-timeline
      side="end"
      align="start"
      line-thickness="2"
      line-color="primary"
    >
      <v-timeline-item
        v-for="item in items"
        :key="item.id"
        dot-color="accent"
        size="small"
      >
        <template v-slot:opposite>
          <div class="text-subtitle-1 font-weight-bold text-primary">
            {{ item.date }}
          </div>
        </template>

        <v-card class="mb-4 rounded-lg">
          <v-card-title class="text-accent">{{ item.title }}</v-card-title>
          <v-card-subtitle class="text-secondary">{{
            item.subtitle
          }}</v-card-subtitle>
          <v-card-text>{{ item.description }}</v-card-text>
        </v-card>
      </v-timeline-item>

      <v-timeline-item v-if="items.length === 0">
        <v-card class="text-center pa-4">
          <v-card-text>No items to display</v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script setup lang="ts">
import type { TimelineItem } from "../../types/index.ts";

interface Props {
  items: TimelineItem[];
}
const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.cv-timeline {
  .v-timeline-item {
    margin-bottom: 2rem;

    .v-card {
      transition: transform 0.2s ease, box-shadow 0.2s ease;

      &:hover {
        transform: translateX(5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>
