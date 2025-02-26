<script setup lang="ts">
import { ref, computed } from 'vue'
import { Minus, Plus, ShoppingCart, Heart } from 'lucide-vue-next'
import InputNumber from '../UI/InputNumber.vue'
interface ProductCardProps {
    title: string
    code: string
    unit: string
    currentPrice: number
    originalPrice?: number
    isNew?: boolean
}

const props = defineProps<ProductCardProps>()
const emit = defineEmits(['addToCart', 'buyNow', 'wishlist'])

const quantity = ref(1)

const handleQuantityChange = (value: number) => {
    if (value >= 1) {
        quantity.value = value
    }
}
const test = ref(0)
const hasDiscount = computed(() => props.originalPrice && props.originalPrice > props.currentPrice)
</script>

<template>
    <div class="w-full bg-white p-4 rounded-lg  max-w-2xl">
        <UBadge v-if="isNew" color="red" variant="solid">Täze önüm</UBadge>
        <h2 class="text-2xl font-semibold my-6 leading-tight">{{ title }}</h2>

        <div class="my-6">
            <div class="grid grid-cols-2 gap-4 text-gray-500">
                <div>
                    <span class="block">Код</span>
                    <span class="text-gray-900">{{ code }}</span>
                </div>
                <div>
                    <span class="block">Единица измерения</span>
                    <span class="text-gray-900">{{ unit }}</span>
                </div>
            </div>

            <div class="flex items-baseline gap-2 my-8">
                <span class="text-3xl font-bold">{{ currentPrice }}TMT</span>
                <span v-if="hasDiscount" class="text-xl text-gray-500 line-through">{{ originalPrice }}TMT</span>
            </div>
        </div>

        <!-- <template #footer> -->
        <div class="flex flex-wrap items-center gap-4 my-">
            <div class="flex items-center">
                <InputNumber v-model="test" :min="1" :max="100" :step="1" controls size="lg" />
            </div>


            <UButton variant="outline" class="h-10 w-10" @click="emit('addToCart', quantity)">
                <ShoppingCart class="h-4 w-4" />
            </UButton>

            <UButton variant="outline" class="h-10 w-10 border-red-500 text-red-500 hover:bg-red-50"
                @click="emit('wishlist')">
                <Heart class="h-4 w-4" />
            </UButton>
        </div>
        <!-- </template> -->
    </div>
</template>
