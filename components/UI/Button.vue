<template>
    <button
      :class="[
        'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:pointer-events-none',
        variantClasses,
        sizeClasses,
        className,
      ]"
      :disabled="disabled"
      @click="onClick"
    >
      <slot />
    </button>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  
  // Define props
  const props = defineProps({
    variant: {
      type: String as () => 'default' | 'destructive' | 'ghost',
      default: 'default',
    },
    size: {
      type: String as () => 'default' | 'sm' | 'lg' | 'icon',
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    className: {
      type: String,
      default: '',
    },
  });
  
  // Variant classes
  const variantClasses = computed(() => {
    switch (props.variant) {
      case 'destructive':
        return 'bg-destructive text-destructive-foreground hover:bg-destructive/90';
      case 'ghost':
        return 'hover:bg-gray-100 hover:text-accent-foreground';
      default:
        return 'bg-primary text-primary-foreground hover:bg-primary/90';
    }
  });
  
  // Size classes
  const sizeClasses = computed(() => {
    switch (props.size) {
      case 'sm':
        return 'h-9 px-3';
      case 'lg':
        return 'h-11 px-8';
      case 'icon':
        return 'h-10 w-10';
      default:
        return 'h-10 px-4';
    }
  });
  
  // Emit click event
  const emit = defineEmits(['click']);
  const onClick = (event: Event) => {
    emit('click', event);
  };
  </script>