import React from 'react'
import { Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
        variant: "bestsellers" | "vegan-cosmetics"
}

const ProductBanner = ({ variant }: Props) => {
        if (variant !== "bestsellers") return null;

        return (
                <LinearGradient
                        colors={['#ff6b6b', '#ff8e8e']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        className="w-[35%] h-8 rounded-r-xl justify-center items-center "
                >
                        <Text className="text-xs font-bold tracking-tighter text-center text-white">
                                BEST SELLER
                        </Text>
                </LinearGradient>
        )
}

export default ProductBanner