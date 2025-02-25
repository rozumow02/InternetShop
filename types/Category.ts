export interface Category {
    id: number;
    name: string;
    slug: string;
    image?: string; // Ixtiyoriy, kategoriya rasmi bo‘lishi mumkin
    children?: CategoryChildren[]; // Bolalar kategoriyasi
  }
  
  export interface CategoryChildren {
    id: number;
    name: string;
    slug: string;
    children?: CategoryChildren[]; // Ichki kategoriyalar (nested)
  }
  