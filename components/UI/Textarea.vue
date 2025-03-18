<script setup lang="ts">
import type { TextareaColor, TextareaVariant, TextareaSize } from '#ui/types'

const model = defineModel<string>()

const props = withDefaults(defineProps<{
    placeholder?: string
    color?: TextareaColor
    variant?: TextareaVariant
    disabled?: boolean
    size?: TextareaSize
    rows?: number
    label?: string
    labelColor?: string
}>(), {
    color: "gray",
    rows: 4
})
</script>

<template>
    <div>
        <label v-if="label" :class="['block text-sm font-medium', labelColor]">{{ label }}</label>
        <UTextarea v-model="model" :placeholder="props.placeholder" :color="props.color" :variant="props.variant"
            :disabled="props.disabled" :size="props.size" :rows="props.rows"
            :ui="{ color: { gray: { outline: ' border border-gray-input outline-none bg-gray-input ring-0 focus:ring-0 focus-visible:outline-none focus-visible:border focus-visible:border-blue-1' } } }" />
    </div>
</template>
