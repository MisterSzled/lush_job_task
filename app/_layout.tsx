import '@/global.css';

import { NAV_THEME } from '@/lib/theme';
import { ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from 'react';

import { Provider } from "react-redux";
import { store } from "@/src/stores"

export {
        ErrorBoundary,
} from 'expo-router';

export default function RootLayout() {
        const { colorScheme } = useColorScheme();

        const [queryClient] = useState(() => new QueryClient())

        return (
                <QueryClientProvider client={queryClient}>
                        <Provider store={store}>

                                <ThemeProvider value={NAV_THEME[colorScheme ?? 'light']}>
                                        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
                                        <Stack screenOptions={{ headerShown: false }} />
                                        <PortalHost />
                                </ThemeProvider>
                        </Provider>

                </QueryClientProvider>
        );
}
