import { Specification } from "./specification";

export interface Product {
    id: number,
    name: string,
    thumbnail: string,
    description: string,
    specification: Specification [],
    features: string [],
    price: number,
    actualPrice: number,
    discount: number,
    save: number,
}
