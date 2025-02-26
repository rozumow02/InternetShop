<script setup lang="ts">
import ProductView from '~/components/Card/ProductView.vue';
import Container from '~/components/Container.vue';
import image from "@/assets/images/vegon.png"
import ProductSection from '~/components/Card/ProductSection.vue';
import image1 from "@/assets/images/image1.png"
import image2 from "@/assets/images/image2.png"
import image3 from "@/assets/images/image3.png"
import image4 from "@/assets/images/image4.png"
import type { IProduct } from "@/types"
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
</script>

<template>
    <Container>
        <div class="grid grid-cols-5 gap-6 my-6 ">
            <div class="col-span-2">
                <img class="w-full" :src="image" />
            </div>
            <ProductView class="col-span-2"
                title="Bombbar. Вафельный батончик Bombbar с молочно-ореховой пастой со вкусом капучино 32 г"
                code="BBR1110411" unit="шт." :currentPrice="53.31" :originalPrice="75.31" :isNew="true"
                @onAddToCart="(quantity: any) => console.log('Added to cart:', quantity)"
                @onBuyNow="(quantity: any) => console.log('Buy now:', quantity)"
                @onWishlist="() => console.log('Added to wishlist')" />
        </div>
        <ProductSection :title="'Похожие продукты'" :products="saleProducts" class="" />
    </Container>
</template>