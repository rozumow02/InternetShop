import { defineStore } from "pinia";
import image1 from "@/assets/images/image1.png";
import image2 from "@/assets/images/image2.png";
import image3 from "@/assets/images/image3.png";
import image4 from "@/assets/images/image4.png";
import type { IProduct } from "@/types";

export const useBasketStore = defineStore("basket", {
  state: () => ({
    isBasket: false,
    items: [
      {
        id: 1,
        name: "Ноутбук Lenovo",
        price: 75000,
        quantity: 1,
        imageUrl: image1, // Import qilingan rasm
      },
      {
        id: 2,
        name: "Смартфон Samsung",
        price: 50000,
        quantity: 2,
        imageUrl: image2,
      },
      {
        id: 3,
        name: "Беспроводные наушники",
        price: 15000,
        quantity: 1,
        imageUrl: image3,
      },
      {
        id: 4,
        name: "Набор сладостей - Шоколад и конфеты",
        originalPrice: 800, // Chegirma oldingi narx
        price: 600,
        quantity: 1,
        imageUrl: image4,
      },
    ] as IProduct[],
  }),
  actions: {
    addToBasket(product: IProduct) {
      const existingItem = this.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
    },

    increment(id: number) {
      console.log("id", id);
      const item = this.items.find((item) => item.id === id);
      if (item) item.quantity++;
    },
    decrement(id: number) {
      const item = this.items.find((item) => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity--;
      } else {
        this.removeItem(id);
      }
    },
    removeItem(id: number) {
      this.items = this.items.filter((item) => item.id !== id);
    },
  },
});
