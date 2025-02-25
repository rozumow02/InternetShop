<script setup lang="ts">
// import { MdKeyboardArrowRight } from "vue-iconify/md";
import { ChevronRight } from 'lucide-vue-next'
import { useMenuStore } from "@/stores/menuStore";
import type {Category} from "@/types"
defineProps<{ category: Category }>();

const store = useMenuStore();

const handleMouseEnter = (category: Category) => {
  store.setActiveCategory(category);
};
</script>

<template>
  <li>
    <NuxtLink
      @mouseenter="handleMouseEnter(category)"
      :to="`/category/${category.slug}`"
      class="group hover:bg-[#C9E0FF] flex items-center rounded-md text-sm font-medium px-3 w-full transition-colors"
      :class="{ 'bg-[#C9E0FF]': category.name === store.activeCategory?.name }"
    >
      <span
        class="transition-colors group-hover:text-header-primary inline-block line-[1.8] my-2 px-1 w-[calc(100%-48px)] capitalize"
      >
        {{ category.name }}
      </span>
      <ChevronRight class="ml-auto" :size="16" ></ChevronRight>
    </NuxtLink>
  </li>
</template>
