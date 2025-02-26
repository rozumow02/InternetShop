<script setup lang="ts">
import ProductGrid from '~/components/Card/ProductGrid.vue';
import Container from '~/components/Container.vue';
import ProductFilter from '~/components/Filter/ProductFilter.vue';
import image1 from "@/assets/images/image1.png"
import image2 from "@/assets/images/image2.png"
import image3 from "@/assets/images/image3.png"
import image4 from "@/assets/images/image4.png"

import type { IProduct } from "@/types"
const fetchFilter = (filters: { order: string; brands: string[]; searchQuery: string; }) => {
    console.log('ff', filters);

}
const onClear = () => {
    console.log('ff');

}


const initialProducts = ref<IProduct[]>([
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


// Tasodifiy tartiblash funksiyasi
const shuffleArray = (array: IProduct[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

// Ref bilan popularProducts ni yaratamiz
const popularProducts = ref<IProduct[]>([]);
const route = useRoute()

// Sahifa yuklanganda yoki yangilanganda array ni tasodifiy tartiblash
onBeforeMount(() => {
    popularProducts.value = shuffleArray([...initialProducts.value]);
    console.log('aaaaa',);

});
</script>

<template>
    <Container class="my-5">
        <div class="flex gap-6">

            <ProductFilter @clear="onClear" @apply="fetchFilter" />
            <ProductGrid :products="popularProducts" />
        </div>
    </Container>
</template>