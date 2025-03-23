# Vue 3 + TypeScript + Vite

# Project Structure

```
profile-website/
├── public/
│   └── images/
│       └── profile-placeholder.jpg
├── src/
│   ├── assets/
│   │   └── scss/
│   │       ├── _variables.scss
│   │       └── main.scss
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppFooter.vue
│   │   │   ├── AppHeader.vue
│   │   │   └── NavigationBar.vue
│   │   ├── home/
│   │   │   ├── ProfileSection.vue
│   │   │   ├── ExperienceAreas.vue
│   │   │   └── SocialLinks.vue
│   │   ├── cv/
│   │   │   ├── CVTimeline.vue
│   │   │   └── CVTabs.vue
│   │   ├── blog/
│   │   │   ├── BlogList.vue
│   │   │   └── BlogSearch.vue
│   │   └── consulting/
│   │       ├── ServicesSection.vue
│   │       └── ContactForm.vue
│   ├── pages/
│   │   ├── HomePage.vue
│   │   ├── CurriculumVitae.vue
│   │   ├── BlogPage.vue
│   │   └── ConsultingPage.vue
│   ├── router/
│   │   └── index.ts
│   ├── store/
│   │   ├── index.ts
│   │   ├── cv.ts
│   │   └── blog.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.vue
│   ├── main.ts
│   └── vuetify.ts
├── index.html
├── tsconfig.json
├── vite.config.ts
└── package.json
```

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).
