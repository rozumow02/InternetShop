<template>
    <Container class="my-4">
        <div class="my-6">
            <h1 class="font-semibold text-2xl mb-2">
                {{ pageTitle }}
            </h1>
            <UBreadcrumb :links="links" :ui="{ active: 'text-text-blue-1' }" />
        </div>
        <div class="grid grid-cols-4 gap-4 ">
            <!-- Sidebar Menu -->
            <div class="col-span-1 rounded-lg ">
                <ul class="font-medium text-blue-900 rounded-lg bg-white">
                    <NuxtLink v-for="(item, index) in menuItems" :key="index" :to="`/account/${item.link}`"
                        class="block cursor-pointer px-4 py-3 transition-colors hover:bg-blue-100 active:bg-blue-200"
                        :class="{ 'bg-blue-100': route.params.account === item.link }">
                        {{ item.label }}
                    </NuxtLink>
                    <UButton block color="red" size="lg" class="my-4">Выйти</UButton>
                </ul>
            </div>

            <!-- Dynamic Content -->
            <div class="col-span-3 w-full">
                <component :is="currentComponent" />
            </div>
        </div>
    </Container>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from "vue";
import { useRoute } from "nuxt/app";
import Container from "~/components/Container.vue";
const route = useRoute();

// Dynamic component mapping
const componentMap: Record<string, any> = {
    favorites: defineAsyncComponent(() => import("@/components/account/Favorites.vue")),
    orders: defineAsyncComponent(() => import("@/components/account/Orders.vue")),
    profile: defineAsyncComponent(() => import("@/components/account/MyProfile.vue")),
};


const slug = computed<string>(() => route.params.account as string || 'profile');

// Get the current dynamic component
const currentComponent = computed(() => componentMap[slug.value]);

const pageTitle = computed(() => {
    const titles: Record<string, string> = {
        favorites: 'Избранные',
        profile: 'Профиль',
        orders: 'Мои заказы'
    }
    return titles[slug.value] || 'Профиль'
})

const menuItems = [
    { label: "Мой аккаунт", link: "profile" },
    { label: "Заказы", link: "orders" },
    { label: "Избранные", link: "favorites" },
];
const links = ref([{
    label: 'Главная',
    to: '/'
}, {
    label: 'Аккаунт',
}, {
    label: pageTitle.value,
}])
</script>