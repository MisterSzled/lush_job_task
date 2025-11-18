import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../api/fetcher"
import { ENDPOINTS } from "../api/endpoints/endpoints";
import type { Product } from "../types/product"

export function useProducts() {
        return useQuery({
                queryKey: ["products"],
                queryFn: () => fetcher<Product[]>(ENDPOINTS.PRODUCTS)
        })
}