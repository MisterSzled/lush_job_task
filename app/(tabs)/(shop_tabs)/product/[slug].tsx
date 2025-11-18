import * as React from 'react';
import { FlatList, View } from 'react-native';
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
                <View className="flex items-center justify-center">

                        <FlatList
                                data={[data]}
                                key={1}
                                numColumns={1}
                                contentContainerStyle={{
                                        margin: 16,
                                        gap: 16
                                }}
                                renderItem={({ item }) => (
                                        <View className='flex flex-1 ' key={item.id}>
                                                <ProductCard product={data} describe />
                                        </View>
                                )}
                        />
                </View>

        );
}