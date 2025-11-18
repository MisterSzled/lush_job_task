import type { Endpoint } from "./types"
import { products } from "./mocks/products";
import { product } from "./mocks/product";

export const ENDPOINTS: Record<string, Endpoint> = {
        "PRODUCTS": {
                key: "PRODUCTS",
                path: "/products",
                method: "GET",
                mock: products
        },
        "PRODUCT": {
                key: "PRODUCT",
                path: "/product",
                method: "GET",
                mock: product
        },
} as const