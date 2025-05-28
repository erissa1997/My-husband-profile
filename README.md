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
│   │   │   └── AppHeader.vue
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
│   │   └── index.ts
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

# Thomas Profile Website

This project is using Vue 3, TypeScript, Vuetify, Pinia, and SCSS.



## Project Structure

The project follows a component-based architecture:

- `src/components`: Reusable Vue components organized by feature
- `src/pages`: Page-level components corresponding to routes
- `src/store`: Pinia stores for state management
- `src/router`: Vue Router configuration
- `src/assets`: Static assets including SCSS files

## Customization

### Colors

The website uses a custom color theme defined in `src/assets/scss/_variables.scss`:

```scss
--ice: #e8f4fc;
--orange: #e98e16;
--red-orange: #cb351a;
--deep-red: #ac0e0d;
--almost-black: #040606;
```
