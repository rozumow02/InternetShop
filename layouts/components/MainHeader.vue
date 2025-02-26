<template>
  <header class="w-full border-b">
    <CategoryMenu v-if="isTrue" />
    <Container class="flex h-16 items-center justify-between gap-20">
      <NuxtLink to="/" class="flex text-text-blue-1 items-center gap-2 font-bold text-xl text-primary">
        TradeLane
      </NuxtLink>
      <div class="flex w-full">
        <button variant="destructive"
          class="hidden sm:flex rounded-tl-lg rounded-bl-lg px-3 sm:items-center bg-red-main text-white"
          @click="() => isTrue = !isTrue">
          <AlignJustify :size="16" v-if="!isTrue" />
          <X :size="16" v-if="isTrue" />
          <span class="ml-2">
            Категории
          </span>
        </button>
        <Input placeholder="Камеры видеонаблюдения" class-name="rounded-none rounded-tr-lg rounded-br-lg "
          :append="Search" />
      </div>
      <div class="flex items-center gap-1">

        <UTooltip v-for="(icon, index) in icons" :key="index" :text="icon.label">
          <IconButton :icon="icon.component" :size="16" :aria-label="icon.label" @click="clickIcon(icon)" />
        </UTooltip>
      </div>
    </Container>
    <Login />
    <Basket />
  </header>
</template>

<script setup>
const route = useRoute()
import { Search, AlignJustify, X, MapPin, Heart, CircleUserRound, ShoppingBag, Globe } from 'lucide-vue-next'
import Input from '@/components/UI/Input.vue'
import CategoryMenu from '~/components/main/CategoryMenu.vue';
import Container from '~/components/Container.vue';
import IconButton from '~/components/UI/IconButton.vue';
import { storeToRefs } from "pinia"
import Login from '~/components/Modal/Login.vue';
import Basket from '~/components/Modal/Basket.vue';
const isTrue = ref(false)
const storeAuth = useAuthStore()
const { dialog } = storeToRefs(storeAuth)
const storeBasket = useBasketStore()
const { isBasket } = storeToRefs(storeBasket)

// Ikonalarni uzatishda komponentlar
const icons = ref([
  { component: MapPin, label: 'Ашхабад' },
  { component: Heart, label: 'Избранные' },
  { component: CircleUserRound, label: 'Аккаунт' },
  { component: ShoppingBag, label: 'Корзина' },
  { component: Globe, label: 'Русский' },
]);

const clickIcon = (icon) => {
  console.log(icon.label);
  if (icon.label == 'Аккаунт')
    dialog.value = true


  if (icon.label == 'Корзина')
    isBasket.value = true
  console.log(isBasket.value, 'basket');

}
watch(() => route.path, (newPath) => {
  isTrue.value = false
})
</script>

<style scoped>
/* Add any custom styles here */
</style>