<script setup lang="ts">
import ProductCard from '~/components/Card/ProductCard.vue';
import ProductSection from '~/components/Card/ProductSection.vue';
import CategoryMenu from '~/components/main/CategoryMenu.vue';
import image1 from "@/assets/images/image1.png"
import image2 from "@/assets/images/image2.png"
import image3 from "@/assets/images/image3.png"
import image4 from "@/assets/images/image4.png"

import type { IProduct } from "@/types"
import Container from '~/components/Container.vue';
import Carousel from '~/components/Carousel/Carousel.vue';

const saleProducts = ref<IProduct[]>([
  {
    id: 1,
    name: "Raffaello - Праздничный набор конфет (240г)",
    quantity: 20,
    originalPrice: 500,
    price: 450,
    imageUrl: image1,
    isNew: true,
  },
  {
    id: 2,
    quantity: 15,
    name: "Французский парфюм - Для женщин (50мл)",
    originalPrice: 1200,
    price: 900,
    imageUrl: image2,
  },
  {
    id: 3,
    quantity: 10, 
    name: "Ювелирное украшение - Серебряное кольцо",
    originalPrice: 2500,
    price: 1900,
    imageUrl: image3,
  },
  {
    id: 4,
    quantity: 5,
    name: "Набор сладостей - Шоколад и конфеты",
    originalPrice: 800,
    price: 600,
    imageUrl: image4,
  },
]);

const recommendedProducts = ref<IProduct[]>([
  {
    id: 5,
    quantity: 25,
    name: "Букет цветов - Премиум розы",
    price: 1500,
    imageUrl: image1,
  },
  {
    id: 6,
    quantity: 30,
    name: "Набор натуральной косметики",
    price: 1000,
    imageUrl: image2,
  },
  {
    id: 7,
    quantity: 18,
    name: "Женские духи - Dior J’adore (50мл)",
    price: 2200,
    imageUrl: image3,
  },
  {
    id: 8,
    quantity: 12, 
    name: "Шоколадный набор - Лучший подарок",
    price: 850,
    imageUrl: image4,
  },
]);

const newProducts = ref<IProduct[]>([
  {
    id: 13,
    quantity: 40,
    name: "Парфюмерная вода Gucci Bloom (50мл)",
    price: 2500,
    imageUrl: image1,
    isNew: true,
  },
  {
    id: 14,
    quantity: 22,
    name: "Ювелирное украшение - Золотая подвеска",
    price: 5000,
    imageUrl: image2,
    isNew: true,
  },
  {
    id: 15,
    quantity: 28,
    name: "Натуральный уход за кожей - SPA набор",
    price: 2000,
    imageUrl: image3,
    isNew: true,
  },
  {
    id: 16,
    quantity: 16,
    name: "Романтический ужин - Сертификат в ресторан",
    price: 3000,
    imageUrl: image4,
    isNew: true,
  },
]);

const mart_8 = ref<IProduct[]>([
  {
    id: 17,
    quantity: 50,
    name: "Raffaello - Праздничный набор конфет (240г)",
    originalPrice: 500,
    price: 450,
    imageUrl: image1,
    isNew: true,
  },
  {
    id: 18,
    quantity: 35,
    name: "Букет цветов - Специально к 8 Марта",
    price: 300,
    imageUrl: image2,
  },
  {
    id: 19,
    quantity:5,
    name: "Французский парфюм - Для женщин (50мл)",
    price: 1200,
    imageUrl: image3,
  },
  {
    id: 20,
    quantity: 8,
    name: "Набор сладостей - Шоколад и конфеты",
    price: 750,
    imageUrl: image4,
  },
]);

</script>

<template>
  <div class=" my-4 mx-auto px-10">
    <Carousel />
  </div>
  <Container class="gap-20 grid">
    <ProductSection :title="'На 8-е марта '" :products="mart_8" viewAllHref="/products" class="mt-8" />
    <ProductSection :title="'Распродажа'" :products="saleProducts" viewAllHref="/products" class="" />
    <ProductSection :title="'Популярные товары'" :products="recommendedProducts" viewAllHref="/products" class="m" />
    <ClientOnly>
      <img src="@/assets/images/Group.png" style="width: 100%;" />
    </ClientOnly>
    <ProductSection :title="'Новинки'" :products="newProducts" viewAllHref="/products" class="mb-8" />
  </Container>
</template>