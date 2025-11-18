import React from 'react'
import { View } from 'react-native';
import ProductQuantityButton from './QuantityButton';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/src/stores';

import { Text } from '@/src/components/ui/text';
import { add, remove } from '@/src/stores/reducers/basket';
import { Product } from '@/src/types/product';

interface Props {
        product: Pick<Product, 'id' | 'name'>,
}

const ProductQuantityControl = ({ product }: Props) => {
        const dispatch = useDispatch();

        const amount = useSelector(
                (state: RootState) => state.basket[product.name]?.amount ?? 0
        )

        return (
                <View className="flex flex-row w-[60%] max-w-[200]  justify-between self-center">
                        <ProductQuantityButton variant="remove" onPress={() => dispatch(remove({ id: product.id, name: product.name }))} />
                        <View className="flex items-center justify-center">
                                <Text className="flex items-center justify-center">{amount}</Text>
                        </View>
                        <ProductQuantityButton variant="add" onPress={() => dispatch(add({ id: product.id, name: product.name }))} />
                </View>
        )
}

export default ProductQuantityControl