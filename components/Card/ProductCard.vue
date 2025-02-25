<!-- ProductCard.vue -->
<script setup lang="ts">
import { Heart } from "lucide-vue-next"
import type { IProduct } from "@/types"
import Button from "../UI/Button.vue";
import PriceDisplay from "../UI/PriceDisplay.vue";
import imageUrl from "@/assets/images/image1.png"
interface ProductCardProps {
  product: IProduct
}

defineProps<ProductCardProps>()
const getRandomNumber = () => Math.floor(Math.random() * 4) + 1;

</script>

<template>
  <ClientOnly>

  <div class="group relative flex flex-col bg-white rounded-md">
    <div class="relative aspect-square overflow-hidden rounded-lg">
      <img :src="product.imageUrl" :alt="product.name"
        class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" />
      <Button variant="ghost" size="icon"
        class="absolute right-2 top-2 h-8 w-8 rounded-full bg-white/80 hover:bg-white/90">
        <Heart class="h-4 w-4" />
        <span class="sr-only">Add to favorites</span>
      </Button>
      <UBadge v-if="product.isNew" variant="solid" color="red" class="absolute left-2 top-2">
        Новый
      </UBadge>
    </div>
    <div class="mt-4 flex flex-col gap-1 p-3 pt-0">
      <h3 class="line-clamp-2 text-gray-main overflow-hidden h-12">{{ product.name }}</h3>
      <PriceDisplay :price="product.price" :originalPrice="product.originalPrice" currency="TMT" />
      <UButton color="white"  ripple icon="i-heroicons-shopping-cart" block :ui="{
        strategy: 'override',
        color: {
          white: {
            solid: 'bg-main-blue text-white'
          },
        }
      }" size="lg">
        В корзину
      </UButton>
    </div>

  </div>
</ClientOnly>

</template>
