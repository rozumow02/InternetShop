<template>
    <div class="w-full max-w-xs bg-white  rounded-lg  p-4">
        <!-- Порядок (Radio Group) -->
        <div class="space-y-2">
            <h3 class="text-lg font-medium">Порядок</h3>
            <URadioGroup v-model="selectedOrder" :options="options" />
        </div>

        <!-- Бренд (Search and Checkboxes) -->
        <div class="space-y-2">
            <h3 class="text-lg font-medium">Бренд</h3>
            <Input placeholder="Поиск" class-name="" :prepend="Search" />
            <div class="space-y-2">
                <UCheckbox v-for="brand in filteredBrands" :key="brand.id" v-model="selectedBrands" :value="brand.id"
                    :label="brand.name" />
            </div>
        </div>

        <!-- Кнопки (Применить и Очистить) -->
        <div class="space-y-2 mt-4">
            <UButton color="white" block :ui="{
                strategy: 'override',
                color: {
                    white: {
                        solid: 'bg-main-blue text-white'
                    },
                }
            }" size="lg" @click="handleApply"> Применить
            </UButton>
            <UButton variant="link" block class="w-full text-main-red hover:text-red-main" @click="handleClear">
                Очистить
            </UButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { Search } from "lucide-vue-next"
import Input from "../UI/Input.vue";

// Интерфейсы
interface Brand {
    id: string;
    name: string;
}

interface ProductFilterProps {
    onApply: (filters: {
        order: string;
        brands: string[];
        searchQuery: string;
    }) => void;
    onClear: () => void;
}

// Props
const props = defineProps<ProductFilterProps>();

// Данные брендов
const brands: Brand[] = [
    { id: "3-zhelanie", name: "3 желание" },
    { id: "ahmad-tea", name: "Ahmad Tea" },
    { id: "alpen-gold", name: "Alpen Gold" },
    { id: "raffaello", name: "Raffaello" },
    { id: "milka", name: "Milka" },
    { id: "ferrero-rocher", name: "Ferrero Rocher" },
    { id: "lindt", name: "Lindt" },
    { id: "kinder-bueno", name: "Kinder Bueno" },
];

// Состояния
const selectedOrder = ref("");
const selectedBrands = ref<string[]>([]);
const searchQuery = ref("");
const filteredBrands = ref(brands);

// Поиск брендов
const handleSearchChange = () => {
    filteredBrands.value = brands.filter((brand) =>
        brand.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
};

// Применить фильтры
const handleApply = () => {
    props.onApply({
        order: selectedOrder.value,
        brands: selectedBrands.value,
        searchQuery: searchQuery.value,
    });
};

// Очистить фильтры
const handleClear = () => {
    selectedOrder.value = "";
    selectedBrands.value = [];
    searchQuery.value = "";
    filteredBrands.value = brands;
    props.onClear();
};

const options = [{
    value: '',
    label: 'Не выбрано'
}, {
    value: 'lowest',
    label: 'Самая низкая цена'
}, {
    value: 'highest',
    label: 'Самая высокая цена'
}]
</script>