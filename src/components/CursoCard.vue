<template>
  <v-card class="curso-card soft-card hover-lift h-100 d-flex flex-column">
    <v-card-text class="pa-6 flex-grow-1">
      <div class="d-flex align-center justify-space-between mb-3">
        <v-chip size="small" variant="tonal" color="primary" class="font-weight-bold">
          {{ curso.frente.numero }}
        </v-chip>
        <v-chip size="small" variant="flat" color="grey-lighten-4" text-color="grey-darken-3">
          {{ curso.grau }}
        </v-chip>
      </div>

      <h3 class="text-h6 font-weight-bold mb-2">{{ curso.nome }}</h3>
      <p class="text-body-2 text-medium-emphasis">{{ curso.resumo }}</p>

      <v-divider class="my-5" />

      <div class="meta-grid">
        <span><v-icon icon="mdi-clock-outline" size="16" /> {{ curso.duracao }}</span>
        <span><v-icon icon="mdi-laptop" size="16" /> {{ curso.modalidade }}</span>
        <span><v-icon icon="mdi-calendar-clock" size="16" /> {{ curso.turnos.join(' · ') }}</span>
      </div>

      <div class="mt-5">
        <span class="text-caption text-medium-emphasis">a partir de</span>
        <div class="text-h6 font-weight-black text-primary">
          {{ formatarMoeda(curso.mensalidade) }}<span class="text-caption font-weight-regular text-medium-emphasis">/mês</span>
        </div>
      </div>
    </v-card-text>

    <v-card-actions class="px-6 pb-6 pt-0 d-flex ga-2">
      <v-btn :to="`/cursos/${curso.slug}`" color="primary" variant="flat" class="flex-grow-1">Ver detalhes</v-btn>
      <v-btn :to="'/contato'" icon="mdi-message-text-outline" variant="tonal" color="primary" />
    </v-card-actions>
  </v-card>
</template>

<script setup>
defineProps({
  curso: { type: Object, required: true }
})

function formatarMoeda(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
</script>

<style scoped>
.curso-card {
  border: 1px solid rgba(11, 42, 91, 0.08);
}

.meta-grid {
  display: grid;
  gap: 8px;
  font-size: 0.85rem;
  color: #546e7a;
}

.meta-grid span {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
</style>
