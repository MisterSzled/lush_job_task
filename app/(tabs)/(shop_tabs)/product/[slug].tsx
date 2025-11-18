import * as React from 'react';
import Detail from '@/src/components/shop/ProductDisplay/Detail';
import { View } from 'react-native';
import { Text } from '@/src/components/ui/text';
import { useProduct } from '@/src/hooks/useProduct';
import { useLocalSearchParams } from 'expo-router';

export default function Screen() {
        const product_slug = useLocalSearchParams().slug;
        const { data, isLoading, isError } = useProduct(product_slug as string);

        console.log(data)

        return (
                <View>
                        <Text>Words</Text>
                </View>
        );
}