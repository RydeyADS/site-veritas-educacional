<template>
  <section class="page-hero hero-surface">
    <v-container class="py-12 py-md-16">
      <v-breadcrumbs
        v-if="itens.length"
        :items="itens"
        class="px-0 pb-4 breadcrumbs"
        density="comfortable"
      >
        <template #divider>
          <v-icon icon="mdi-chevron-right" size="18" />
        </template>
      </v-breadcrumbs>

      <p v-if="eyebrow" class="eyebrow text-secondary mb-2">{{ eyebrow }}</p>
      <h1 class="page-hero__title">{{ titulo }}</h1>
      <p v-if="subtitulo" class="page-hero__subtitle">{{ subtitulo }}</p>
      <slot />
    </v-container>
  </section>
</template>

<script setup>
defineProps({
  titulo: { type: String, required: true },
  subtitulo: { type: String, default: '' },
  eyebrow: { type: String, default: '' },
  itens: { type: Array, default: () => [] },
})
</script>

<style scoped>
.page-hero__title {
  font-size: clamp(2rem, 1.4rem + 2.6vw, 3.2rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.08;
  max-width: 22ch;
}

.page-hero__subtitle {
  margin-top: 16px;
  max-width: 62ch;
  color: rgba(255, 255, 255, 0.78);
  font-size: 1.05rem;
  line-height: 1.7;
}

.breadcrumbs :deep(a),
.breadcrumbs :deep(.v-breadcrumbs-item--disabled) {
  color: rgba(255, 255, 255, 0.72) !important;
  opacity: 1;
}

.breadcrumbs :deep(.v-breadcrumbs-item:last-child) {
  color: #f2a007 !important;
  font-weight: 600;
}
</style>
