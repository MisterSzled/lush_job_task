import { Product } from '@/src/types/product';
import { Text } from '@/src/components/ui/text';
import { Card } from '@/src/components/ui/card';
import React from 'react'
import { Image, View } from 'react-native';
import ProductBanner from './Banner';
import ProductQuantityButton from './QuantityButton';
import ProductQuantityControl from './QuantityControl';

interface Props {
        product: Product,
}

const ProductCard = ({ product }: Props) => {

        const is_best_seller = product?.collections?.some(collection => collection.slug === "bestsellers");

        return (
                <Card className='flex justify-between w-full h-full pt-0 pb-2 bg-transparent border-none'>
                        <Image
                                className="w-full"
                                alt={product.thumbnail.alt}
                                resizeMode='cover'
                                style={{
                                        aspectRatio: 1.2
                                }}
                                source={{
                                        uri: product.thumbnail.url,
                                }}
                        />
                        {is_best_seller && <ProductBanner variant="bestsellers" />}

                        <View className="flex ">
                                <View className='flex flex-col gap-2'>
                                        {product?.category?.map(category =>
                                                <Text className='text-sm' key={product.id + category}>
                                                        {category}
                                                </Text>
                                        )}
                                </View>

                                <Text className='text-xl font-semibold'>
                                        {product.name}
                                </Text>
                                <Text className='text-base font-semibold'>
                                        £{product.minPrice}
                                </Text>


                                <ProductQuantityControl product={product} />
                        </View>

                </Card>
        )
}

export default ProductCard