<script setup lang="ts">
import { storeToRefs } from "pinia"
import Input from "../UI/Input.vue";
import MyInput from "../UI/myInput.vue";
const storeAuth = useAuthStore()
const { dialog } = storeToRefs(storeAuth)
const selected = ref(true)
</script>

<template>
    <ClientOnly>
        <UModal v-model="dialog" prevent-close width="200">
            <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                <template #header>
                    <div class="flex items-center justify-between">
                        <h3
                            class="w-full flex justify-center text-xl font-semibold leading-6 text-gray-900 dark:text-white">

                            Войти в аккаунт
                        </h3>
                        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                            @click="dialog = false" />
                    </div>
                </template>
                <div class="grid gap-6">
                    <Input label="Номер телефона" />
                    <Input label="Пароль" type="password" />
                    <UCheckbox v-model="selected" name="Запомнить меня" label="Запомнить меня" />
                    <UButton color="white" ripple icon="i-heroicons-arrow-right-start-on-rectangle" block :ui="{
                        strategy: 'override',
                        color: {
                            white: {
                                solid: 'bg-main-blue text-white'
                            },
                        }
                    }" size="lg">
                        Войти
                    </UButton>
                </div>
            </UCard>
        </UModal>
    </ClientOnly>
</template>
