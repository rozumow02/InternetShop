<script setup lang="ts">
import VueNumberInput from '@chenfengyuan/vue-number-input'

interface InputNumberProps {
    min?: number
    max?: number
    step?: number
    precision?: number
    disabled?: boolean
    controls?: boolean
    color?: string
    size?: 'sm' | 'md' | 'lg'
}

const model = defineModel<number>({ required: true })

defineProps<InputNumberProps>()
defineEmits(['change', 'focus', 'blur'])

</script>

<template>
    <VueNumberInput v-model="model" center :min="min" :max="max" :step="step" :precision="precision" controls
        :disabled="disabled" class="w-full text-center border-0 outline-none" :class="[]"
        @change="$emit('change', model)" @focus="$emit('focus', $event)" @blur="$emit('blur', $event)" />
</template>
