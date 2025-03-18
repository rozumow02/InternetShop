<script setup lang="ts">
import { defineProps } from "vue";
import type { IProduct } from "@/types"
interface IProps {
    order: any
    total: number
}

const props = defineProps<IProps>();
</script>

<template>
    <div class="w-full flex flex-col">
        <div class="flex justify-between items-center text-gray-600">
            <span>Количество: {{ order.quantity }}</span>
            <span class="font-medium">{{ order.price.toLocaleString() }} ТМТ</span>
        </div>

        <div class="flex justify-between items-center">
            <span class="text-red-600">Скидка:</span>
            <span class="text-red-600 font-medium">-{{ order.discount.toLocaleString() }} ТМТ</span>
        </div>

        <div class="flex justify-between items-center text-gray-600">
            <span>Доставка:</span>
            <span class="font-medium">{{ order.delivery.toLocaleString() }} ТМТ</span>
        </div>

        <div class="flex w-full justify-between items-center mt-2 pt-2 border-t border-gray-200">
            <span class="font-medium">Сумма:</span>
            <span class="font-medium">{{ total.toLocaleString() }} ТМТ</span>
        </div>
    </div>
</template>
