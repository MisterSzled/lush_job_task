import * as React from 'react';
import { useProducts } from '@/src/hooks/useProducts';
import Display from '@/src/components/shop/ProductDisplay/ProductsDisplay';

export default function Screen() {
        const { data, isLoading, isError } = useProducts();

        return (
                <Display products={data} isLoading={isError} />
        );
}