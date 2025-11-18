import { Skeleton } from '@/src/components/ui/skeleton';
import { Text } from '@/src/components/ui/text';
import { useScaledColumns } from '@/src/hooks/useScaledColumns';
import { Product } from '@/src/types/product';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { FlatList } from 'react-native';
import ProductCard from './Card';

interface Props {
        products: Product[] | undefined,
        isLoading: boolean
}

function get_wrapper_styles(cols: number): StyleProp<ViewStyle> | undefined {
        if (cols <= 1) return undefined

        return {
                gap: 16,
                justifyContent: "space-around"
        }
}

const ProductDisplay = ({ products, isLoading }: Props) => {
        const numCols = useScaledColumns();
        const wrapper_styles = get_wrapper_styles(numCols);

        if (isLoading) {
                return <View>
                        {[...Array(10).keys()].map(i =>
                                <Skeleton key={"product_" + i} className="h-[20px] w-[100px] rounded-full" />
                        )}
                </View>
        }

        return (
                <FlatList
                        data={products}
                        key={numCols}
                        numColumns={numCols}
                        contentContainerStyle={{
                                margin: 16,
                                gap: 16
                        }}
                        columnWrapperStyle={wrapper_styles}
                        renderItem={({ item }) => (
                                <View className='flex flex-1 ' key={item.id}>
                                        <ProductCard product={item} />
                                </View>
                        )}
                />
        )
}

export default ProductDisplay