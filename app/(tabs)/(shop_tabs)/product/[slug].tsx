import * as React from 'react';
import { View } from 'react-native';
import { useProduct } from '@/src/hooks/useProduct';
import { useLocalSearchParams } from 'expo-router';
import ProductCard from '@/src/components/shop/ProductDisplay/Card';
import { Skeleton } from '@/src/components/ui/skeleton';

export default function Screen() {
        const product_slug = useLocalSearchParams().slug;
        const { data, isLoading, isError } = useProduct(product_slug as string);

        if (isLoading || !data) {
                return <View>
                        <Skeleton key={"product"} className="h-[20px] w-[100px] rounded-full" />
                </View>
        }

        return (
                <View className='flex items-center justify-center mx-2'>
                        <ProductCard product={data} describe/>
                </View>
        );
}