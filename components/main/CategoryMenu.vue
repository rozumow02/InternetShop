<script setup lang="ts">
import { ref, watchEffect, watch } from "vue";
import { useMenuStore } from "@/stores/menuStore";
import { useRoute } from "vue-router";
import CatalogMenuListItem from "../../components/main/CatalogMenuListItem.vue";
import type { Category } from "~/types";



const store = useMenuStore();
const route = useRoute();

// 📌 Fake категории
const fakeCategories = ref<Category[]>([
  { id: 1, name: "Электроника", slug: "electronika", image: "/images/electronics.png", description: "Все виды электроники: от смартфонов до бытовой техники." },
  { id: 2, name: "Одежда", slug: "odezhda", image: "/images/clothes.png", description: "Модная и удобная одежда для всех возрастов и стилей." },
  { id: 3, name: "Книги", slug: "knigi", image: "/images/books.png", description: "Широкий выбор книг: от классики до современных бестселлеров." },
  { id: 4, name: "Товары для дома", slug: "tovary-dlya-doma", image: "/images/home-goods.png", description: "Все, что нужно для вашего дома: от мебели до аксессуаров." },
  { id: 5, name: "Спортивные товары", slug: "sportivnye-tovary", image: "/images/sports.png", description: "Оборудование для спорта, тренажеры и спортивная одежда." },
  { id: 6, name: "Автотовары", slug: "avtotovary", image: "/images/car-accessories.png", description: "Все для вашего автомобиля: от аксессуаров до запчастей." },
  { id: 7, name: "Продукты питания", slug: "produkty-pitaniya", image: "/images/food.png", description: "Вся продукция для вашего стола: свежие продукты, консервация, сладости." },
  { id: 8, name: "Игрушки", slug: "igrushki", image: "/images/toys.png", description: "Для детей разных возрастов: игрушки, развивающие игры и наборы." },
  { id: 9, name: "Косметика и парфюмерия", slug: "kosmetika-i-parfyumeriya", image: "/images/cosmetics.png", description: "Красота и уход за собой: косметика, парфюмерия и аксессуары." },
  { id: 10, name: "Техника для кухни", slug: "tekhnika-dlya-kukhni", image: "/images/kitchen-appliances.png", description: "Современная бытовая техника для вашего удобства на кухне." },
]);



// 📌 Fake дочерние категории
const fakeCategoryChildren = ref({
  electronika: [
    { id: 11, name: "Смартфоны", slug: "smartfony", description: "Современные смартфоны с новейшими функциями." },
    { id: 12, name: "Ноутбуки", slug: "noutbuki", description: "Мощные ноутбуки для работы и игр." },
    { id: 13, name: "Телевизоры", slug: "televizory", description: "Телевизоры с высокой четкостью и современными технологиями." },
    { id: 14, name: "Фотоаппараты", slug: "fotoapparaty", description: "Камеры для профессионалов и любителей фотографии." },
    { id: 15, name: "Наушники", slug: "naushniki", description: "Наушники для качественного звука и комфорта." },
    { id: 16, name: "Игровые приставки", slug: "igrovye-pristavki", description: "Лучшие игровые приставки для геймеров." },
    { id: 17, name: "Планшеты", slug: "planshety", description: "Планшеты для работы и развлечений." },
    { id: 18, name: "Камеры видеонаблюдения", slug: "kamery-videonablyudeniya", description: "Системы видеонаблюдения для безопасности вашего дома." },
    { id: 19, name: "Принтеры", slug: "printery", description: "Принтеры для дома и офиса." },
    { id: 20, name: "Жесткие диски", slug: "zhestkie-diski", description: "Хранение данных на надежных жестких дисках." },
    { id: 21, name: "Роутеры", slug: "routery", description: "Роутеры для стабильного интернета в вашем доме." },
    { id: 22, name: "Мониторы", slug: "monitory", description: "Мониторы для работы и игр, с высоким разрешением." },
  ],
  odezhda: [
    { id: 25, name: "Мужская одежда", slug: "muzhskaya-odezhda", description: "Стильная и комфортная одежда для мужчин." },
    { id: 26, name: "Женская одежда", slug: "zhenskaya-odezhda", description: "Модная и удобная одежда для женщин." },
    { id: 27, name: "Детская одежда", slug: "detskaya-odezhda", description: "Одежда для детей: комфорт и стиль." },
    { id: 28, name: "Обувь", slug: "obuv", description: "Широкий выбор обуви на любой случай." },
    { id: 29, name: "Аксессуары", slug: "aksessuary", description: "Аксессуары, которые дополнят ваш стиль." },
  ],
  knigi: [
    { id: 30, name: "Фантастика", slug: "fantastika", description: "Книги о фантастических мирах и неизведанных реальностях." },
    { id: 31, name: "Детективы", slug: "detektivy", description: "Захватывающие детективы с неожиданными развязками." },
    { id: 32, name: "Романтика", slug: "romantika", description: "Литература для любителей романтических историй." },
    { id: 33, name: "Бизнес и экономика", slug: "biznes-i-ekonomika", description: "Книги о бизнесе, экономике и успехе." },
    { id: 34, name: "Научная литература", slug: "nauchnaya-literatura", description: "Трудные, но увлекательные книги по науке и исследованиям." },
    { id: 35, name: "Иностранные языки", slug: "inostrannye-yazyki", description: "Учебники и пособия по изучению иностранных языков." },
  ],
  tovary_dlya_doma: [
    { id: 36, name: "Мебель", slug: "mebel", description: "Мебель для дома и офиса, стильная и комфортная." },
    { id: 37, name: "Текстиль для дома", slug: "tekstil-dlya-doma", description: "Текстильные изделия для дома: от штор до постельного белья." },
    { id: 38, name: "Посуда", slug: "posuda", description: "Качественная посуда для кухни и обеденных столов." },
    { id: 39, name: "Освежители воздуха", slug: "osvezhiteli-vozdukha", description: "Освежители для дома с различными ароматами." },
    { id: 40, name: "Аксессуары для ванной", slug: "aksessuary-dlya-vannoy", description: "Все для вашей ванной: коврики, полотенца и аксессуары." },
  ],
  sportivnye_tovary: [
    { id: 41, name: "Оборудование для фитнеса", slug: "oborudovanie-dlya-fitnesa", description: "Тренажеры и оборудование для фитнеса." },
    { id: 42, name: "Одежда для спорта", slug: "odezhda-dlya-sporta", description: "Спортивная одежда для комфортных тренировок." },
    { id: 43, name: "Аксессуары для спорта", slug: "aksessuary-dlya-sporta", description: "Все необходимое для спортивных занятий." },
  ],
  avtotovary: [
    { id: 44, name: "Запчасти", slug: "zapchasti", description: "Запчасти для автомобилей разных марок." },
    { id: 45, name: "Аксессуары для автомобилей", slug: "aksessuary-dlya-avtomobiley", description: "Дополнительные аксессуары для улучшения автомобиля." },
    { id: 46, name: "Автомобильные гаджеты", slug: "avtomobilnye-gadzhety", description: "Гаджеты и устройства для вашего автомобиля." },
  ],
  produkty_pitaniya: [
    { id: 47, name: "Свежие продукты", slug: "svezhie-produkty", description: "Свежие продукты питания для вашего стола." },
    { id: 48, name: "Консервация", slug: "konservatsiya", description: "Консервация, которая всегда под рукой." },
    { id: 49, name: "Сладости", slug: "sladosti", description: "Вкусные сладости для всей семьи." },
  ],
  igrushki: [
    { id: 50, name: "Игрушки для мальчиков", slug: "igrushki-dlya-malchikov", description: "Игрушки для маленьких мужчин." },
    { id: 51, name: "Игрушки для девочек", slug: "igrushki-dlya-devochek", description: "Игрушки для маленьких принцесс." },
    { id: 52, name: "Развивающие игрушки", slug: "razvivayushchie-igrushki", description: "Игрушки, развивающие умственные и физические способности." },
  ],
  kosmetika_i_parfyumeriya: [
    { id: 53, name: "Косметика для лица", slug: "kosmetika-dlya-lica", description: "Косметика для ухода за кожей лица." },
    { id: 54, name: "Парфюмерия", slug: "parfyumeriya", description: "Ароматы, которые подчеркнут вашу индивидуальность." },
    { id: 55, name: "Косметика для тела", slug: "kosmetika-dlya-tela", description: "Уход за телом с помощью лучших косметических средств." },
  ],
  tekhnika_dlya_kukhni: [
    { id: 56, name: "Блендеры", slug: "blender", description: "Блендеры для легкого приготовления пищи." },
    { id: 57, name: "Миксеры", slug: "miksery", description: "Миксеры для быстрой и удобной готовки." },
    { id: 58, name: "Кофеварки", slug: "kofevarki", description: "Кофеварки для приготовления вкусного кофе." },
  ],
});

// 📌 Fake kategoriyalarni saqlash
store.setCategories(fakeCategories.value);

// 📌 Default faol kategoriya
watchEffect(() => {
  if (!store.activeCategory && fakeCategories.value.length) {
    store.setActiveCategory(fakeCategories.value[0]);
  }
});

// 📌 URL bo‘yicha faol kategoriya o‘zgarishi
watch(
  () => route.params.slug,
  (newSlug) => {
    const matchedCategory = fakeCategories.value.find((c) => c.slug === newSlug);
    if (matchedCategory) {
      store.setActiveCategory(matchedCategory);
    }
  },
  { immediate: true }
);

// 📌 Faol kategoriya o‘zgarganda bolalar kategoriyalarni yangilash
watchEffect(() => {
  if (store.activeCategory?.slug) {
    const replaceSlug = store.activeCategory.slug.replaceAll('-','_')
    store.setCategoryChildren(fakeCategoryChildren.value[replaceSlug] || []);
  }
});
</script>

<template>  
<div class="absolute top-[75px] left-0 w-full z-[1050] transition-transform duration-500">
    <Container>
      <nav class="grid grid-cols-[264px_1fr] relative z-1000 bg-white shadow-xl rounded-b-sm">
        <aside>
          <ul class="border-r border-solid text-text-blue-1 ] border-gray-300 w-[264px]  p-5">
            <CatalogMenuListItem
              v-for="category in store.categories"
              :key="category.id"
              :category="category"
            />
          </ul>
        </aside>
        <div class="mb-8 ml-8 ">
          <NuxtLink
            :to="`/category/${store.activeCategory?.slug}`"
            class="capitalize mt-[9px] font-semibold text-lg flex items-center text-text-blue-1 hover:text-header-primary transition-colors"
          >
            {{ store.activeCategory?.name || store.categories[0]?.name }}
          </NuxtLink>
          <div v-if="store.categoryChildren.length > 0" class="flex flex-wrap content-start h-full">
            <div
              v-for="childrenCategory in store.categoryChildren"
              :key="childrenCategory.id"
              class="flex flex-col w-1/2 xl:w-1/3 mt-2"
            >
              <NuxtLink
                :to="`/category/${childrenCategory.slug}`"
                class="mb-2 leading-4 text-sm capitalize hover:text-text-blue-1"
              >
                {{ childrenCategory.name }}
              </NuxtLink>
              <div>
                <div
                  v-for="child in childrenCategory.children"
                  :key="child.id"
                  class="mb-[9px] last:mb-0 overflow-hidden text-ellipsis text-nowrap"
                >
                  <NuxtLink
                    :to="`/category/${child.slug}`"
                    class="text-xs leading-[1.2em] transition-colors text-text-gray hover:text-header-primary capitalize"
                  >
                    {{ child.name }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Container>
    <div class="shadow"></div>
  </div>
</template>
