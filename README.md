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

# Professional Profile Website

This project is using Vue 3, TypeScript, Vuetify, Pinia, and SCSS.

## Project Setup

### Prerequisites

- Node.js (v16.0 or newer)
- npm

### Installation

1. Clone this repository or create a new project using the provided structure:

```bash
# Create a new Vue project with Vite
npm create vite@latest profile-website -- --template vue-ts

# Navigate to project directory
cd profile-website
```

2. Install dependencies:

```bash
npm install vuetify@latest pinia@latest sass@latest sass-loader@latest vue-router@latest @mdi/font@latest
```

3. Set up project structure according to the provided files and components.

4. Create a placeholder image for the profile:

   - Create a `public/images` directory
   - Add a placeholder profile image at `public/images/profile-placeholder.jpg`

5. Start the development server:

```bash
npm run dev
```

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

### Content

To customize the content:

1. Update the profile information in `ProfileSection.vue`
2. Modify the timeline items in the CV store
3. Add your own blog posts in the blog store
4. Update the services offered in the services store

## Building for Production

To build the project for production:

```bash
npm run build
```

This will generate a `dist` directory with the compiled assets ready for deployment.
