<script setup lang="ts">
import { ref, onMounted } from "vue";
import { register } from "swiper/element/bundle";
import image1 from "@/assets/images/car.png";

register();

const containerRef = ref<HTMLDivElement | null>(null);
const slides = ref([image1, image1, image1, image1]);

onMounted(() => {
  if (containerRef.value) {
    // containerRef.value.initialize();
  }
});
</script>

<template>
  <ClientOnly>
    <swiper-container
      ref="containerRef"
      :slides-per-view="'auto'"
      :space-between="16"
      :pagination="true"
      :navigation="true"
      :autoplay="{ delay: 2000 }"
      
      class="[--swiper-theme-color:#F3F3F3] w-full max-w-[100vw] lg:max-w-[90vw] xl:max-w-[1180px] mx-auto"
    >
      <swiper-slide
        v-for="(slide, idx) in slides"
        :key="idx"
        class="swiper-custom-slide"
      >
        <img
          :src="slide"
          class="w-full max-w-full h-auto max-h-[80vh] object-cover rounded-lg shadow-lg"
        />
      </swiper-slide>
      
      <!-- Autoplay Progress -->
      <!-- <div class="autoplay-progress absolute top-2 right-2 bg-white p-1 rounded-full shadow">
        <svg viewBox="0 0 48 48" class="w-10 h-10">
          <circle cx="24" cy="24" r="20" class="stroke-gray-400 stroke-[2] fill-none"></circle>
        </svg>
      </div> -->
    </swiper-container>
  </ClientOnly>
</template>

<style scoped>

.swiper-container {
  width: 100%;
  overflow: hidden;
}

/* Swiper slayderi to‘g‘ri chiqishi uchun */
.swiper-custom-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
}

/* Autoplay Progress */
.autoplay-progress {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.8);
  padding: 6px;
  border-radius: 50%;
}
</style>
