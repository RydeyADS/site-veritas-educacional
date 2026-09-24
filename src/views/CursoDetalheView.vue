<template>
  <div v-if="curso">
    <PageHero
      :eyebrow="`${curso.frente.numero} · ${curso.frente.titulo}`"
      :titulo="curso.nome"
      :subtitulo="curso.resumo"
      :itens="[
        { title: 'Início', to: '/' },
        { title: 'Cursos', to: '/cursos' },
        { title: curso.nome, disabled: true }
      ]"
    >
      <div class="d-flex flex-wrap ga-2 mt-6">
        <v-chip color="secondary" variant="flat">{{ curso.grau }}</v-chip>
        <v-chip variant="outlined" color="white" prepend-icon="mdi-clock-outline">{{ curso.duracao }}</v-chip>
        <v-chip variant="outlined" color="white" prepend-icon="mdi-laptop">{{ curso.modalidade }}</v-chip>
        <v-chip
          v-for="turno in curso.turnos"
          :key="turno"
          variant="outlined"
          color="white"
          prepend-icon="mdi-calendar-clock"
        >
          {{ turno }}
        </v-chip>
      </div>
    </PageHero>

    <section class="page">
      <v-container>
        <v-row>
          <v-col cols="12" lg="8">
            <v-card class="soft-card mb-6" variant="flat">
              <v-card-text class="pa-6 pa-md-8">
                <h2 class="text-h5 font-weight-bold mb-4">Sobre o curso</h2>
                <p class="prose mb-0">{{ curso.descricao }}</p>
              </v-card-text>
            </v-card>

            <v-card class="soft-card mb-6" variant="flat">
              <v-card-text class="pa-6 pa-md-8">
                <h2 class="text-h5 font-weight-bold mb-4">O que você vai dominar</h2>
                <v-row dense>
                  <v-col v-for="item in curso.competencias" :key="item" cols="12" sm="6">
                    <div class="competencia">
                      <v-icon icon="mdi-check-decagram" color="primary" size="20" />
                      <span>{{ item }}</span>
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>

            <v-card class="soft-card" variant="flat">
              <v-card-text class="pa-6 pa-md-8">
                <h2 class="text-h5 font-weight-bold mb-4">Como funciona a formação</h2>
                <v-timeline side="end" density="compact" truncate-line="both">
                  <v-timeline-item
                    v-for="etapa in etapas"
                    :key="etapa.titulo"
                    dot-color="primary"
                    size="small"
                  >
                    <div class="font-weight-bold">{{ etapa.titulo }}</div>
                    <div class="text-body-2 text-medium-emphasis">{{ etapa.texto }}</div>
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" lg="4">
            <v-card class="soft-card mb-6 sidebar" variant="flat">
              <v-card-text class="pa-6">
                <span class="text-caption text-medium-emphasis">Mensalidade a partir de</span>
                <div class="sidebar__price text-primary">
                  {{ formatarMoeda(curso.mensalidade) }}
                  <span class="text-body-2 font-weight-regular text-medium-emphasis">/mês</span>
                </div>
                <v-btn color="primary" block size="large" class="mt-4" to="/contato" prepend-icon="mdi-pencil-outline">
                  Quero me inscrever
                </v-btn>
                <v-btn variant="tonal" color="primary" block class="mt-2" to="/contato" prepend-icon="mdi-whatsapp">
                  Falar com um consultor
                </v-btn>

                <v-divider class="my-6" />

                <div class="sidebar__info">
                  <div class="sidebar__label">Coordenação</div>
                  <div class="font-weight-medium">{{ curso.coordenador }}</div>
                </div>
                <div class="sidebar__info">
                  <div class="sidebar__label">Grau</div>
                  <div class="font-weight-medium">{{ curso.grau }}</div>
                </div>
                <div class="sidebar__info">
                  <div class="sidebar__label">Duração</div>
                  <div class="font-weight-medium">{{ curso.duracao }}</div>
                </div>
                <div class="sidebar__info">
                  <div class="sidebar__label">Modalidade</div>
                  <div class="font-weight-medium">{{ curso.modalidade }} · {{ curso.turnos.join(' · ') }}</div>
                </div>
              </v-card-text>
            </v-card>

            <v-card class="soft-card mb-6" variant="flat">
              <v-card-text class="pa-6">
                <h3 class="text-subtitle-1 font-weight-bold mb-3">Destaques do curso</h3>
                <div v-for="destaque in curso.destaques" :key="destaque" class="competencia">
                  <v-icon icon="mdi-star-outline" color="secondary" size="18" />
                  <span>{{ destaque }}</span>
                </div>
              </v-card-text>
            </v-card>

            <v-card v-if="relacionados.length" class="soft-card" variant="flat">
              <v-card-text class="pa-6">
                <h3 class="text-subtitle-1 font-weight-bold mb-3">
                  Outros cursos da {{ curso.frente.numero }}
                </h3>
                <router-link
                  v-for="rel in relacionados"
                  :key="rel.slug"
                  :to="`/cursos/${rel.slug}`"
                  class="related-link"
                >
                  <v-icon icon="mdi-book-outline" size="18" color="primary" />
                  <span>{{ rel.nome }}</span>
                  <v-icon icon="mdi-chevron-right" size="18" />
                </router-link>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <CtaBanner />
  </div>

  <div v-else class="page">
    <v-container class="text-center">
      <v-icon icon="mdi-alert-circle-outline" size="56" color="warning" class="mb-4" />
      <h1 class="text-h5 font-weight-bold mb-2">Curso não encontrado</h1>
      <p class="text-medium-emphasis mb-6">O curso que você procura não está disponível na nossa grade atual.</p>
      <v-btn color="primary" to="/cursos">Voltar para a lista de cursos</v-btn>
    </v-container>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import CtaBanner from '@/components/CtaBanner.vue'
import PageHero from '@/components/PageHero.vue'
import { encontrarCurso, encontrarFrente } from '@/data/frentes'
import { formatarMoeda } from '@/utils/format'

const route = useRoute()

const curso = computed(() => encontrarCurso(route.params.slug))

const relacionados = computed(() => {
  if (!curso.value) return []
  const frente = encontrarFrente(curso.value.frente.slug)
  return frente ? frente.cursos.filter((c) => c.slug !== curso.value.slug) : []
})

const etapas = computed(() => {
  if (!curso.value) return []
  return [
    { titulo: 'Fundamentos', texto: 'Bases teóricas da área, com nivelamento e apoio pedagógico.' },
    { titulo: 'Prática guiada', texto: 'Laboratórios, estudos de caso e projetos integradores em equipe.' },
    { titulo: 'Projeto aplicado', texto: `Desafio real conectado à frente de ${curso.value.frente.titulo}.` },
    { titulo: 'Mercado e carreira', texto: 'Estágio supervisionado, portfólio e apoio do núcleo de carreiras.' }
  ]
})
</script>

<style scoped>
.competencia {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 8px 0;
  font-size: 0.94rem;
  color: #37474f;
}

.sidebar {
  position: sticky;
  top: 96px;
}

.sidebar__price {
  font-size: 1.9rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.sidebar__info + .sidebar__info {
  margin-top: 14px;
}

.sidebar__label {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #90a4ae;
}

.related-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  color: #37474f;
  text-decoration: none;
  font-size: 0.92rem;
  border-bottom: 1px solid rgba(11, 42, 91, 0.07);
}

.related-link:last-child {
  border-bottom: none;
}

.related-link span {
  flex-grow: 1;
}

.related-link:hover {
  color: #0b2a5b;
}
</style>
