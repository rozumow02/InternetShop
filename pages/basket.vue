<script setup lang="ts">
import PaymentMethodSelector from "@/components/Basket/paymentMethodSelector.vue";
import OrderSummary from "@/components/Basket/orderSummary.vue";
import BasketItem from "@/components/Basket/basketItem.vue";

const basket = useBasketStore();
const { items, removeItem } = basket;
const localPath = useLocalePath();
const order = {
  quantity: 2,
  price: 12034,
  discount: 1245,
  delivery: 20,
};

const total = computed(() => order.price - order.discount + order.delivery);
</script>

<template>
    <Container>
        <h1 class="text-2xl font-bold mb-4">🛒 Your Basket</h1>
        <div class="grid grid-cols-8 gap-4">
            <div class="col-span-5">
                <template v-if="items.length">
                    <BasketItem v-for="item in items" :key="item.id" :item="item" @remove="removeItem"
                        :localPath="localPath" />
                </template>
                <p v-else class="text-gray-500 text-center">Your basket is empty.</p>
            </div>
            <div class="col-span-3">
                <UCard class="mb-4">
                    <OrderSummary :order="order" :total="total" />
                    <PaymentMethodSelector />
                    <UButton block size="lg">
                        Продолжить
                    </UButton>
                </UCard>
            </div>
        </div>
    </Container>
</template>
