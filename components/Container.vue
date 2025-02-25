<script lang="ts" setup>
import { defineProps } from "vue";
import { twMerge } from "tailwind-merge";

// Propsni aniqlash
defineProps<{
  className?: string;
}>();

// twMerge yordamida klasslarni birlashtirish
const mergedClassName = (className?: string) =>
  twMerge("w-full max-w-screen-xl mx-auto px-10", className);
</script>

<template>
  <div :class="mergedClassName(className)">
    <slot />
  </div>
</template>