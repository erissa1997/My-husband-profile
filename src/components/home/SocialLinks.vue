<template>
  <div class="social-links section">
    <h2 class="section__title">Connect With Me</h2>

    <div class="d-flex justify-center flex-wrap">
      <v-btn
        v-for="link in socialLinks"
        :key="link.name"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        variant="outlined"
        color="primary"
        class="ma-2"
        :prepend-icon="link.icon"
      >
        {{ link.name }}
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
const socialLinks = [
  { name: "LinkedIn", icon: "mdi-linkedin", url: "https://linkedin.com/in/thomascrespo" },
  { name: "GitHub", icon: "mdi-github", url: "https://github.com/thomrc" },
  { name: "Email", icon: "mdi-email", url: "mailto:thomas@crespo-ai.com" },
];
</script>
