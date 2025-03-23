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
        dark: false,
        colors: {
          primary: "#E98E16",
          secondary: "#CB351A",
          accent: "#AC0E0D",
          background: "#e8f4fc",
          surface: "#FFFFFF",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
        },
      },
    },
  },
});
