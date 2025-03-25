import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles/main.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "customTheme",
    themes: {
      customTheme: {
        dark: true,
        colors: {
          primary: '#b94616',     // dark-cinnamon
          secondary: '#311715',    // tamarind
          background: '#42201e',   // tamarind-light
          surface: '#f4f1e8',     // ivory
          accent: '#96848c',      // pink
          error: '#b94616',       // using dark-cinnamon for error
          info: '#96848c',        // using pink for info
          success: '#f4f1e8',     // using ivory for success
          warning: '#b94616',     // using dark-cinnamon for warning
          separator: '#311715',    // using tamarind for separator
          text: '#f4f1e8',        // using ivory for text
        },
      },
    },
  },
});