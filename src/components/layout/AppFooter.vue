<template>
  <v-footer app color="secondary" class="py-4 border-t-thin">
    <v-container>
      <div
        class="d-flex flex-column flex-md-row justify-space-between align-center"
      >
        <div class="mb-4 mb-md-0">
          <div class="text-subtitle-1 font-weight-bold text-primary">
            Professional Profile
          </div>
          <div class="text-body-2 text-medium-emphasis">
            &copy; {{ new Date().getFullYear() }} All rights reserved
          </div>
        </div>

        <div class="d-flex">
          <v-btn
            v-for="icon in socialIcons"
            :key="icon.name"
            :href="icon.link"
            target="_blank"
            icon
            variant="text"
            color="primary"
            class="mx-1"
          >
            <v-icon>{{ icon.icon }}</v-icon>
          </v-btn>
        </div>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
const socialIcons = [
  { name: "LinkedIn", icon: "mdi-linkedin", link: "https://linkedin.com/in/thomascrespo" },
  { name: "GitHub", icon: "mdi-github", link: "https://github.com/thomrc" },
  { name: "Email", icon: "mdi-email", link: "mailto:thomas@crespo-ai.com" },
];
</script>
