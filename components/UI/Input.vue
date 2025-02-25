<template>
  <div class="relative w-full">
    <!-- Label -->
    <label v-if="label" :class="['block text-sm font-medium', labelColor]">{{ label }}</label>
    
    <div class="relative">
      <!-- Prepend Icon -->
      <div v-if="prepend" class="absolute left-3 top-1/2 transform -translate-y-1/2">
        <component :is="prepend" :size="16" />
      </div>

      <!-- Append Icon -->
      <div v-if="append" class="absolute right-3 top-1/2 transform -translate-y-1/2">
        <component :is="append" :size="16" />
      </div>

      <input
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :class="[ 
          'flex h-10 w-full rounded-md border border-gray-input px-3 py-2 text-sm ring-offset-background',
          'file:border-0 file:bg-transparent file:text-sm file:font-medium',
          'placeholder:text-muted-foreground',
          'focus-visible:outline-none focus-visible:border focus-visible:border-blue-1 focus-visible:ring-ring focus-visible:ring-offset-2',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'bg-gray-input',
          className,
          props.prepend ? 'pl-10' : ''
        ]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

// Define props
const props = defineProps({
  type: {
    type: String as () => 'text' | 'password' | 'email' | 'search',
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  className: {
    type: String,
    default: '',
  },
  prepend: {
    type: [Object, Function] as PropType<any>, // Can be a component
    default: null,
  },
  append: {
    type: [Object, Function] as PropType<any>, // Can be a component
    default: null,
  },
  label: {
    type: String,
    default: '',
  },
  labelColor: {
    type: String,
    default: 'text-text-blue-1',
  },
});
</script>
