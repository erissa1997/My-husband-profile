<template>
  <div class="cv-tabs">
    <v-tabs
      v-model="activeTab"
      bg-color="background"
      slider-color="accent"
      align-tabs="center"
    >
      <v-tab v-for="tab in tabs" :key="tab.value" :value="tab.value">
        {{ tab.label }}
      </v-tab>
    </v-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

interface Props {
  modelValue?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "educational",
});

const emit = defineEmits(["update:tab"]);

const activeTab = ref(props.modelValue);

const tabs = [
  { label: "Educational", value: "educational" },
  { label: "Professional", value: "professional" },
  { label: "Other", value: "other" },
];

watch(activeTab, (newValue) => {
  emit("update:tab", newValue);
});
</script>
