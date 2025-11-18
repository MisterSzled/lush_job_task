import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../api/fetcher"
import { ENDPOINTS } from "../api/endpoints/endpoints";
import type { Product } from "../types/product"

export function useProduct(slug: string) {
        return useQuery({
                queryKey: ["product", slug],
                queryFn: () => fetcher<Product>(ENDPOINTS.PRODUCT, undefined, {slug: slug} ),
                enabled: !!slug
        })
}