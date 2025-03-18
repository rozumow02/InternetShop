<script setup lang="ts">
import InputNumber from "@/components/UI/InputNumber.vue";
import { defineProps, defineEmits } from "vue";
import type { IProduct } from "@/types";

interface IProps {
  item: IProduct
}

const props = defineProps<IProps>();
const emit = defineEmits(["removeItem"]);

const removeItem = () => {
  emit("removeItem", props.item.id);
};
</script>

<template>
  <div class="flex items-center gap-3 w-full">
    <div>
      <UCheckbox v-model="item.id" />
    </div>
    <div class="w-44">
      <img :src="item.imageUrl" width="100" />
    </div>
    <NuxtLink :to="`/product/${item.id}`" class="w-full flex flex-col">
      <h2 class="text-lg text-text-blue-1 font-medium">{{ item.name }}</h2>
      <p class="font-medium">{{ item.price }} TMT </p>
    </NuxtLink>
    <div class="flex items-center gap-2 justify-between w-full">
      <InputNumber color="w-20" :min="1" size="small" style="width: 8rem;" v-model="item.quantity" />
      <span>{{ item.quantity * item.price }} TMT</span>
      <UButton icon="i-heroicons-trash" @click="removeItem" color="black" variant="ghost" size="sm" />
    </div>
  </div>
</template>
