<template>
    <Container class="my-4">
        <div class="grid grid-cols-4 gap-4">
            <!-- Sidebar Menu -->
            <div class="col-span-1 rounded-lg bg-white">
                <ul class="font-medium text-blue-900 rounded-lg">
                    <NuxtLink v-for="(item, index) in menuItems" :key="index" :to="`/info/${item.link}`"
                        class="block cursor-pointer px-4 py-3 transition-colors hover:bg-blue-100 active:bg-blue-200"
                        :class="{ 'bg-blue-100': route.params.info === item.link }">
                        {{ item.label }}
                    </NuxtLink>
                </ul>
            </div>

            <!-- Dynamic Content -->
            <div class="col-span-3 w-full bg-white p-6">
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
    about: defineAsyncComponent(() => import("@/components/Info/about.vue")),
    return: defineAsyncComponent(() => import("@/components/Info/return.vue")),
    delivery: defineAsyncComponent(() => import("@/components/Info/delivery.vue")),
    contact: defineAsyncComponent(() => import("@/components/Info/contact.vue")),
};

// Get the current dynamic component
const currentComponent = computed(() => componentMap[route.params.info as string] || componentMap.about);

const menuItems = [
    { label: "О нас", link: "about" },
    { label: "Возврат", link: "return" },
    { label: "Доставка", link: "delivery" },
    { label: "Связаться с нами", link: "contact" },
];
</script>