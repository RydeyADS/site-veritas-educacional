<template>
  <div>
    <PageHero
      eyebrow="Oferta acadêmica"
      titulo="Cursos organizados por frentes de conhecimento"
      subtitulo="Filtre por área, grau e modalidade para encontrar o curso que combina com o seu momento."
      :itens="[{ title: 'Início', to: '/' }, { title: 'Cursos', disabled: true }]"
    />

    <section class="page">
      <v-container>
        <!-- FILTROS -->
        <v-card class="soft-card mb-8" variant="flat">
          <v-card-text class="pa-6">
            <v-row dense>
              <v-col cols="12" md="5">
                <v-text-field
                  v-model="busca"
                  label="Buscar curso"
                  placeholder="Ex.: dados, enfermagem, marketing..."
                  prepend-inner-icon="mdi-magnify"
                  variant="outlined"
                  density="comfortable"
                  hide-details
                  clearable
                />
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-select
                  v-model="grau"
                  :items="grausDisponiveis"
                  label="Grau"
                  variant="outlined"
                  density="comfortable"
                  hide-details
                />
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select
                  v-model="modalidade"
                  :items="modalidadesDisponiveis"
                  label="Modalidade"
                  variant="outlined"
                  density="comfortable"
                  hide-details
                />
              </v-col>
            </v-row>

            <div class="d-flex flex-wrap align-center ga-2 mt-5">
              <span class="text-caption text-medium-emphasis mr-2">Frentes:</span>
              <v-chip
                v-for="frente in frentes"
                :key="frente.slug"
                :color="frenteAtiva === frente.slug ? 'primary' : undefined"
                :variant="frenteAtiva === frente.slug ? 'flat' : 'tonal'"
                size="small"
                @click="toggleFrente(frente.slug)"
              >
                {{ frente.titulo }}
              </v-chip>
              <v-btn v-if="temFiltro" size="small" variant="text" color="primary" @click="limpar">
                Limpar filtros
              </v-btn>
            </div>
          </v-card-text>
        </v-card>

        <p class="text-body-2 text-medium-emphasis mb-6">
          {{ cursosFiltrados.length }} curso{{ cursosFiltrados.length === 1 ? '' : 's' }} encontrado{{
            cursosFiltrados.length === 1 ? '' : 's'
          }}
        </p>

        <v-row v-if="cursosFiltrados.length">
          <v-col v-for="curso in cursosFiltrados" :key="curso.slug" cols="12" md="6" lg="4">
            <CursoCard :curso="curso" />
          </v-col>
        </v-row>

        <v-card v-else class="soft-card text-center pa-12" variant="flat">
          <v-icon icon="mdi-magnify-close" size="48" color="grey" class="mb-4" />
          <h3 class="text-h6 font-weight-bold mb-2">Nenhum curso encontrado</h3>
          <p class="text-medium-emphasis mb-4">Ajuste os filtros ou fale com a nossa equipe de atendimento.</p>
          <v-btn color="primary" @click="limpar">Limpar filtros</v-btn>
        </v-card>

        <!-- VISÃO POR FRENTE -->
        <div v-if="!temFiltro" class="mt-16">
          <div v-for="frente in frentes" :key="frente.slug" :id="frente.slug" class="frente-block mb-12">
            <div class="d-flex align-center ga-3 mb-4">
              <v-avatar color="primary" size="44" variant="tonal">
                <v-icon :icon="frente.icone" size="22" />
              </v-avatar>
              <div>
                <p class="eyebrow text-primary">{{ frente.numero }}</p>
                <h2 class="text-h5 font-weight-bold">{{ frente.titulo }}</h2>
              </div>
            </div>
            <p class="text-medium-emphasis mb-5" style="max-width: 75ch">{{ frente.descricao }}</p>
            <div class="d-flex flex-wrap ga-2">
              <v-chip
                v-for="curso in frente.cursos"
                :key="curso.slug"
                :to="`/cursos/${curso.slug}`"
                color="primary"
                variant="tonal"
                prepend-icon="mdi-book-outline"
              >
                {{ curso.nome }}
              </v-chip>
            </div>
          </div>
        </div>
      </v-container>
    </section>

    <CtaBanner />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import CursoCard from '@/components/CursoCard.vue'
import CtaBanner from '@/components/CtaBanner.vue'
import PageHero from '@/components/PageHero.vue'
import { frentes, todosOsCursos } from '@/data/frentes'

const busca = ref('')
const grau = ref('Todos')
const modalidade = ref('Todas')
const frenteAtiva = ref(null)

const grausDisponiveis = ['Todos', ...new Set(todosOsCursos.map((c) => c.grau))]
const modalidadesDisponiveis = ['Todas', ...new Set(todosOsCursos.map((c) => c.modalidade))]

const cursosFiltrados = computed(() => {
  const termo = (busca.value ?? '').trim().toLowerCase()
  return todosOsCursos.filter((curso) => {
    const casaBusca =
      !termo ||
      curso.nome.toLowerCase().includes(termo) ||
      curso.resumo.toLowerCase().includes(termo) ||
      curso.frente.titulo.toLowerCase().includes(termo)
    const casaGrau = grau.value === 'Todos' || curso.grau === grau.value
    const casaModalidade = modalidade.value === 'Todas' || curso.modalidade === modalidade.value
    const casaFrente = !frenteAtiva.value || curso.frente.slug === frenteAtiva.value
    return casaBusca && casaGrau && casaModalidade && casaFrente
  })
})

const temFiltro = computed(
  () => Boolean(busca.value) || grau.value !== 'Todos' || modalidade.value !== 'Todas' || Boolean(frenteAtiva.value)
)

function toggleFrente(slug) {
  frenteAtiva.value = frenteAtiva.value === slug ? null : slug
}

function limpar() {
  busca.value = ''
  grau.value = 'Todos'
  modalidade.value = 'Todas'
  frenteAtiva.value = null
}
</script>

<style scoped>
.frente-block {
  scroll-margin-top: 96px;
}
</style>
