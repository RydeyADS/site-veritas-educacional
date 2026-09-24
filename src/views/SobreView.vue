<template>
  <div>
    <PageHero
      eyebrow="Sobre nós"
      :titulo="`${instituicao.nome}: ensino com prática e propósito`"
      :subtitulo="instituicao.descricao"
      :itens="[
        { title: 'Início', to: '/' },
        { title: 'Sobre nós', disabled: true },
      ]"
    />

    <!-- NOVO: Como atuamos (gestão do polo Estácio) -->
    <ModeloAtuacao />

    <section class="page">
      <v-container>
        <div class="text-center mb-10">
          <p class="eyebrow text-secondary mb-2">Nossa essência</p>
          <h2 class="section-title">Missão, visão e valores</h2>
        </div>
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
                  <v-chip
                    v-for="valor in instituicao.valores"
                    :key="valor"
                    size="small"
                    color="secondary"
                    variant="tonal"
                  >
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

        <v-card class="soft-card" variant="flat">
          <v-card-text class="pa-6 pa-md-10">
            <v-row>
              <v-col cols="12" md="7">
                <div v-for="item in dadosEmpresa" :key="item.rotulo" class="company-item">
                  <v-avatar color="primary" variant="tonal" size="42">
                    <v-icon :icon="item.icone" size="22" />
                  </v-avatar>
                  <div class="company-item__texto">
                    <div class="text-caption text-medium-emphasis">{{ item.rotulo }}</div>
                    <a v-if="item.link" class="company-item__link" :href="item.link">{{ item.valor }}</a>
                    <div v-else class="company-item__valor">{{ item.valor }}</div>
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
              A {{ instituicao.nome }} foi constituída em {{ empresa.fundacao }}, em Ipu (CE), pelos
              fundadores {{ empresa.fundadores.map((f) => f.nome).join(' e ') }}.
            </p>
            <p class="prose">
              O nosso jeito de ensinar nasceu de uma constatação simples: aprender de verdade exige
              prática. Ao assumir a operação do polo Estácio, unimos a qualidade acadêmica da
              faculdade à força de uma gestão local próxima, com laboratórios, parcerias e projetos
              que colocam o estudante diante de problemas reais desde o início do curso.
            </p>
          </v-col>
          <v-col cols="12" md="6">
            <v-timeline side="end" density="compact">
              <v-timeline-item
                v-for="marco in linhaDoTempo"
                :key="marco.titulo"
                color="primary"
                size="small"
              >
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
import ModeloAtuacao from '@/components/ModeloAtuacao.vue'
import { contato, diferenciais, empresa, instituicao } from '@/data/site'

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
  {
    ano: '2025',
    titulo: 'Fundação',
    texto: `Constituição da ${empresa.razaoSocial}, em Ipu (CE), em ${empresa.fundacao}.`,
  },
  {
    ano: '2025',
    titulo: 'Estruturação',
    texto: 'Definição das áreas de conhecimento e dos primeiros cursos.',
  },
  {
    ano: '2025',
    titulo: 'Aquisição',
    texto: 'Compra da operação do polo Estácio, com transição da estrutura, equipe e atendimento.',
  },
  {
    ano: '2026',
    titulo: 'Operação',
    texto: 'Início das turmas, parcerias com empresas e projetos de extensão.',
  },
]

const dadosEmpresa = [
  { icone: 'mdi-storefront-outline', rotulo: 'Nome fantasia', valor: empresa.nomeFantasia },
  { icone: 'mdi-domain', rotulo: 'Razão social', valor: empresa.razaoSocial },
  { icone: 'mdi-card-account-details-outline', rotulo: 'CNPJ', valor: empresa.cnpj },
  { icone: 'mdi-map-marker-outline', rotulo: 'Endereço da sede', valor: empresa.endereco },
  { icone: 'mdi-calendar-star', rotulo: 'Data de fundação', valor: empresa.fundacao },
  { icone: 'mdi-handshake-outline', rotulo: 'Modelo de atuação', valor: empresa.modeloAtuacao },
  { icone: 'mdi-phone-outline', rotulo: 'Telefone', valor: contato.telefone, link: contato.telefoneLink },
  { icone: 'mdi-email-outline', rotulo: 'E-mail', valor: contato.email, link: contato.emailLink },
]
</script>

<style scoped>
.company-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px 8px;
  margin: 0 -8px;
  border-radius: 12px;
}

.company-item + .company-item {
  border-top: 1px solid rgba(11, 42, 91, 0.07);
}

.company-item__texto {
  flex: 1 1 auto;
  min-width: 0;
}

.company-item__valor {
  font-weight: 500;
  color: #0b2a5b;
}

.company-item__link {
  font-weight: 500;
  color: #0b2a5b;
  text-decoration: none;
  transition: color 0.2s ease;
}

.company-item__link:hover {
  color: rgb(var(--v-theme-secondary));
  text-decoration: underline;
}

.founder-card {
  border: 1px solid rgba(11, 42, 91, 0.08);
}
</style>
