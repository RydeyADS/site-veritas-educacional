<template>
  <div>
    <PageHero
      eyebrow="Sobre nós"
      :titulo="`${instituicao.nome}: ensino com prática e propósito`"
      :subtitulo="instituicao.descricao"
      :itens="[{ title: 'Início', to: '/' }, { title: 'Sobre nós', disabled: true }]"
    />

    <section class="page">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-card class="soft-card h-100" variant="flat">
              <v-card-text class="pa-6">
                <v-icon icon="mdi-target" color="primary" size="30" class="mb-3" />
                <h2 class="text-subtitle-1 font-weight-bold mb-2">Missão</h2>
                <p class="text-body-2 text-medium-emphasis mb-0">{{ instituicao.missao }}</p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card class="soft-card h-100" variant="flat">
              <v-card-text class="pa-6">
                <v-icon icon="mdi-eye-outline" color="primary" size="30" class="mb-3" />
                <h2 class="text-subtitle-1 font-weight-bold mb-2">Visão</h2>
                <p class="text-body-2 text-medium-emphasis mb-0">{{ instituicao.visao }}</p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card class="soft-card h-100" variant="flat">
              <v-card-text class="pa-6">
                <v-icon icon="mdi-handshake-outline" color="primary" size="30" class="mb-3" />
                <h2 class="text-subtitle-1 font-weight-bold mb-2">Valores</h2>
                <div class="d-flex flex-wrap ga-2 mt-3">
                  <v-chip v-for="valor in instituicao.valores" :key="valor" size="small" color="secondary" variant="tonal">
                    {{ valor }}
                  </v-chip>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- DADOS DA EMPRESA -->
    <section class="py-8 py-md-12 bg-white">
      <v-container>
        <div class="text-center mb-10">
          <p class="eyebrow text-secondary mb-2">Dados oficiais</p>
          <h2 class="section-title">Informações da empresa</h2>
        </div>

        <v-card class="soft-card company-card" variant="flat">
          <v-card-text class="pa-6 pa-md-10">
            <v-row>
              <v-col cols="12" md="7">
                <div class="company-row">
                  <v-icon icon="mdi-storefront-outline" color="primary" size="22" />
                  <div>
                    <div class="company-row__label">Nome fantasia</div>
                    <div class="company-row__value">{{ empresa.nomeFantasia }}</div>
                  </div>
                </div>
                <div class="company-row">
                  <v-icon icon="mdi-domain" color="primary" size="22" />
                  <div>
                    <div class="company-row__label">Razão social</div>
                    <div class="company-row__value">{{ empresa.razaoSocial }}</div>
                  </div>
                </div>
                <div class="company-row">
                  <v-icon icon="mdi-card-account-details-outline" color="primary" size="22" />
                  <div>
                    <div class="company-row__label">CNPJ</div>
                    <div class="company-row__value">{{ empresa.cnpj }}</div>
                  </div>
                </div>
                <div class="company-row">
                  <v-icon icon="mdi-map-marker-outline" color="primary" size="22" />
                  <div>
                    <div class="company-row__label">Endereço da sede</div>
                    <div class="company-row__value">{{ empresa.endereco }}</div>
                  </div>
                </div>
                <div class="company-row">
                  <v-icon icon="mdi-calendar-star" color="primary" size="22" />
                  <div>
                    <div class="company-row__label">Data de fundação</div>
                    <div class="company-row__value">{{ empresa.fundacao }}</div>
                  </div>
                </div>
              </v-col>

              <v-col cols="12" md="5">
                <h3 class="text-subtitle-1 font-weight-bold mb-4">Fundadores</h3>
                <v-card
                  v-for="fundador in empresa.fundadores"
                  :key="fundador.nome"
                  class="soft-card founder-card mb-3"
                  variant="flat"
                >
                  <v-card-text class="d-flex align-center ga-4 pa-5">
                    <v-avatar color="primary" size="52">{{ iniciais(fundador.nome) }}</v-avatar>
                    <div>
                      <div class="font-weight-bold">{{ fundador.nome }}</div>
                      <div class="text-caption text-medium-emphasis">{{ fundador.cargo }}</div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-container>
    </section>

    <section class="page">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6">
            <p class="eyebrow text-secondary mb-2">Nossa trajetória</p>
            <h2 class="section-title mb-4">Uma instituição jovem, com ambição grande</h2>
            <p class="prose">
              A {{ instituicao.nome }} foi constituída em {{ empresa.fundacao }}, em Fortaleza (CE), pelos fundadores
              {{ empresa.fundadores.map((f) => f.nome).join(' e ') }}.
            </p>
            <p class="prose">
              O nosso jeito de ensinar nasceu de uma constatação simples: aprender de verdade exige prática. Por isso,
              organizamos a instituição em frentes de conhecimento, cada uma com laboratórios, parcerias e projetos que
              colocam o estudante diante de problemas reais desde o início do curso.
            </p>
          </v-col>
          <v-col cols="12" md="6">
            <v-timeline side="end" density="compact">
              <v-timeline-item v-for="marco in linhaDoTempo" :key="marco.ano" color="primary" size="small">
                <div class="text-caption font-weight-bold text-secondary">{{ marco.ano }}</div>
                <div class="font-weight-medium">{{ marco.titulo }}</div>
                <div class="text-body-2 text-medium-emphasis">{{ marco.texto }}</div>
              </v-timeline-item>
            </v-timeline>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="py-8 py-md-12 bg-white">
      <v-container>
        <div class="text-center mb-10">
          <p class="eyebrow text-secondary mb-2">O que nos move</p>
          <h2 class="section-title">Compromissos com o estudante</h2>
        </div>
        <v-row>
          <v-col v-for="item in diferenciais" :key="item.titulo" cols="12" md="6" lg="3">
            <v-card class="soft-card h-100" variant="flat">
              <v-card-text class="pa-6">
                <v-icon :icon="item.icone" color="secondary" size="30" class="mb-3" />
                <h3 class="text-subtitle-1 font-weight-bold mb-2">{{ item.titulo }}</h3>
                <p class="text-body-2 text-medium-emphasis mb-0">{{ item.texto }}</p>
              </v-card-text>
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
import PageHero from '@/components/PageHero.vue'
import { diferenciais, empresa, instituicao } from '@/data/site'

function iniciais(nome) {
  return nome
    .split(' ')
    .filter((parte) => parte.length > 2)
    .slice(0, 2)
    .map((parte) => parte[0])
    .join('')
    .toUpperCase()
}

const linhaDoTempo = [
  { ano: '2025', titulo: 'Fundação', texto: `Constituição da ${empresa.razaoSocial}, em Fortaleza (CE), em ${empresa.fundacao}.` },
  { ano: '2025', titulo: 'Estruturação', texto: 'Definição das cinco frentes de conhecimento e dos primeiros cursos.' },
  { ano: '2026', titulo: 'Operação', texto: 'Início das turmas, parcerias com empresas e projetos de extensão.' }
]
</script>

<style scoped>
.company-card {
  border-top: 5px solid rgb(var(--v-theme-secondary));
}

.company-row {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 14px 0;
}

.company-row + .company-row {
  border-top: 1px solid rgba(11, 42, 91, 0.07);
}

.company-row__label {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #90a4ae;
}

.company-row__value {
  font-size: 1.02rem;
  font-weight: 600;
  color: #0b2a5b;
}

.founder-card {
  border: 1px solid rgba(11, 42, 91, 0.08);
}
</style>
