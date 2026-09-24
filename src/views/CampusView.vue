<template>
  <div>
    <PageHero
      eyebrow="Estrutura"
      titulo="Nossos Campos"
      subtitulo="Três campi equipados com laboratórios, biblioteca, espaços de convivência e atendimento ao estudante."
      :itens="[{ title: 'Início', to: '/' }, { title: 'Campus', disabled: true }]"
    />

    <section class="page">
      <v-container>
        <v-row>
          <v-col v-for="unidade in unidades" :key="unidade.slug" cols="12" md="6" lg="4">
            <v-card class="soft-card hover-lift h-100 d-flex flex-column" variant="flat">
              <v-card-text class="pa-6 flex-grow-1">
                <div class="d-flex align-center justify-space-between mb-3">
                  <v-avatar color="primary" variant="tonal" size="46">
                    <v-icon icon="mdi-office-building-outline" size="24" />
                  </v-avatar>
                  <v-chip v-if="unidade.destaque" size="small" color="secondary" variant="tonal">Sede</v-chip>
                </div>

                <h2 class="text-h6 font-weight-bold mb-1">{{ unidade.nome }}</h2>
                <p class="text-body-2 text-medium-emphasis mb-4">{{ unidade.cidade }}</p>

                <div class="unidade-info">
                  <span><v-icon icon="mdi-map-marker-outline" size="18" /> {{ unidade.endereco }}</span>
                  <span><v-icon icon="mdi-phone-outline" size="18" /> {{ unidade.telefone }}</span>
                  <span><v-icon icon="mdi-clock-outline" size="18" /> {{ unidade.horario }}</span>
                </div>

                <v-divider class="my-5" />

                <h3 class="text-caption font-weight-bold text-uppercase mb-2" style="letter-spacing: 0.12em">
                  Infraestrutura
                </h3>
                <div class="d-flex flex-wrap ga-2">
                  <v-chip v-for="item in unidade.estrutura" :key="item" size="small" variant="tonal" color="primary">
                    {{ item }}
                  </v-chip>
                </div>
              </v-card-text>

              <v-card-actions class="px-6 pb-6 pt-0">
                <v-btn color="primary" variant="tonal" block :to="'/contato'" prepend-icon="mdi-map-outline">
                  Agendar visita
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="py-8 py-md-12 bg-white">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="5">
            <p class="eyebrow text-secondary mb-2">Estrutura acadêmica</p>
            <h2 class="section-title mb-4">Espaços que apoiam o seu aprendizado</h2>
            <p class="text-medium-emphasis">
              Além das salas de aula, os campi contam com ambientes especializados por frente de conhecimento,
              biblioteca com acervo físico e digital, e espaços de convivência.
            </p>
          </v-col>
          <v-col cols="12" md="7">
            <v-row>
              <v-col v-for="espaco in espacos" :key="espaco.titulo" cols="12" sm="6">
                <div class="espaco">
                  <v-icon :icon="espaco.icone" color="primary" size="26" />
                  <div>
                    <div class="font-weight-bold">{{ espaco.titulo }}</div>
                    <div class="text-body-2 text-medium-emphasis">{{ espaco.texto }}</div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <CtaBanner
      titulo="Venha conhecer um campus de perto"
      texto="Agende uma visita guiada, converse com coordenadores e conheça os laboratórios antes de decidir."
    />
  </div>
</template>

<script setup>
import CtaBanner from '@/components/CtaBanner.vue'
import PageHero from '@/components/PageHero.vue'
import { unidades } from '@/data/site'

const espacos = [
  { titulo: 'Biblioteca', icone: 'mdi-bookshelf', texto: 'Acervo físico e digital, salas de estudo e apoio à pesquisa.' },
  { titulo: 'Laboratórios', icone: 'mdi-flask-outline', texto: 'Ambientes por frente: informática, saúde, engenharia e maker.' },
  { titulo: 'Clínicas-escola', icone: 'mdi-hospital-box-outline', texto: 'Atendimento gratuito à comunidade e prática supervisionada.' },
  { titulo: 'Espaços de convivência', icone: 'mdi-sofa-outline', texto: 'Áreas de descanso, cantina e coworking para projetos.' }
]
</script>

<style scoped>
.unidade-info {
  display: grid;
  gap: 8px;
  font-size: 0.86rem;
  color: #546e7a;
}

.unidade-info span {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.espaco {
  display: flex;
  gap: 14px;
  padding: 16px;
  border-radius: 16px;
  background: #f6f7fb;
  height: 100%;
}
</style>
