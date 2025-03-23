import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles/main.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import colors from "vuetify/util/colors";

export const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "customTheme",
    themes: {
      customTheme: {
        dark: false,
        colors: {
          primary: colors.deepOrange.base,
          secondary: colors.deepOrange.darken4,
          accent: colors.deepOrange.accent3,
          background: colors.yellow.lighten5,
          surface: colors.orange.lighten4,
          error: colors.deepOrange.darken3,
          info: colors.lightBlue.base,
          success: colors.green.base,
          warning: colors.red.base,
          text: colors.shades.black,
        },
      },
    },
  },
});
