<template>
  <div>
    <PageHero
      eyebrow="Comunicação"
      titulo="Notícias e novidades"
      subtitulo="Acompanhe eventos, editais, conquistas acadêmicas e oportunidades de carreira."
      :itens="[{ title: 'Início', to: '/' }, { title: 'Notícias', disabled: true }]"
    />

    <section class="page">
      <v-container>
        <div class="d-flex flex-wrap ga-2 mb-8">
          <v-chip
            v-for="categoria in categorias"
            :key="categoria"
            :color="categoriaAtiva === categoria ? 'primary' : undefined"
            :variant="categoriaAtiva === categoria ? 'flat' : 'tonal'"
            @click="categoriaAtiva = categoria"
          >
            {{ categoria }}
          </v-chip>
        </div>

        <v-row>
          <v-col v-for="noticia in noticiasFiltradas" :key="noticia.slug" cols="12" md="6" lg="4">
            <v-card class="soft-card hover-lift h-100 d-flex flex-column" variant="flat" :to="`/noticias/${noticia.slug}`">
              <v-card-text class="pa-6 flex-grow-1">
                <div class="d-flex align-center justify-space-between mb-3">
                  <v-chip size="small" color="secondary" variant="tonal">{{ noticia.categoria }}</v-chip>
                  <span class="text-caption text-medium-emphasis">{{ formatarData(noticia.data) }}</span>
                </div>
                <h2 class="text-subtitle-1 font-weight-bold mb-2">{{ noticia.titulo }}</h2>
                <p class="text-body-2 text-medium-emphasis mb-0">{{ noticia.resumo }}</p>
              </v-card-text>
              <v-card-actions class="px-6 pb-6 pt-0">
                <span class="text-body-2 font-weight-medium text-primary">Ler notícia</span>
                <v-spacer />
                <v-icon icon="mdi-arrow-right" color="primary" />
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <CtaBanner
      titulo="Receba novidades da Kairos"
      texto="Deixe seus dados no nosso canal de contato e fique por dentro de editais, eventos e oportunidades."
    />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import CtaBanner from '@/components/CtaBanner.vue'
import PageHero from '@/components/PageHero.vue'
import { noticias } from '@/data/site'
import { formatarData } from '@/utils/format'

const categoriaAtiva = ref('Todas')
const categorias = ['Todas', ...new Set(noticias.map((n) => n.categoria))]

const noticiasFiltradas = computed(() =>
  categoriaAtiva.value === 'Todas' ? noticias : noticias.filter((n) => n.categoria === categoriaAtiva.value)
)
</script>
