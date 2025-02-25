<template>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </template>
  
  <script setup lang="ts">
  import ProductCard from '@/components/Card/ProductCard.vue'
  import type { IProduct } from '@/types'
  
  const props = defineProps<{
    products: IProduct[]
  }>()
  
  const { products } = props
  </script>
  