<template>
  <v-card class="frente-card soft-card hover-lift h-100 d-flex flex-column" :id="frente.slug">
    <div class="frente-card__bar" />
    <v-card-text class="pa-6 flex-grow-1">
      <div class="d-flex align-center ga-3 mb-4">
        <v-avatar color="primary" size="48" variant="tonal">
          <v-icon :icon="frente.icone" size="26" />
        </v-avatar>
        <div>
          <p class="eyebrow text-primary">{{ frente.numero }}</p>
          <h3 class="text-h6 font-weight-bold">{{ frente.titulo }}</h3>
        </div>
      </div>

      <p class="text-body-2 text-medium-emphasis mb-5">{{ frente.descricao }}</p>

      <ul class="frente-card__list">
        <li v-for="curso in frente.cursos" :key="curso.slug">
          <router-link :to="`/cursos/${curso.slug}`">
            <v-icon icon="mdi-arrow-right" size="16" />
            {{ curso.nome }}
          </router-link>
        </li>
      </ul>
    </v-card-text>

    <v-card-actions class="px-6 pb-6">
      <v-btn color="primary" variant="tonal" block to="/cursos">Ver todos os cursos</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
defineProps({
  frente: { type: Object, required: true }
})
</script>

<style scoped>
.frente-card {
  overflow: hidden;
  border: 1px solid rgba(11, 42, 91, 0.08);
}

.frente-card__bar {
  height: 5px;
  width: 100%;
  background: linear-gradient(90deg, rgb(var(--v-theme-primary)), rgb(var(--v-theme-secondary)));
}

.frente-card__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
}

.frente-card__list a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.92rem;
  font-weight: 500;
  color: #37474f;
  text-decoration: none;
  transition: color 0.2s ease, gap 0.2s ease;
}

.frente-card__list a:hover {
  color: #0b2a5b;
  gap: 12px;
}
</style>
