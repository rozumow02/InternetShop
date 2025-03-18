export interface IProduct {
    id: string | number
    name: string
    price: number
    originalPrice?: number
    imageUrl: string
    isNew?: boolean
    quantity: number;
}