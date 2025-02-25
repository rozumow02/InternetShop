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
    originalPrice: 500,
    price: 450,
    imageUrl: image1,
    isNew: true,
  },
  {
    id: 2,
    name: "Французский парфюм - Для женщин (50мл)",
    originalPrice: 1200,
    price: 900,
    imageUrl: image2,
  },
  {
    id: 3,
    name: "Ювелирное украшение - Серебряное кольцо",
    originalPrice: 2500,
    price: 1900,
    imageUrl: image3,
  },
  {
    id: 4,
    name: "Набор сладостей - Шоколад и конфеты",
    originalPrice: 800,
    price: 600,
    imageUrl: image4,
  },
]);

const recommendedProducts = ref<IProduct[]>([
  {
    id: 5,
    name: "Букет цветов - Премиум розы",
    price: 1500,
    imageUrl: image1,
  },
  {
    id: 6,
    name: "Набор натуральной косметики",
    price: 1000,
    imageUrl: image2,
  },
  {
    id: 7,
    name: "Женские духи - Dior J’adore (50мл)",
    price: 2200,
    imageUrl: image3,
  },
  {
    id: 8,
    name: "Шоколадный набор - Лучший подарок",
    price: 850,
    imageUrl: image4,
  },
]);

const popularProducts = ref<IProduct[]>([
  {
    id: 9,
    name: "Французские духи Chanel №5 (50мл)",
    price: 3000,
    imageUrl: image1,
  },
  {
    id: 10,
    name: "Ювелирный набор - Серебряные украшения",
    price: 3500,
    imageUrl: image2,
  },
  {
    id: 11,
    name: "Набор сладостей Ferrero Rocher (200г)",
    price: 1100,
    imageUrl: image3,
  },
  {
    id: 12,
    name: "Косметический набор L’Oreal",
    price: 1800,
    imageUrl: image4,
  },
]);

const newProducts = ref<IProduct[]>([
  {
    id: 13,
    name: "Парфюмерная вода Gucci Bloom (50мл)",
    price: 2500,
    imageUrl: image1,
    isNew: true,
  },
  {
    id: 14,
    name: "Ювелирное украшение - Золотая подвеска",
    price: 5000,
    imageUrl: image2,
    isNew: true,
  },
  {
    id: 15,
    name: "Натуральный уход за кожей - SPA набор",
    price: 2000,
    imageUrl: image3,
    isNew: true,
  },
  {
    id: 16,
    name: "Романтический ужин - Сертификат в ресторан",
    price: 3000,
    imageUrl: image4,
    isNew: true,
  },
]);

const mart_8 = ref<IProduct[]>([
  {
    id: 17,
    name: "Raffaello - Праздничный набор конфет (240г)",
    originalPrice: 500,
    price: 450,
    imageUrl: image1,
    isNew: true,
  },
  {
    id: 18,
    name: "Букет цветов - Специально к 8 Марта",
    price: 300,
    imageUrl: image2,
  },
  {
    id: 19,
    name: "Французский парфюм - Для женщин (50мл)",
    price: 1200,
    imageUrl: image3,
  },
  {
    id: 20,
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