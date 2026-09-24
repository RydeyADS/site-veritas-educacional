<template>
  <div class="whatsapp-fab" :class="{ 'whatsapp-fab--acima': bannerAberto }">
    <a
      class="whatsapp-fab__botao"
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Kairos pelo WhatsApp"
      :title="`Fale conosco no WhatsApp ${contato.whatsapp}`"
    >
      <v-icon icon="mdi-whatsapp" size="30" />
    </a>
  </div>
</template>

<script setup>
import { contato } from '@/data/site'
import { useCookieConsent } from '@/composables/useCookieConsent'

const { bannerAberto } = useCookieConsent()

const link = `${contato.whatsappLink}?text=${encodeURIComponent(
  'Olá! Vim pelo site da Kairos e gostaria de mais informações sobre os cursos.'
)}`
</script>

<style scoped>
.whatsapp-fab {
  position: fixed;
  right: 20px;
  bottom: 22px;
  z-index: 2500;
  transition: bottom 0.3s ease;
}

.whatsapp-fab--acima {
  bottom: 160px;
}

@media (max-width: 959px) {
  .whatsapp-fab {
    right: 16px;
    bottom: 16px;
  }

  /* Banner de cookies ocupa a base da tela no mobile. */
  .whatsapp-fab--acima {
    display: none;
  }
}

.whatsapp-fab__botao {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: #25d366;
  color: #fff;
  text-decoration: none;
  box-shadow: 0 14px 30px -12px rgba(11, 42, 91, 0.7);
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
}

.whatsapp-fab__botao:hover {
  background: #1eb455;
  transform: translateY(-2px);
  box-shadow: 0 20px 34px -12px rgba(11, 42, 91, 0.78);
}

.whatsapp-fab__botao:focus-visible {
  outline: 3px solid rgba(37, 211, 102, 0.55);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  .whatsapp-fab,
  .whatsapp-fab__botao {
    transition: none;
  }
}
</style>
