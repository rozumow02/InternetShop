import { defineStore } from "pinia";
import type {Category} from "@/types"
export const useMenuStore = defineStore("menu", () => {
  const categories = ref<Category[]>([]);
  const activeCategory = ref<Category | null>(null);
  const categoryChildren = ref<Category[]>([]);

  function setCategories(newCategories: Category[]) {
    categories.value = newCategories;
  }

  function setActiveCategory(category: Category) {
    activeCategory.value = category;
  }

  function setCategoryChildren(children?: Category[]) {
    if(children)
    categoryChildren.value = children;
  }

  return {
    categories,
    activeCategory,
    categoryChildren,
    setCategories,
    setActiveCategory,
    setCategoryChildren,
  };
});
