import { Tabs } from 'expo-router';
import { ShoppingBag, ShoppingBasket } from 'lucide-react-native';
import React from 'react';

export {
        ErrorBoundary,
} from 'expo-router';

export default function RootLayout() {
        return (
                <Tabs screenOptions={{
                        headerShown: false,
                        tabBarStyle: {
                                height: 55
                        }
                }}>

                        <Tabs.Screen
                                name="shop"
                                options={{
                                        title: "Shop",
                                        tabBarIcon: ({ color, size }) => (
                                                <ShoppingBag size={size} color={color} />
                                        )
                                }}
                        />
                        <Tabs.Screen
                                name="basket"
                                options={{
                                        title: "Basket",
                                        tabBarIcon: ({ color, size }) => (
                                                <ShoppingBasket size={size} color={color} />
                                        )
                                }}
                        />

                        <Tabs.Screen
                                name="product/[slug]"
                                options={{
                                        title: "(stacks)",
                                        href: null,
                                        
                                }}
                        />
                </Tabs>
        );
}
