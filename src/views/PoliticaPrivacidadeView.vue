<template>
  <div>
    <PageHero
      eyebrow="LGPD"
      :titulo="politica.titulo"
      :subtitulo="`Transparência sobre como tratamos os seus dados pessoais, conforme a ${lgpd.lei}.`"
      :itens="[
        { title: 'Início', to: '/' },
        { title: 'Política de Privacidade', disabled: true },
      ]"
    >
      <v-chip class="mt-6" color="secondary" variant="tonal" prepend-icon="mdi-update">
        Última atualização: {{ politica.atualizadoEm }}
      </v-chip>
    </PageHero>

    <section class="page">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" lg="9">
            <v-alert
              class="mb-6"
              type="info"
              variant="tonal"
              border="start"
              icon="mdi-shield-lock-outline"
              :text="lgpd.aviso"
            />

            <v-card class="soft-card" variant="flat">
              <v-card-text class="pa-6 pa-md-10">
                <p class="prose politicia__intro">{{ politica.introducao }}</p>

                <div v-for="secao in politica.secoes" :key="secao.titulo" class="politica__secao">
                  <h2 class="text-h6 font-weight-bold mb-3">{{ secao.titulo }}</h2>
                  <p v-for="(paragrafo, index) in secao.paragrafos" :key="index" class="prose">
                    {{ paragrafo }}
                  </p>
                </div>

                <v-divider class="my-8" />

                <v-card class="dpo-card" variant="flat">
                  <v-card-text class="pa-6 d-flex flex-column flex-sm-row align-sm-center ga-4">
                    <v-avatar color="primary" variant="tonal" size="52">
                      <v-icon icon="mdi-account-lock-outline" size="26" />
                    </v-avatar>
                    <div class="flex-grow-1">
                      <div class="font-weight-bold">{{ lgpd.encarregado }}</div>
                      <div class="text-body-2 text-medium-emphasis">
                        Fale com o nosso encarregado de dados: <strong>{{ lgpd.emailDpo }}</strong>
                      </div>
                    </div>
                    <v-btn
                      :href="`mailto:${lgpd.emailDpo}`"
                      color="primary"
                      variant="tonal"
                      prepend-icon="mdi-email-outline"
                    >
                      Enviar e-mail
                    </v-btn>
                  </v-card-text>
                </v-card>

                <div class="d-flex flex-wrap ga-3 mt-8">
                  <v-btn
                    variant="tonal"
                    color="primary"
                    to="/contato"
                    prepend-icon="mdi-message-text-outline"
                  >
                    Falar com a central
                  </v-btn>
                  <v-btn
                    variant="text"
                    color="primary"
                    @click="voltar"
                    prepend-icon="mdi-arrow-left"
                  >
                    Voltar
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import PageHero from '@/components/PageHero.vue'
import { lgpd, politicaPrivacidade as politica } from '@/data/site'

const router = useRouter()

function voltar() {
  if (window.history.length > 1) router.back()
  else router.push('/')
}
</script>

<style scoped>
.politica__intro {
  font-size: 1.05rem;
  color: #0b2a5b;
  font-weight: 500;
}

.politica__secao {
  padding-top: 26px;
}

.politica__secao + .politica__secao {
  border-top: 1px solid rgba(11, 42, 91, 0.07);
  margin-top: 26px;
}

.dpo-card {
  border: 1px solid rgba(11, 42, 91, 0.1);
  border-radius: 16px;
  background: #f6f7fb;
}
</style>
