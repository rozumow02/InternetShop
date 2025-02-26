<template>
  <nav class="border-b">
    <Container class="flex justify-between h-12 items-center gap-8  ">
      <NuxtLink v-for="category in categories" :key="category.name"
        :to="localPath({ name: 'category-categorySlug', params: { categorySlug: category.href } })"
        class="text-sm font-medium text-muted-foreground text-gray-main  transition-colors hover:text-text-blue-1">
        {{ category.name }}
      </NuxtLink>
    </Container>
  </nav>
</template>

<script setup lang="ts">
import Container from '~/components/Container.vue';
const localPath = useLocalePath()
const categories = [
  { name: "Распродажа", href: "rasprodazha" },
  { name: "Вода и напитки", href: "voda-i-napitki" },
  { name: "Сладкое", href: "sladkoe" },
  { name: "Бакалея", href: "bakaleya" },
  { name: "Для детей", href: "dlya-detej" },
  { name: "Для дома", href: "dlya-doma" },
];
</script>