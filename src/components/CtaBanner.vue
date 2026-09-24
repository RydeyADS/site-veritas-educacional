<template>
  <section class="cta">
    <v-container class="py-4 py-md-6">
      <div class="cta__inner hero-surface pa-6 pa-md-10" :style="ctaStyle">
        <v-row align="center">
          <v-col cols="12" md="8">
            <p class="eyebrow text-secondary mb-2">Processo seletivo</p>
            <h2 class="section-title mb-3">{{ titulo }}</h2>
            <p class="cta__text mb-0">{{ texto }}</p>
          </v-col>
          <v-col cols="12" md="4" class="text-md-right">
            <v-btn
              color="secondary"
              size="large"
              to="/contato"
              prepend-icon="mdi-pencil-outline"
              class="mb-2 mb-md-0"
            >
              Inscreva-se
            </v-btn>
            <v-btn
              variant="outlined"
              color="white"
              size="large"
              :href="cursosLink.url"
              target="_blank"
              rel="noopener"
              class="ml-md-2"
            >
              Ver cursos e valores
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import fundoUrl from '@/assets/banner-fundo.png'
import { cursosLink } from '@/data/site'

const ctaStyle = {
  backgroundColor: '#0b2a5b',
  backgroundImage: `linear-gradient(90deg, rgba(7, 27, 60, 0.9) 0%, rgba(7, 27, 60, 0.55) 50%, rgba(7, 27, 60, 0.15) 100%), url(${fundoUrl})`,
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}

defineProps({
  titulo: { type: String, default: 'Comece a sua trajetória na Veritas' },
  texto: {
    type: String,
    default:
      'Inscrições abertas o ano todo, com vagas para ingresso imediato, opções de bolsas e descontos para quem já é nosso aluno.',
  },
})
</script>

<style scoped>
.cta {
  padding-bottom: 24px;
}

.cta__inner {
  border-radius: 28px;
}

.cta__text {
  color: rgba(255, 255, 255, 0.8);
  max-width: 62ch;
  line-height: 1.7;
}
</style>
