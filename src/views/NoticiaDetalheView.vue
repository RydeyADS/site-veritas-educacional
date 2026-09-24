<template>
  <div v-if="noticia">
    <PageHero
      :eyebrow="noticia.categoria"
      :titulo="noticia.titulo"
      :itens="[
        { title: 'Início', to: '/' },
        { title: 'Notícias', to: '/noticias' },
        { title: 'Notícia', disabled: true }
      ]"
    >
      <div class="d-flex flex-wrap align-center ga-4 mt-6 text-white">
        <span class="d-inline-flex align-center ga-2">
          <v-icon icon="mdi-calendar-outline" size="18" />
          <span class="text-body-2">{{ formatarData(noticia.data) }}</span>
        </span>
        <span class="d-inline-flex align-center ga-2">
          <v-icon icon="mdi-account-edit-outline" size="18" />
          <span class="text-body-2">{{ noticia.autor }}</span>
        </span>
      </div>
    </PageHero>

    <section class="page">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" lg="8">
            <v-card class="soft-card" variant="flat">
              <v-card-text class="pa-6 pa-md-10">
                <p class="noticia__lead">{{ noticia.resumo }}</p>
                <p v-for="(paragrafo, index) in noticia.conteudo" :key="index" class="prose">
                  {{ paragrafo }}
                </p>

                <v-divider class="my-8" />

                <div class="d-flex flex-wrap align-center justify-space-between ga-3">
                  <v-btn variant="tonal" color="primary" to="/noticias" prepend-icon="mdi-arrow-left">
                    Voltar para notícias
                  </v-btn>
                  <div class="d-flex align-center ga-2">
                    <span class="text-caption text-medium-emphasis">Compartilhar:</span>
                    <v-btn icon="mdi-whatsapp" size="small" variant="tonal" color="primary" />
                    <v-btn icon="mdi-facebook" size="small" variant="tonal" color="primary" />
                    <v-btn icon="mdi-linkedin" size="small" variant="tonal" color="primary" />
                  </div>
                </div>
              </v-card-text>
            </v-card>

            <div v-if="relacionadas.length" class="mt-10">
              <h2 class="text-h6 font-weight-bold mb-4">Outras notícias</h2>
              <v-row>
                <v-col v-for="item in relacionadas" :key="item.slug" cols="12" sm="6">
                  <v-card class="soft-card hover-lift h-100" variant="flat" :to="`/noticias/${item.slug}`">
                    <v-card-text class="pa-6">
                      <v-chip size="small" color="secondary" variant="tonal" class="mb-3">{{ item.categoria }}</v-chip>
                      <h3 class="text-subtitle-2 font-weight-bold mb-2">{{ item.titulo }}</h3>
                      <p class="text-body-2 text-medium-emphasis mb-0">{{ item.resumo }}</p>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <CtaBanner />
  </div>

  <div v-else class="page">
    <v-container class="text-center">
      <v-icon icon="mdi-newspaper-remove" size="56" color="warning" class="mb-4" />
      <h1 class="text-h5 font-weight-bold mb-2">Notícia não encontrada</h1>
      <p class="text-medium-emphasis mb-6">O conteúdo que você procura pode ter sido movido ou removido.</p>
      <v-btn color="primary" to="/noticias">Ver todas as notícias</v-btn>
    </v-container>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import CtaBanner from '@/components/CtaBanner.vue'
import PageHero from '@/components/PageHero.vue'
import { encontrarNoticia, noticias } from '@/data/site'
import { formatarData } from '@/utils/format'

const route = useRoute()

const noticia = computed(() => encontrarNoticia(route.params.slug))

const relacionadas = computed(() => noticias.filter((n) => n.slug !== route.params.slug).slice(0, 2))
</script>

<style scoped>
.noticia__lead {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #0b2a5b;
  font-weight: 500;
  border-left: 4px solid #f2a007;
  padding-left: 16px;
  margin-bottom: 28px;
}
</style>
