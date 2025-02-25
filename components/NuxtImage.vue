<template>
    <NuxtImg
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :sizes="sizes"
      :format="format"
      :priority="priority"
      :loading="loading"
      :quality="quality"
      :layout="layout"
      :blur="blur"
      :placeholder="placeholder"
      :background="background"
      :responsive="responsive"
    />
  </template>
  
  <script setup>
  import { defineProps, withDefaults } from 'vue';
  
  // Props definition with default values
  const props = withDefaults(defineProps({
    // Image source (URL)
    src: {
      type: String,
      required: true,
    },
    // Image alt text for accessibility
    alt: {
      type: String,
      default: '',
    },
    // Image width (either number or string)
    width: {
      type: [Number, String],
      default: '100%',
    },
    // Image height (either number or string)
    height: {
      type: [Number, String],
      default: 'auto',
    },
    // Image format (e.g., 'auto', 'webp', 'jpeg')
    format: {
      type: String,
      default: 'auto',
    },
    // Sizes for responsive images
    sizes: {
      type: String,
      default: '100vw', // Default is to take full viewport width
    },
    // Whether image has high priority for loading
    priority: {
      type: Boolean,
      default: false,
    },
    // Loading behavior: 'lazy' or 'eager'
    loading: {
      type: String,
      default: 'lazy',
    },
    // Image quality (from 0 to 100)
    quality: {
      type: Number,
      default: 75,
    },
    // Layout type: 'intrinsic', 'responsive', or 'fixed'
    layout: {
      type: String,
      default: 'intrinsic',
    },
    // Enable blur effect on the image
    blur: {
      type: Boolean,
      default: false,
    },
    // Placeholder type: 'blur' or 'empty'
    placeholder: {
      type: String,
      default: 'blur',
    },
    // Background color for placeholder image
    background: {
      type: String,
      default: '#f0f0f0',
    },
    // Whether the image should be responsive or not
    responsive: {
      type: Boolean,
      default: true,
    },
  }));
  </script>
  
  <style scoped>
  /* Optional custom styles if needed */
  </style>
  