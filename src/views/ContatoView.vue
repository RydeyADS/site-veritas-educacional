<template>
  <div>
    <PageHero
      eyebrow="Fale com a gente"
      titulo="Vamos conversar sobre o seu futuro"
      subtitulo="Tire dúvidas sobre cursos, bolsas, transferência e processos seletivos. Nossa equipe responde em até um dia útil."
      :itens="[
        { title: 'Início', to: '/' },
        { title: 'Contato', disabled: true },
      ]"
    />

    <section class="page">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="6">
            <v-card class="soft-card" variant="flat">
              <v-card-text class="pa-6">
                <h2 class="text-subtitle-1 font-weight-bold mb-1">Canais de atendimento</h2>
                <p class="text-body-2 text-medium-emphasis mb-4">
                  Toque em um canal para falar com a gente agora mesmo.
                </p>
                <a
                  v-for="canal in canais"
                  :key="canal.rotulo"
                  class="canal"
                  :href="canal.href"
                  :target="canal.externo ? '_blank' : undefined"
                  :rel="canal.externo ? 'noopener noreferrer' : undefined"
                >
                  <v-avatar color="primary" variant="tonal" size="42">
                    <v-icon :icon="canal.icone" size="22" />
                  </v-avatar>
                  <div class="canal-texto">
                    <div class="text-caption text-medium-emphasis">{{ canal.rotulo }}</div>
                    <div class="font-weight-medium">{{ canal.valor }}</div>
                  </div>
                  <v-icon icon="mdi-arrow-top-right" size="18" class="canal-seta" />
                </a>
              </v-card-text>
            </v-card>

            <v-card class="soft-card mt-6" variant="flat">
              <v-card-text class="pa-6">
                <h2 class="text-subtitle-1 font-weight-bold mb-4">Datas e processos</h2>
                <div v-for="item in datasImportantes" :key="item.titulo" class="data-item">
                  <div class="font-weight-medium">{{ item.titulo }}</div>
                  <div class="text-body-2 text-medium-emphasis">{{ item.periodo }}</div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <v-card class="soft-card h-100" variant="flat">
              <v-card-text class="pa-6">
                <h2 class="text-subtitle-1 font-weight-bold mb-3">Perguntas frequentes</h2>
                <v-expansion-panels variant="accordion">
                  <v-expansion-panel v-for="faq in faqs" :key="faq.pergunta" :title="faq.pergunta">
                    <v-expansion-panel-text>{{ faq.resposta }}</v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import PageHero from '@/components/PageHero.vue'
import { contato, cursosLink, datasImportantes } from '@/data/site'

const canais = [
  {
    rotulo: 'Telefone',
    valor: contato.telefone,
    icone: 'mdi-phone-outline',
    href: contato.telefoneLink,
    externo: false,
  },
  {
    rotulo: 'Onde estamos',
    valor: contato.enderecoReitoria,
    icone: 'mdi-map-marker-outline',
    href: contato.mapaLink,
    externo: true,
  },
  {
    rotulo: 'Cursos e valores',
    valor: 'Consulte no portal oficial',
    icone: 'mdi-open-in-new',
    href: cursosLink.url,
    externo: true,
  },
]

const faqs = [
  {
    pergunta: 'Como funciona o ingresso?',
    resposta:
      'Há inscrições abertas o ano todo, com ingresso imediato. Basta enviar seus dados e um consultor orienta a matrícula.',
  },
  {
    pergunta: 'Existem bolsas e descontos?',
    resposta:
      'Sim. A instituição oferece bolsas por desempenho, descontos para transferência e condições especiais para quem já é aluno.',
  },
  {
    pergunta: 'Posso aproveitar disciplinas de outro curso?',
    resposta:
      'Análises de aproveitamento e transferência são feitas em até 5 dias úteis a partir do histórico enviado.',
  },
  {
    pergunta: 'Os cursos são presenciais ou EAD?',
    resposta:
      'Existem as três modalidades: presencial, híbrida e EAD. A disponibilidade varia conforme o curso escolhido.',
  },
]
</script>

<style scoped>
.canal {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px 8px;
  margin: 0 -8px;
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;
}

.canal:hover {
  background-color: rgba(11, 42, 91, 0.06);
  transform: translateX(2px);
}

.canal + .canal {
  border-top: 1px solid rgba(11, 42, 91, 0.07);
}

.canal-texto {
  flex: 1 1 auto;
  min-width: 0;
}

.canal-seta {
  color: rgb(var(--v-theme-primary));
  opacity: 0;
  transition: opacity 0.2s ease;
}

.canal:hover .canal-seta {
  opacity: 1;
}

.data-item {
  padding: 10px 0;
}

.data-item + .data-item {
  border-top: 1px solid rgba(11, 42, 91, 0.07);
}
</style>
