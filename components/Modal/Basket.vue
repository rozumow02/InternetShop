<script setup lang="ts">
import { ShoppingBasket, ShoppingCart } from 'lucide-vue-next'
const storeBasket = useBasketStore()
const { isBasket, } = storeToRefs(storeBasket)
</script>

<template>
    <div>
        <USlideover v-model="isBasket" :overlay="false">
            <UCard class="flex flex-col flex-1"
                :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                <template #header>
                    <div class="flex items-center justify-between">
                        <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                            Корзина
                        </h3>
                        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                            @click="isBasket = false" />
                    </div>
                </template>
                <div class="flex flex-col justify-between h-full">
                    <div class="flex flex-col w-44 h-full justify-center items-center m-auto">
                        <ShoppingCart :size="60" class="text-center w-full text-main-blue" />
                        <div>
                            <h2 class="font-semibold text-center text-xl">
                                В вашей корзине пока пусто
                            </h2>
                            <span class="text-gray-main">
                                Тут появятся товары, которые вы закажете
                            </span>
                        </div>
                    </div>

                    <UButton color="white" ripple block :ui="{
                        strategy: 'override',
                        color: {
                            white: {
                                solid: 'bg-gray-1 '
                            },
                        }
                    }" size="lg">
                        <div class="flex justify-between w-full">
                            Закажите что нибудь
                            <span>
                                0   
                            </span>
                        </div>
                    </UButton>
                </div>

            </UCard>
        </USlideover>
    </div>
</template>
