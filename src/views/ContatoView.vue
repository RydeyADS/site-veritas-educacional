<template>
  <div>
    <PageHero
      eyebrow="Fale com a gente"
      titulo="Vamos conversar sobre o seu futuro"
      subtitulo="Tire dúvidas sobre cursos, bolsas, transferência e processos seletivos. Nossa equipe responde em até um dia útil."
      :itens="[{ title: 'Início', to: '/' }, { title: 'Contato', disabled: true }]"
    />

    <section class="page">
      <v-container>
        <v-row>
          <v-col cols="12" lg="7">
            <v-card class="soft-card" variant="flat">
              <v-card-text class="pa-6 pa-md-8">
                <h2 class="text-h5 font-weight-bold mb-1">Envie sua mensagem</h2>
                <p class="text-body-2 text-medium-emphasis mb-6">
                  Preencha o formulário e receba o retorno de um consultor educacional. Ao enviar, abrimos
                  o WhatsApp com a sua mensagem já preenchida.
                </p>

                <v-alert
                  v-if="sucesso"
                  type="success"
                  variant="tonal"
                  density="comfortable"
                  class="mb-6"
                  closable
                  @click:close="sucesso = false"
                >
                  Estamos te levando para o WhatsApp! Conclua o envio por lá para falar com um consultor.
                </v-alert>

                <v-form v-model="valido" @submit.prevent="enviar">
                  <v-row dense>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="form.nome"
                        label="Nome completo"
                        variant="outlined"
                        :rules="[regras.obrigatorio]"
                      />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="form.email"
                        label="E-mail"
                        type="email"
                        variant="outlined"
                        :rules="[regras.obrigatorio, regras.email]"
                      />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="form.telefone"
                        label="Telefone / WhatsApp"
                        variant="outlined"
                        :rules="[regras.obrigatorio]"
                      />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-select
                        v-model="form.curso"
                        :items="opcoesCurso"
                        label="Curso de interesse"
                        variant="outlined"
                        :rules="[regras.obrigatorio]"
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-select
                        v-model="form.assunto"
                        :items="assuntos"
                        label="Assunto"
                        variant="outlined"
                        :rules="[regras.obrigatorio]"
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        v-model="form.mensagem"
                        label="Como podemos ajudar?"
                        variant="outlined"
                        rows="4"
                        :rules="[regras.obrigatorio]"
                      />
                    </v-col>
                  </v-row>

                  <v-checkbox
                    v-model="form.aceite"
                    :rules="[regras.aceite]"
                    color="primary"
                    density="comfortable"
                  >
                    <template #label>
                      <span class="text-body-2">
                        Autorizo o contato e concordo com o uso dos meus dados conforme a LGPD.
                      </span>
                    </template>
                  </v-checkbox>

                  <v-btn
                    type="submit"
                    color="secondary"
                    size="large"
                    class="mt-2"
                    :loading="enviando"
                    prepend-icon="mdi-whatsapp"
                  >
                    Enviar pelo WhatsApp
                  </v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" lg="5">
            <v-card class="soft-card mb-6" variant="flat">
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

            <v-card class="soft-card mb-6" variant="flat">
              <v-card-text class="pa-6">
                <h2 class="text-subtitle-1 font-weight-bold mb-4">Datas e processos</h2>
                <div v-for="item in datasImportantes" :key="item.titulo" class="data-item">
                  <div class="font-weight-medium">{{ item.titulo }}</div>
                  <div class="text-body-2 text-medium-emphasis">{{ item.periodo }}</div>
                </div>
              </v-card-text>
            </v-card>

            <v-card class="soft-card" variant="flat">
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
import { reactive, ref } from 'vue'
import PageHero from '@/components/PageHero.vue'
import { todosOsCursos } from '@/data/frentes'
import { contato, datasImportantes } from '@/data/site'

const valido = ref(false)
const enviando = ref(false)
const sucesso = ref(false)

const form = reactive({
  nome: '',
  email: '',
  telefone: '',
  curso: null,
  assunto: null,
  mensagem: '',
  aceite: false
})

const opcoesCurso = todosOsCursos.map((c) => c.nome)
const assuntos = [
  'Informações sobre cursos',
  'Bolsas e descontos',
  'Transferência e segunda graduação',
  'Visita ao campus',
  'Outro assunto'
]

const regras = {
  obrigatorio: (v) => Boolean(v) || 'Campo obrigatório',
  email: (v) => /.+@.+\..+/.test(v || '') || 'Informe um e-mail válido',
  aceite: (v) => v === true || 'É necessário autorizar o contato'
}

const canais = [
  {
    rotulo: 'Telefone',
    valor: contato.telefone,
    icone: 'mdi-phone-outline',
    href: contato.telefoneLink,
    externo: false
  },
  {
    rotulo: 'WhatsApp',
    valor: contato.whatsapp,
    icone: 'mdi-whatsapp',
    href: contato.whatsappLink,
    externo: true
  },
  {
    rotulo: 'E-mail',
    valor: contato.email,
    icone: 'mdi-email-outline',
    href: contato.emailLink,
    externo: false
  },
  {
    rotulo: 'Onde estamos',
    valor: contato.enderecoReitoria,
    icone: 'mdi-map-marker-outline',
    href: contato.mapaLink,
    externo: true
  }
]

const faqs = [
  {
    pergunta: 'Como funciona o ingresso?',
    resposta: 'Há inscrições abertas o ano todo, com ingresso imediato. Basta enviar seus dados e um consultor orienta a matrícula.'
  },
  {
    pergunta: 'Existem bolsas e descontos?',
    resposta: 'Sim. A instituição oferece bolsas por desempenho, descontos para transferência e condições especiais para quem já é aluno.'
  },
  {
    pergunta: 'Posso aproveitar disciplinas de outro curso?',
    resposta: 'Análises de aproveitamento e transferência são feitas em até 5 dias úteis a partir do histórico enviado.'
  },
  {
    pergunta: 'Os cursos são presenciais ou EAD?',
    resposta: 'Existem as três modalidades: presencial, híbrida e EAD. A disponibilidade varia conforme o curso escolhido.'
  }
]

function montarMensagem() {
  const linhas = [
    'Olá! Enviei uma mensagem pelo site da Kairos.',
    '',
    `*Nome:* ${form.nome}`,
    `*E-mail:* ${form.email}`,
    `*Telefone/WhatsApp:* ${form.telefone}`,
    `*Curso de interesse:* ${form.curso}`,
    `*Assunto:* ${form.assunto}`,
    '',
    `*Mensagem:* ${form.mensagem}`
  ]
  return linhas.join('\n')
}

async function enviar() {
  if (!valido.value) return
  enviando.value = true

  const url = `${contato.whatsappLink}?text=${encodeURIComponent(montarMensagem())}`
  const janela = window.open(url, '_blank')
  // Se o navegador bloquear o pop-up, redireciona na mesma aba.
  if (!janela) window.location.href = url

  await new Promise((resolve) => setTimeout(resolve, 400))
  enviando.value = false
  sucesso.value = true
  Object.assign(form, { nome: '', email: '', telefone: '', curso: null, assunto: null, mensagem: '', aceite: false })
  valido.value = false
}
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
  transition: background-color 0.2s ease, transform 0.2s ease;
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
