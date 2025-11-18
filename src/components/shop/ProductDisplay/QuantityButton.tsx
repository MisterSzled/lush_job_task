import React, { useRef } from 'react';
import { Pressable, Animated, View } from 'react-native';
import { Plus, Minus } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';

interface Props {
        variant: "add" | "remove";
        onPress?: () => void;
}

const ProductQuantityButton = ({ variant, onPress }: Props) => {
        const scale = useRef(new Animated.Value(1)).current;
        const { colorScheme } = useColorScheme();
        const Icon = variant === "add" ? Plus : Minus

        const pulse = () => {
                Animated.sequence([
                        Animated.timing(scale, {
                                toValue: 1.5,
                                duration: 120,
                                useNativeDriver: true
                        }),
                        Animated.timing(scale, {
                                toValue: 1,
                                duration: 120,
                                useNativeDriver: true
                        }),
                ]).start()
        }

        const handlePress = () => {
                pulse();
                onPress?.();
        }

        return (
                <Pressable onPress={handlePress} >
                        <View className="items-center justify-center w-10 h-10">
                                <Animated.View
                                        style={{ transform: [{ scale }] }}
                                        className="items-center justify-center w-10 h-10 rounded-md "
                                >
                                        <Icon size={20} color={colorScheme === "dark" ? "white" : "black"} strokeWidth={2.5} />
                                </Animated.View>
                        </View>

                </Pressable>
        )
}

export default ProductQuantityButton