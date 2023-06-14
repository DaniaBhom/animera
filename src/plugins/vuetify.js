// Styles
import '@mdi/font/css/materialdesignicons.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@fortawesome/fontawesome-free/css/all.css';
// eslint-disable-next-line import/no-unresolved
import 'vuetify/styles';

// Vuetify
import { createVuetify } from 'vuetify';

const myCustomDarkTheme = {
  dark: false,
  colors: {
    surface: '#000000',
  },
};

export default createVuetify({
  theme: {
    defaultTheme: 'myCustomDarkTheme',
    themes: {
      myCustomDarkTheme,
    },
  },
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
