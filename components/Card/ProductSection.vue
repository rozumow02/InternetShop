<template>
  <section class="space-y-6">
    <div class="flex items-center justify-between">
      <h2 class="text-2xl font-bold tracking-tight">{{ title }}</h2>
      <UButton :to="`/category${props.viewAllHref}`" variant="outline" color="black" size="md"
        v-if="props.viewAllHref">
        <template #trailing>
          <UIcon name="i-heroicons-chevron-right" class="w-4 h-4" />
        </template>
        Посмотреть все
      </UButton>
    </div>
    <ProductGrid :products="products" />
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { IProduct } from '@/types'
import ProductGrid from './ProductGrid.vue';
import Button from '../UI/Button.vue';

const props = defineProps<{
  title: string
  products: IProduct[]
  viewAllHref?: string
}>()

const { title, products, viewAllHref = "#" } = props
</script>