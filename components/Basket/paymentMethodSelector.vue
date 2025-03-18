<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { CreditCard, Wallet } from 'lucide-vue-next';

const props = defineProps({
  selectedPaymentMethod: String,
});
const emit = defineEmits(["selectPaymentMethod"]);

const selectPaymentMethod = (method: string) => {
  emit("selectPaymentMethod", method);
};
</script>

<template>
  <div class="grid grid-cols-2 gap-2 mb-4">
    <div
      class="relative flex flex-col items-center justify-center h-20 rounded-md cursor-pointer"
      :class="selectedPaymentMethod === 'cash' ? 'border-primary bg-[#002855] text-white' : 'bg-[#f1f5f9] text-black'"
      @click="selectPaymentMethod('cash')"
    >
      <Wallet class="h-6 w-6 mb-1" />
      <span>Наличными</span>
    </div>

    <div
      class="relative flex flex-col items-center justify-center h-20 rounded-md cursor-pointer"
      :class="selectedPaymentMethod === 'card' ? 'border-primary bg-[#002855] text-white' : 'bg-[#f1f5f9] text-black'"
      @click="selectPaymentMethod('card')"
    >
      <CreditCard class="h-6 w-6 mb-1" />
      <span>С карты</span>
    </div>
  </div>
</template>
