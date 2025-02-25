<template>
  <nav class="border-b">
    <Container class="flex justify-between h-12 items-center gap-8  ">
      <NuxtLink v-for="category in categories" :key="category.name" :to="category.href"
        class="text-sm font-medium text-muted-foreground text-gray-main  transition-colors hover:text-text-blue-1">
        {{ category.name }}
      </NuxtLink>
    </Container>
  </nav>
</template>

<script setup lang="ts">
import Container from '~/components/Container.vue';

const categories = [
  { name: "Распродажа", href: "#" },
  { name: "Вода и напитки", href: "#" },
  { name: "Сладкое", href: "#" },
  { name: "Бакалея", href: "#" },
  { name: "Для детей", href: "#" },
  { name: "Для дома", href: "#" },
]
</script>