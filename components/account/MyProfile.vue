<script setup lang="ts">
import Input from '../UI/Input.vue';

</script>

<template>
    <div class="grid grid-cols-2 gap-4 rounded-lg bg-white p-4 max-w-3xl">
        <h1 class="text-2xl font-semibold col-span-2">Личные данные</h1>
        <Input label="Имя" />
        <Input label="Фамилия" />
        <Input label="Номер телефона" />
        <Input label="Email" />
        <Input label="Адрес доставки" />
        <div class=" flex items-end">
            <UButton color="white" class="h-10"  block :ui="{
                strategy: 'override',
                color: {
                    white: {
                        solid: 'bg-main-blue text-white'
                    },
                }
            }">
                Сохранить
            </UButton>
        </div>

    </div>
</template>