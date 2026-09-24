<template>
  <div>
    <!-- HERO -->
    <section class="hero-surface hero">
      <v-container class="py-12 py-md-16">
        <v-row align="center">
          <v-col cols="12" lg="7">
            <v-chip class="mb-5" color="secondary" variant="tonal" prepend-icon="mdi-star-four-points-outline">
              Inscrições abertas para 2027
            </v-chip>
            <h1 class="hero__title">
              Formação prática, organizada por <span class="hero__highlight">frentes de conhecimento</span>.
            </h1>
            <p class="hero__text">
              Na {{ instituicao.nome }}, você escolhe uma área, mergulha em projetos reais e sai preparado para o
              mercado — com laboratórios, clínicas-escola e professores que atuam na prática.
            </p>
            <div class="d-flex flex-wrap ga-3 mt-8">
              <v-btn color="secondary" size="large" to="/cursos" prepend-icon="mdi-book-search-outline">
                Explorar cursos
              </v-btn>
              <v-btn variant="outlined" color="white" size="large" to="/sobre">Conhecer a faculdade</v-btn>
            </div>

            <div class="hero__badges mt-10">
              <span v-for="badge in badges" :key="badge">
                <v-icon icon="mdi-check-circle-outline" size="18" color="secondary" /> {{ badge }}
              </span>
            </div>
          </v-col>

          <v-col cols="12" lg="5">
            <v-card class="hero__panel soft-card" elevation="8">
              <v-card-text class="pa-6">
                <p class="eyebrow text-primary mb-3">Frentes de conhecimento</p>
                <router-link
                  v-for="frente in frentes"
                  :key="frente.slug"
                  :to="`/cursos#${frente.slug}`"
                  class="frente-row"
                >
                  <v-avatar color="primary" size="40" variant="tonal">
                    <v-icon :icon="frente.icone" size="20" />
                  </v-avatar>
                  <div class="flex-grow-1">
                    <div class="text-caption text-medium-emphasis">{{ frente.numero }}</div>
                    <div class="font-weight-bold">{{ frente.titulo }}</div>
                  </div>
                  <v-icon icon="mdi-chevron-right" />
                </router-link>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- NÚMEROS -->
    <section class="numbers">
      <v-container class="py-8">
        <v-row>
          <v-col v-for="numero in numeros" :key="numero.rotulo" cols="6" md="3">
            <div class="number-item">
              <v-icon :icon="numero.icone" color="secondary" size="26" class="mb-2" />
              <div class="number-item__value">{{ numero.valor }}</div>
              <div class="text-body-2 text-medium-emphasis">{{ numero.rotulo }}</div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- FRENTES -->
    <section class="page">
      <v-container>
        <div class="text-center mb-10">
          <p class="eyebrow text-secondary mb-2">Como a faculdade se organiza</p>
          <h2 class="section-title text-gradient">Cinco frentes, uma formação completa</h2>
          <p class="mx-auto mt-4 text-medium-emphasis" style="max-width: 62ch">
            Cada frente reúne cursos e competências de uma grande área. Navegue por elas para encontrar o caminho que
            combina com o seu objetivo.
          </p>
        </div>

        <v-row>
          <v-col v-for="frente in frentes" :key="frente.slug" cols="12" md="6" lg="4">
            <FrenteCard :frente="frente" />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- DIFERENCIAIS -->
    <section class="py-8 py-md-12 bg-white">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="5">
            <p class="eyebrow text-secondary mb-2">Por que a Kairos</p>
            <h2 class="section-title mb-4">Ferramentas para você aprender de verdade</h2>
            <p class="text-medium-emphasis">
              Da primeira aula ao primeiro emprego, a faculdade trabalha para que o estudante tenha repertório,
              apoio e experiência.
            </p>
            <v-btn class="mt-4" color="primary" to="/sobre" variant="tonal" append-icon="mdi-arrow-right">
              Nossa história
            </v-btn>
          </v-col>
          <v-col cols="12" md="7">
            <v-row>
              <v-col v-for="item in diferenciais" :key="item.titulo" cols="12" sm="6">
                <v-card class="soft-card h-100" variant="flat">
                  <v-card-text class="pa-5">
                    <v-icon :icon="item.icone" color="primary" size="28" class="mb-3" />
                    <h3 class="text-subtitle-1 font-weight-bold mb-1">{{ item.titulo }}</h3>
                    <p class="text-body-2 text-medium-emphasis mb-0">{{ item.texto }}</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- DEPOIMENTOS -->
    <section class="page">
      <v-container>
        <div class="text-center mb-10">
          <p class="eyebrow text-secondary mb-2">Quem vive a Kairos</p>
          <h2 class="section-title">Depoimentos de alunos e egressos</h2>
        </div>
        <v-row>
          <v-col v-for="dep in depoimentos" :key="dep.nome" cols="12" md="4">
            <v-card class="soft-card h-100" variant="flat">
              <v-card-text class="pa-6 d-flex flex-column h-100">
                <v-icon icon="mdi-format-quote-open" color="secondary" size="32" class="mb-3" />
                <p class="prose flex-grow-1">{{ dep.texto }}</p>
                <v-divider class="my-4" />
                <div class="d-flex align-center ga-3">
                  <v-avatar color="primary" size="42">{{ dep.avatar }}</v-avatar>
                  <div>
                    <div class="font-weight-bold">{{ dep.nome }}</div>
                    <div class="text-caption text-medium-emphasis">{{ dep.curso }}</div>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- NOTÍCIAS -->
    <section class="py-8 py-md-12 bg-white">
      <v-container>
        <div class="d-flex flex-wrap align-end justify-space-between mb-8 ga-4">
          <div>
            <p class="eyebrow text-secondary mb-2">Fique por dentro</p>
            <h2 class="section-title">Últimas notícias</h2>
          </div>
          <v-btn variant="text" color="primary" to="/noticias" append-icon="mdi-arrow-right">Ver todas</v-btn>
        </div>
        <v-row>
          <v-col v-for="noticia in noticias.slice(0, 3)" :key="noticia.slug" cols="12" md="4">
            <v-card class="soft-card hover-lift h-100" variant="flat" :to="`/noticias/${noticia.slug}`">
              <v-card-text class="pa-6">
                <v-chip size="small" color="secondary" variant="tonal" class="mb-3">{{ noticia.categoria }}</v-chip>
                <h3 class="text-subtitle-1 font-weight-bold mb-2">{{ noticia.titulo }}</h3>
                <p class="text-body-2 text-medium-emphasis">{{ noticia.resumo }}</p>
              </v-card-text>
              <v-card-actions class="px-6 pb-6 pt-0">
                <span class="text-caption text-medium-emphasis">{{ formatarData(noticia.data) }}</span>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <CtaBanner />
  </div>
</template>

<script setup>
import CtaBanner from '@/components/CtaBanner.vue'
import FrenteCard from '@/components/FrenteCard.vue'
import { frentes } from '@/data/frentes'
import { depoimentos, diferenciais, instituicao, noticias, numeros } from '@/data/site'
import { formatarData } from '@/utils/format'

const badges = ['Laboratórios e clínicas-escola', 'Bolsas e descontos', 'Ingresso o ano todo']
</script>

<style scoped>
.hero {
  padding-block: 20px 40px;
}

.hero__title {
  font-size: clamp(2.1rem, 1.4rem + 3vw, 3.6rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.06;
  max-width: 20ch;
}

.hero__highlight {
  color: #f2a007;
}

.hero__text {
  margin-top: 20px;
  max-width: 58ch;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.05rem;
  line-height: 1.75;
}

.hero__badges {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 28px;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.88rem;
}

.hero__panel {
  background: rgba(255, 255, 255, 0.97);
}

.frente-row {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px 0;
  text-decoration: none;
  color: #14181f;
  border-bottom: 1px solid rgba(11, 42, 91, 0.07);
  transition: transform 0.2s ease;
}

.frente-row:last-child {
  border-bottom: none;
}

.frente-row:hover {
  transform: translateX(4px);
}

.numbers {
  background: #fff;
  border-bottom: 1px solid rgba(11, 42, 91, 0.08);
}

.number-item {
  text-align: center;
}

.number-item__value {
  font-size: clamp(1.5rem, 1.2rem + 1.2vw, 2.2rem);
  font-weight: 800;
  color: #0b2a5b;
  letter-spacing: -0.02em;
}
</style>
