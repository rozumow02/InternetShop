<script setup lang="ts">
import { computed } from "vue"

const navigation = {
  main: [
    { name: "Главная", href: "/" },
    { name: "О нас", href: "#" },
    { name: "Возврат", href: "#" },
    { name: "Доставка", href: "#" },
    { name: "Связаться с нами", href: "#" },
  ],
  categories: [
    { name: "Распродажа", href: "#" },
    { name: "Вода и напитки", href: "#" },
    { name: "Сладкое", href: "#" },
    { name: "Бакалея", href: "#" },
    { name: "Для детей", href: "#" },
    { name: "Новинки", href: "#" },
  ],
  social: [
    { name: "Instagram", href: "#" },
    { name: "WhatsApp", href: "#" },
    { name: "Telegram", href: "#" },
    { name: "TikTok", href: "#" },
    { name: "Imo", href: "#" },
    { name: "Link", href: "#" },
  ],
  contact: [
    { number: "+993 65 55 06 91" },
    { number: "+993 65 55 55 55" },
    { number: "+993 63 33 33 33" },
  ],
}

const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class=" bg-black-1 text-gray-300">
    <div class="max-w-screen-xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        <!-- Logo and Address -->
        <div class="space-y-4">
          <h2 class="text-3xl font-bold text-white">Logotype</h2>
          <p class="text-sm leading-6">
            Ashgabat shaheri, Mysallar koçesi, "Mysal" söwda-merkezi.
          </p>
        </div>

        <!-- Main Navigation -->
        <div class="space-y-4">
          <ul class="space-y-2">
            <li v-for="item in navigation.main" :key="item.name">
              <NuxtLink :to="item.href" class="text-sm hover:text-white hover:underline">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Categories -->
        <div class="space-y-4">
          <ul class="space-y-2">
            <li v-for="item in navigation.categories" :key="item.name">
              <NuxtLink :to="item.href" class="text-sm hover:text-white hover:underline">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Social Links -->
        <div class="space-y-4">
          <ul class="space-y-2">
            <li v-for="item in navigation.social" :key="item.name">
              <NuxtLink :to="item.href" class="text-sm hover:text-white hover:underline">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Numbers -->
        <div class="space-y-4">
          <ul class="space-y-2">
            <li v-for="item in navigation.contact" :key="item.number">
              <NuxtLink :to="`tel:${item.number.replace(/\s/g, '')}`" class="text-sm hover:text-white hover:underline">
                {{ item.number }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="border-t bg-black-2 border-gray-800 py-4">
      <div class="max-w-screen-xl mx-auto px-4">
        <p class="text-center text-sm">Copyright © {{ currentYear }}. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
