<template>
  <section class="page not-found">
    <v-container class="text-center">
      <p class="not-found__code">404</p>
      <h1 class="section-title mb-3">Página não encontrada</h1>
      <p class="text-medium-emphasis mb-8 mx-auto" style="max-width: 52ch">
        O endereço acessado não existe ou foi movido. Use os atalhos abaixo para continuar
        navegando.
      </p>
      <div class="d-flex flex-wrap justify-center ga-3">
        <v-btn color="primary" size="large" to="/" prepend-icon="mdi-home-variant"
          >Voltar ao início</v-btn
        >
        <v-btn
          variant="tonal"
          color="primary"
          size="large"
          :href="cursosLink.url"
          target="_blank"
          rel="noopener"
        >
          Ver cursos
        </v-btn>
        <v-btn variant="tonal" color="primary" size="large" to="/contato">Falar com a gente</v-btn>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { cursosLink } from '@/data/site'
</script>

<style scoped>
.not-found {
  padding-block: 96px;
}

.not-found__code {
  font-size: clamp(4rem, 3rem + 8vw, 9rem);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.04em;
  color: transparent;
  background: linear-gradient(90deg, #0b2a5b 0%, #1e88e5 100%);
  -webkit-background-clip: text;
  background-clip: text;
}
</style>
