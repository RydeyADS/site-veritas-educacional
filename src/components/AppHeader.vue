<template>
  <v-app-bar color="primary" flat height="72" class="app-bar">
    <v-container fluid class="navbar">
      <router-link to="/" class="brand" @click="drawer = false">
        <span class="brand__mark">
          <v-icon icon="mdi-school" size="26" />
        </span>
        <span class="brand__text">
          <strong>{{ instituicao.nomeCurto }}</strong>
          <small>educacional</small>
        </span>
      </router-link>

      <nav class="navbar__nav d-none d-lg-flex align-center" aria-label="Navegação principal">
        <router-link
          v-for="item in navegacao"
          :key="item.rota"
          :to="item.rota"
          class="nav-link"
          active-class="nav-link--active"
        >
          {{ item.titulo }}
        </router-link>
      </nav>

      <v-btn
        class="navbar__cta d-none d-lg-inline-flex"
        color="secondary"
        variant="flat"
        to="/cursos"
        prepend-icon="mdi-arrow-right-circle-outline"
      >
        Quero estudar aqui
      </v-btn>

      <v-app-bar-nav-icon
        class="navbar__hamburguer d-lg-none"
        aria-label="Abrir menu de navegação"
        @click="drawer = true"
      />
    </v-container>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    class="header-drawer"
    temporary
    location="right"
    color="primary"
    width="300"
  >
    <div class="drawer__topo">
      <span class="brand__mark">
        <v-icon icon="mdi-school" size="24" />
      </span>
      <div class="brand__text">
        <strong>{{ instituicao.nomeCurto }}</strong>
        <small>educacional</small>
      </div>
      <v-btn
        class="drawer__fechar"
        icon="mdi-close"
        variant="text"
        color="white"
        size="small"
        aria-label="Fechar menu"
        @click="drawer = false"
      />
    </div>

    <v-divider class="drawer__divisor" />

    <v-list nav class="py-2" aria-label="Navegação principal">
      <v-list-item
        v-for="item in navegacao"
        :key="item.rota"
        :to="item.rota"
        :prepend-icon="item.icone"
        :title="item.titulo"
        rounded="lg"
        class="drawer__item"
        @click="drawer = false"
      />
    </v-list>

    <div class="px-4 pb-6 pt-2">
      <v-btn block color="secondary" to="/contato" @click="drawer = false">Fale com a gente</v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'
import { instituicao, navegacao } from '@/data/site'

const drawer = ref(false)
</script>

<style scoped>
.app-bar {
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

/* Barra em três colunas: marca à esquerda, navegação centralizada e ação à direita. */
.navbar {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar__nav {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.navbar__cta {
  margin-inline-start: auto;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: #fff;
}

.brand__mark {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: rgba(242, 160, 7, 0.18);
  color: #f2a007;
  flex-shrink: 0;
}

.brand__text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.brand__text strong {
  font-size: 1.05rem;
  letter-spacing: -0.01em;
}

.brand__text small {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  opacity: 0.7;
}

.nav-link {
  position: relative;
  margin-inline: 3px;
  padding: 8px 12px;
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.82);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  transition: background 0.2s ease, color 0.2s ease;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
}

.nav-link--active {
  background: rgba(242, 160, 7, 0.16);
  color: #fff;
}

.nav-link--active::after {
  content: '';
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 2px;
  height: 2px;
  border-radius: 2px;
  background: #f2a007;
}

/* Gesto lateral pede um drawer compacto e com conteúdo alinhado à direita. */
.navbar__hamburguer {
  margin-inline-start: auto;
}

/* O Vuetify encosta o drawer abaixo da app bar (top: 72px / height: calc(100% - 72px)).
   Como um menu lateral de app, ele deve cobrir a tela inteira, então sobrescrevemos
   os estilos inline aplicados pelo layout. */
.header-drawer {
  top: 0 !important;
  height: 100% !important;
  bottom: 0 !important;
}

.drawer__topo {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px 16px 16px;
  color: #fff;
}

.drawer__fechar {
  margin-inline-start: auto;
}

.drawer__divisor {
  border-color: rgba(255, 255, 255, 0.12);
}

.drawer__item {
  color: rgba(255, 255, 255, 0.86);
}

.drawer__item :deep(.v-list-item-title) {
  font-weight: 500;
}

.drawer__item:deep(.v-list-item--active) {
  color: #fff;
  background: rgba(242, 160, 7, 0.16);
}

.drawer__item:deep(.v-list-item--active .v-list-item__prepend .v-icon) {
  color: #f2a007;
}
</style>
