import type { Endpoint } from "./types"
import { products } from "./mocks/products";

export const ENDPOINTS: Record<string, Endpoint> = {
        "PRODUCTS": {
                key: "PRODUCTS",
                path: "/products",
                method: "GET",
                mock: products
        },
} as const