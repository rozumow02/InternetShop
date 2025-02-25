<template>
    <div class="relative">
      <!-- Kategoriya tugmachasi -->
      <button @click="toggleMenu" class="px-4 py-2 bg-primary text-black rounded-md">
     ff   Категории
      </button>
  fff
      <!-- Asosiy bo‘limlar menyusi -->
      <div
        v-if="menuOpen"
        class="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg border rounded-md"
      >
        <ul>
          <li
            v-for="category in categories"
            :key="category.name"
            class="px-4 py-2 hover:bg-gray-100 relative"
            @mouseenter="activeCategory = category"
            @mouseleave="activeCategory = null"
          >
            {{ category.name }}
  
            <!-- Podbo‘limlar paneli -->
            <div
              v-if="activeCategory === category"
              class="absolute left-full top-0 w-64 bg-white shadow-lg border rounded-md ml-2"
            >
              <ul>
                <li
                  v-for="sub in category.subcategories"
                  :key="sub.name"
                  class="px-4 py-2 hover:bg-gray-100"
                >
                  {{ sub.name }}
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  // Kategoriyalar va ularning podbo‘limlari
  const categories = ref([
    {
      name: "Elektronika",
      subcategories: [
        { name: "Telefonlar" },
        { name: "Noutbuklar" },
        { name: "Televizorlar" },
      ],
    },
    {
      name: "Kiyim-kechak",
      subcategories: [
        { name: "Erkaklar uchun" },
        { name: "Ayollar uchun" },
        { name: "Bolalar uchun" },
      ],
    },
    {
      name: "Oziq-ovqat",
      subcategories: [
        { name: "Mevalar" },
        { name: "Ichimliklar" },
        { name: "Sut mahsulotlari" },
      ],
    },
  ])
  
  // Menyu ochiq yoki yopiq holati
  const menuOpen = ref(false)
  
  // Hozirgi faol bo‘lim
  const activeCategory = ref(null)
  
  // Kategoriyalar menyusini ochish/yopish
  const toggleMenu = () => {
    menuOpen.value = !menuOpen.value
  }
  </script>
  
  <style scoped>
  /* Asosiy menyuni chiqishi */
  div > div {
    transition: all 0.2s ease-in-out;
  }
  </style>
  