<template>
  <v-footer color="primary" class="footer text-white pa-0">
    <v-container class="py-12">
      <v-row>
        <v-col cols="12" md="4">
          <div class="d-flex align-center mb-4">
            <BrandLogo :size="44" />
            <div class="ml-3">
              <strong>{{ instituicao.nome }}</strong>
              <div class="text-caption footer__muted">
                {{ instituicao.sigla }} · desde {{ instituicao.fundacao }}
              </div>
            </div>
          </div>
          <p class="footer__muted pr-md-8">{{ instituicao.descricao }}</p>
          <div class="d-flex ga-2 mt-4">
            <v-btn
              v-for="rede in redesSociais"
              :key="rede.icone"
              :icon="rede.icone"
              size="small"
              variant="tonal"
              color="secondary"
              :href="rede.url"
              target="_blank"
              rel="noopener"
            />
          </div>
        </v-col>

        <v-col cols="6" md="2">
          <h4 class="footer__title">Navegue</h4>
          <ul class="footer__list">
            <template v-for="item in navegacao" :key="item.url || item.rota">
              <li v-if="item.externo">
                <a :href="item.url" target="_blank" rel="noopener">{{ item.titulo }}</a>
              </li>
              <li v-else>
                <router-link :to="item.rota">{{ item.titulo }}</router-link>
              </li>
            </template>
          </ul>
        </v-col>

        <v-col cols="6" md="3">
          <h4 class="footer__title">Institucional</h4>
          <ul class="footer__list">
            <li>
              <a :href="cursosLink.url" target="_blank" rel="noopener"
                >Consultar cursos e valores</a
              >
            </li>
            <li><router-link to="/campus">Campus</router-link></li>
            <li><router-link to="/redes-sociais">Redes sociais</router-link></li>
            <li><router-link to="/politica-privacidade">Política de Privacidade</router-link></li>
          </ul>
        </v-col>

        <v-col cols="12" md="3">
          <h4 class="footer__title">Atendimento</h4>
          <ul class="footer__list footer__list--plain">
            <li><v-icon icon="mdi-phone-outline" size="16" /> {{ contato.telefone }}</li>
            <li><v-icon icon="mdi-clock-outline" size="16" /> {{ contato.central }}</li>
            <li>
              <v-icon icon="mdi-open-in-new" size="16" />
              <a :href="cursosLink.url" target="_blank" rel="noopener"
                >Cursos e valores no portal externo</a
              >
            </li>
          </ul>
        </v-col>
      </v-row>

      <v-divider class="my-8" color="rgba(255,255,255,0.12)" />

      <div class="empresa-info mb-4">
        <p class="empresa-info__title mb-1">{{ empresa.razaoSocial }}</p>
        <p class="text-caption footer__muted mb-1">
          CNPJ {{ empresa.cnpj }} · Fundada em {{ empresa.fundacao }} · Sede em {{ empresa.sede }}
        </p>
        <p class="text-caption footer__muted mb-0">{{ empresa.endereco }}</p>
      </div>

      <div class="lgpd-info mb-6">
        <v-icon
          icon="mdi-shield-lock-outline"
          color="secondary"
          size="18"
          class="lgpd-info__icon"
        />
        <div class="lgpd-info__text">
          <p class="text-caption footer__muted mb-2">{{ lgpd.aviso }}</p>
          <div class="d-flex flex-wrap ga-2">
            <v-btn
              size="small"
              variant="tonal"
              color="secondary"
              to="/politica-privacidade"
              prepend-icon="mdi-file-document-outline"
            >
              Política de Privacidade
            </v-btn>
            <v-btn
              size="small"
              variant="text"
              color="white"
              prepend-icon="mdi-cookie-outline"
              @click="reabrir"
            >
              Gerenciar cookies
            </v-btn>
          </div>
        </div>
      </div>

      <div class="d-flex flex-column flex-sm-row align-sm-center justify-space-between ga-2">
        <span class="text-caption footer__muted">
          © {{ ano }} {{ instituicao.nome }} — Todos os direitos reservados.
        </span>
        <span class="text-caption footer__credito">
          Desenvolvido <strong>{{ empresa.desenvolvedor }}</strong>
        </span>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup>
import { useCookieConsent } from '@/composables/useCookieConsent'
import BrandLogo from '@/components/BrandLogo.vue'
import {
  contato,
  cursosLink,
  empresa,
  instituicao,
  lgpd,
  navegacao,
  redesSociais,
} from '@/data/site'

const ano = new Date().getFullYear()
const { reabrir } = useCookieConsent()
</script>

<style scoped>
.footer__muted {
  color: rgba(255, 255, 255, 0.68);
  font-size: 0.85rem;
  line-height: 1.6;
}

.footer__title {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #f2a007;
  margin-bottom: 14px;
}

.footer__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
  font-size: 0.9rem;
}

.footer__list a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer__list a:hover {
  color: #fff;
}

/* E-mail e horário são tokens longos que não quebram sozinhos: sem isso a última
   coluna estoura a própria largura e cria scroll horizontal entre 960px e 1280px. */
.footer__list--plain li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  min-width: 0;
  color: rgba(255, 255, 255, 0.8);
  overflow-wrap: anywhere;
  word-break: break-word;
}

.footer__list--plain li :deep(.v-icon) {
  flex-shrink: 0;
  margin-top: 2px;
}

.empresa-info {
  padding: 16px 20px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.empresa-info__title {
  font-size: 0.86rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.02em;
}

.footer__credito {
  color: rgba(255, 255, 255, 0.68);
  font-size: 0.85rem;
  letter-spacing: 0.02em;
}

.footer__credito strong {
  color: #f2a007;
  letter-spacing: 0.12em;
}

.lgpd-info {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
}

.lgpd-info__icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.lgpd-info__text {
  line-height: 1.65;
  flex-grow: 1;
}
</style>
