<template>
  <button
    :class="buttonClasses"
    :aria-label="ariaLabel"
    class="group relative"
  >
    <!-- Dynamic Icon component rendering -->
    <component :is="icon" :size="size" />
  </button>
</template>

<script setup>
import { defineProps, computed } from 'vue';

// 📌 Props to pass icon component, size, and class
const props = defineProps({
icon: {
  type: Function, // Icon component should be a Function type
  required: true,
},
size: {
  type: Number,
  default: 16,
},
ariaLabel: {
  type: String,
  required: true,
},
additionalClasses: {
  type: String,
  default: '',
},
});

// 📌 Computed class for button
const buttonClasses = computed(() => {
return `text-gray-main hover:bg-gray-100 p-3 rounded-lg ${props.additionalClasses}`;
});
</script>

<style scoped>
/* Hover effect */
.group:hover {
opacity: 1;
}
</style>
