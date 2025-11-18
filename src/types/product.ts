export interface Product {
        category?: (string)[] | null;

        description: string;

        minPrice: string;
        maxPrice: string;

        currency: string;

        slug: string;
        id: string;
        objectID: string;

        name: string;

        isAvailableForPurchase: boolean;
        isAvailable: boolean;

        thumbnail: Thumbnail;
        
        productType: ProductType;

        collections?: (CollectionsEntity)[] | null;

        __typename: string;
}
export interface Thumbnail {
        url: string;
        alt: string;
        __typename: string;
}
export interface ProductType {
        slug: string;
        hasVariants: boolean;
        __typename: string;
}
export interface CollectionsEntity {
        name: string;
        slug: string;
        __typename: string;
}
