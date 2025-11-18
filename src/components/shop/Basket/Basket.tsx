import React from 'react'
import { View } from 'react-native';
import { RootState } from '@/src/stores';
import { createSelector } from '@reduxjs/toolkit';
import { Text } from '@/src/components/ui/text';
import ProductQuantityControl from '../ProductDisplay/QuantityControl';
import { useSelector } from 'react-redux';


const ProductDisplay = ({ }) => {
        const selectBasket = (state: RootState) => state.basket;
        
        const basketItems = createSelector(
                [selectBasket],
                (basket) => Object.values(basket)
        )
        const basket = useSelector(basketItems);

        return (
                <View className="flex flex-col self-center justify-between w-full max-w-[750]">
                        {basket?.map(product_info =>
                                <View className='flex flex-row items-center justify-between w-full px-5' key={product_info.name + "_" + product_info.amount}>
                                        <Text>{product_info.name}</Text>
                                        <ProductQuantityControl product={product_info} />
                                </View>
                        )}
                </View>
        )
}

export default ProductDisplay