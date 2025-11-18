import { Skeleton } from '@/src/components/ui/skeleton';
import { Text } from '@/src/components/ui/text';
import { useScaledColumns } from '@/src/hooks/useScaledColumns';
import { Product } from '@/src/types/product';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { FlatList } from 'react-native';
import ProductCard from './Card';

interface Props {
        product: Product | undefined,
        isLoading: boolean
}


const Detail = ({ product, isLoading }: Props) => {

        if (isLoading) {
                return <View>
                        
                </View>
        }

        return (
                <View className='flex flex-1 ' key={item.id}>
                        <Text>Words</Text>
                </View>
        )
}

export default Detail