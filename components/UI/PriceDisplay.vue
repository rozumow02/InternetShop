<script setup lang="ts">
interface PriceDisplayProps {
  price: number
  originalPrice?: number
  currency?: string
}

const props = defineProps<PriceDisplayProps>()
</script>

<template>
  <div class="flex items-baseline gap-2 my-1">
    <span class="text-lg text-text-blue-1 font-semibold">
      {{ props.price.toFixed(2) }} {{ props.currency || "TMT" }}
    </span>
    <span
      v-if="props.originalPrice && props.originalPrice > props.price"
      class="text-sm text-muted-foreground line-through text-gray-main "
    >
      {{ props.originalPrice.toFixed(2) }} {{ props.currency || "TMT" }}
    </span>
  </div>
</template>
