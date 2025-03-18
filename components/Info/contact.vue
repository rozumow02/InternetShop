<script setup lang="ts">
import Input from '../UI/Input.vue';
import Textarea from '../UI/Textarea.vue';

</script>


<template>
    <div class="grid grid-cols-2  gap-6">
        <Input label="Имя" />
        <Input label="Номер телефона" />
        <Textarea label="Сообщение" />
        <div class="gap-2 grid">
            <Input type="email" label="Email" />
            <UButton color="white" ripple block :ui="{
                strategy: 'override',
                color: {
                    white: {
                        solid: 'bg-main-blue text-white'
                    },
                }
            }" size="lg">
                Отправить
            </UButton>
        </div>
    </div>
</template>