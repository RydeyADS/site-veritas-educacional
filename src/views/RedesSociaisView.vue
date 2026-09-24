<template>
  <div>
    <PageHero
      eyebrow="Comunidade"
      titulo="Nossas redes sociais"
      subtitulo="Acompanhe a Kairos nos canais oficiais, fale com a nossa equipe e fique por dentro de tudo."
      :itens="[{ title: 'Início', to: '/' }, { title: 'Redes sociais', disabled: true }]"
    />

    <section class="page">
      <v-container>
        <v-row>
          <v-col v-for="rede in redesSociais" :key="rede.nome" cols="12" md="6" lg="4">
            <v-card class="soft-card hover-lift h-100 d-flex flex-column" variant="flat">
              <v-card-text class="pa-7 flex-grow-1">
                <v-avatar color="primary" variant="tonal" size="60" class="mb-4">
                  <v-icon :icon="rede.icone" size="32" />
                </v-avatar>
                <h2 class="text-h6 font-weight-bold mb-1">{{ rede.nome }}</h2>
                <p class="text-body-2 text-primary font-weight-medium mb-3">{{ rede.usuario }}</p>
                <p class="text-body-2 text-medium-emphasis mb-0">{{ rede.descricao }}</p>
              </v-card-text>
              <v-card-actions class="px-7 pb-7 pt-0">
                <v-btn
                  :href="rede.url"
                  target="_blank"
                  rel="noopener"
                  color="primary"
                  variant="flat"
                  block
                  :prepend-icon="rede.icone"
                >
                  {{ rede.acao }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <v-card class="soft-card mt-10" variant="flat">
          <v-card-text class="pa-6 pa-md-8 d-flex flex-column flex-md-row align-md-center justify-space-between ga-4">
            <div>
              <h2 class="text-h6 font-weight-bold mb-1">Prefere um atendimento individual?</h2>
              <p class="text-body-2 text-medium-emphasis mb-0">
                Fale com a nossa central e receba orientação sobre cursos, matrículas e bolsas.
              </p>
            </div>
            <v-btn color="secondary" size="large" to="/contato" prepend-icon="mdi-message-text-outline">
              Ir para o contato
            </v-btn>
          </v-card-text>
        </v-card>
      </v-container>
    </section>

    <CtaBanner />
  </div>
</template>

<script setup>
import CtaBanner from '@/components/CtaBanner.vue'
import PageHero from '@/components/PageHero.vue'
import { redesSociais } from '@/data/site'
</script>
