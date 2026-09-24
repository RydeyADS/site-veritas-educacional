<template>
  <transition name="cookie-slide">
    <div
      v-if="visivel"
      class="cookie-banner"
      role="dialog"
      aria-live="polite"
      aria-label="Consentimento de cookies"
    >
      <v-container>
        <v-card class="cookie-card" elevation="16">
          <v-card-text class="pa-5 pa-md-6 d-flex flex-column flex-lg-row align-lg-center ga-4">
            <v-icon
              icon="mdi-cookie-outline"
              color="secondary"
              size="34"
              class="cookie-banner__icon"
            />
            <div class="flex-grow-1">
              <div class="font-weight-bold mb-1">Nós usamos cookies</div>
              <p class="text-body-2 text-medium-emphasis mb-0">
                Utilizamos cookies essenciais para o funcionamento do site e cookies de desempenho
                para entender como você navega. Você pode aceitar todos ou manter apenas os
                essenciais. Saiba mais na
                <router-link to="/politica-privacidade" class="cookie-banner__link"
                  >Política de Privacidade</router-link
                >.
              </p>
            </div>
            <div class="d-flex flex-column flex-sm-row ga-2 cookie-banner__actions">
              <v-btn variant="tonal" color="primary" @click="aceitarEssenciais"
                >Somente essenciais</v-btn
              >
              <v-btn color="secondary" prepend-icon="mdi-check" @click="aceitarTodos"
                >Aceitar todos</v-btn
              >
            </div>
          </v-card-text>
        </v-card>
      </v-container>
    </div>
  </transition>
</template>

<script setup>
import { useCookieConsent } from '@/composables/useCookieConsent'

const { visivel, aceitarTodos, aceitarEssenciais } = useCookieConsent()
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2600;
  padding-bottom: 16px;
  pointer-events: none;
}

.cookie-banner :deep(.container) {
  pointer-events: none;
}

.cookie-card {
  pointer-events: auto;
  border-radius: 18px !important;
  border: 1px solid rgba(11, 42, 91, 0.1);
  background: #ffffff;
  box-shadow: 0 24px 60px -24px rgba(11, 42, 91, 0.55) !important;
}

.cookie-banner__icon {
  flex-shrink: 0;
}

.cookie-banner__link {
  color: #0b2a5b;
  font-weight: 600;
  text-decoration: none;
}

.cookie-banner__link:hover {
  text-decoration: underline;
}

.cookie-banner__actions {
  flex-shrink: 0;
}

.cookie-slide-enter-active,
.cookie-slide-leave-active {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.cookie-slide-enter-from,
.cookie-slide-leave-to {
  transform: translateY(120%);
  opacity: 0;
}
</style>
