<template>
  <section class="page">
    <v-container>
      <div class="text-center mb-10">
        <p class="eyebrow text-secondary mb-2">{{ modelo.eyebrow }}</p>
        <h2 class="section-title">{{ modelo.titulo }}</h2>
        <p class="prose mx-auto mt-4" style="max-width: 780px">{{ modelo.intro }}</p>
      </div>

      <v-row>
        <v-col v-for="bloco in modelo.blocos" :key="bloco.titulo" cols="12" md="4">
          <v-card class="soft-card h-100" variant="flat">
            <v-card-text class="pa-6">
              <v-icon :icon="bloco.icone" color="primary" size="30" class="mb-3" />
              <h3 class="text-subtitle-1 font-weight-bold mb-2">{{ bloco.titulo }}</h3>
              <p class="text-body-2 text-medium-emphasis mb-0">{{ bloco.texto }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-card class="soft-card mt-8" variant="flat">
        <v-card-text class="pa-6 pa-md-10">
          <h3 class="text-subtitle-1 font-weight-bold mb-4">Passo a passo da aquisição</h3>
          <v-timeline side="end" density="compact">
            <v-timeline-item
              v-for="(passo, i) in modelo.passos"
              :key="i"
              color="primary"
              size="small"
            >
              <div class="font-weight-medium">{{ passo }}</div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-container>
  </section>
</template>

<script setup>
import { modeloAtuacao as modelo } from '@/data/site'
</script>
