<template>
  <div class="cv-timeline">
    <v-timeline
      side="end"
      align="start"
      line-thickness="2"
      line-color="primary"
      truncate-line="start"
    >
      <v-timeline-item
        v-for="item in items"
        :key="item.id"
        dot-color="primary"
        size="small"
        fill-dot
      >
        <template v-slot:opposite>
          <div class="text-subtitle-1 text-orange pt-1">
            {{ item.date }}
          </div>
        </template>

        <v-card
          class="mb-4 rounded-lg timeline-card"
          elevation="2"
          color="background"
        >
          <v-card-title class="text-deep-red pb-1">{{
            item.title
          }}</v-card-title>
          <v-card-subtitle class="text-red-orange pb-2">{{
            item.subtitle
          }}</v-card-subtitle>
          <v-card-text class="text-body-1">{{ item.description }}</v-card-text>

          <v-expand-transition v-if="item.description">
            <div v-show="expandedItems[item.id]">
              <v-divider class="mx-4"></v-divider>
              <v-card-text class="pt-4">
                <div
                  v-for="(detail, index) in item.description"
                  :key="index"
                  class="mb-2"
                >
                  <v-icon color="orange" size="small" class="me-2"
                    >mdi-check-circle</v-icon
                  >
                  {{ detail }}
                </div>
              </v-card-text>
            </div>
          </v-expand-transition>

          <v-card-actions v-if="item.description">
            <v-spacer></v-spacer>
            <v-btn
              variant="text"
              color="deep-red"
              @click="toggleExpand(item.id)"
              class="text-none"
            >
              {{ expandedItems[item.id] ? "Show less" : "Show more" }}
              <v-icon right>
                {{
                  expandedItems[item.id] ? "mdi-chevron-up" : "mdi-chevron-down"
                }}
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-timeline-item>

      <v-timeline-item v-if="items.length === 0">
        <v-card class="text-center pa-4" elevation="0" border>
          <v-card-text class="text-body-1">
            No items to display. Your journey in this category begins here!
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import type { TimelineItem } from "../../types/index.ts";

interface Props {
  items: TimelineItem[];
}
const props = defineProps<Props>();

const expandedItems = reactive<Record<string | number, boolean>>({});

// Toggle expanded state
const toggleExpand = (id: string | number) => {
  expandedItems[id] = !expandedItems[id];
};
</script>

<style lang="scss" scoped>
.cv-timeline {
  padding: 1rem 0;

  :deep(.v-timeline-item) {
    margin-bottom: 1.5rem;

    .timeline-card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border-left: 4px solid var(--orange);

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      }
    }

    .v-timeline-item__body {
      max-width: 80%;
      margin-left: 20px;
    }

    .v-card-title {
      font-size: 1.25rem;
      line-height: 1.4;
    }

    .v-card-subtitle {
      font-size: 1rem;
    }
  }
}

@media (max-width: 600px) {
  .cv-timeline {
    :deep(.v-timeline-item__body) {
      max-width: 100%;
      margin-left: 0;
    }
  }
}
</style>
