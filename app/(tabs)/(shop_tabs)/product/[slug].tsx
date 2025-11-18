import * as React from 'react';
import { useProducts } from '@/src/hooks/useProducts';
import Detail from '@/src/components/shop/ProductDisplay/Detail';
import { View } from 'react-native';
import { Text } from '@/src/components/ui/text';

export default function Screen() {
        const { data, isLoading, isError } = useProducts();

        return (
                <View>
                        <Text>Words</Text>
                </View>
                // <Detail product={data}/>
        );
}