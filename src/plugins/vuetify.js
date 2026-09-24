import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import { createVuetify } from 'vuetify'
import { pt } from 'vuetify/locale'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const kairosTheme = {
  dark: false,
  colors: {
    background: '#F6F7FB',
    surface: '#FFFFFF',
    primary: '#0B2A5B',
    'primary-darken-1': '#071B3C',
    secondary: '#F2A007',
    'secondary-darken-1': '#C97E00',
    accent: '#1E88E5',
    error: '#D32F2F',
    info: '#0277BD',
    success: '#2E7D32',
    warning: '#ED6C02'
  }
}

export default createVuetify({
  components,
  directives,
  locale: {
    locale: 'pt',
    messages: { pt }
  },
  theme: {
    defaultTheme: 'kairos',
    themes: { kairos: kairosTheme }
  },
  defaults: {
    VBtn: { rounded: 'lg', elevation: 0 },
    VCard: { rounded: 'xl' },
    VChip: { rounded: 'lg' }
  }
})
