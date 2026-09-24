<template>
  <section class="cta hero-surface">
    <v-container class="py-12 py-md-16">
      <v-row align="center">
        <v-col cols="12" md="8">
          <p class="eyebrow text-secondary mb-2">Processo seletivo</p>
          <h2 class="section-title mb-3">{{ titulo }}</h2>
          <p class="cta__text mb-0">{{ texto }}</p>
        </v-col>
        <v-col cols="12" md="4" class="text-md-right">
          <v-btn color="secondary" size="large" to="/contato" prepend-icon="mdi-pencil-outline" class="mb-2 mb-md-0">
            Inscreva-se
          </v-btn>
          <v-btn variant="outlined" color="white" size="large" to="/cursos" class="ml-md-2">
            Conhecer cursos
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
defineProps({
  titulo: { type: String, default: 'Comece a sua trajetória na Kairos' },
  texto: {
    type: String,
    default:
      'Inscrições abertas o ano todo, com vagas para ingresso imediato, opções de bolsas e descontos para quem já é nosso aluno.'
  }
})
</script>

<style scoped>
.cta {
  border-radius: 28px;
  margin-inline: 24px;
  margin-bottom: 24px;
}

.cta__text {
  color: rgba(255, 255, 255, 0.8);
  max-width: 62ch;
  line-height: 1.7;
}
</style>
