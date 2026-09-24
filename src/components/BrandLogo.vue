<template>
  <svg
    class="brand-logo"
    :width="size"
    :height="size"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M17 22 L32 46 L47 22"
      stroke="#F2A007"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup>
defineProps({
  size: { type: Number, default: 40 },
  strokeWidth: { type: Number, default: 6 },
})
</script>

<style scoped>
.brand-logo {
  flex-shrink: 0;
  display: block;
}
</style>
