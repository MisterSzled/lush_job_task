import { THEME } from '@/lib/theme';
import { ThemeToggle } from '@/src/components/ThemeToggle';
import { Stack } from 'expo-router';
import { useColorScheme } from 'nativewind';
export {
        ErrorBoundary,
} from 'expo-router';

const get_screen_options = (is_dark: boolean) => ({
        title: 'LUSH',
        headerTransparent: false,
        headerRight: () => <ThemeToggle />,
        headerTitleStyle: {
                fontWeight: "bold",
                color: is_dark ?
                        THEME.dark.primary :
                        THEME.light.primary
        },
}) as const;

export default function RootLayout() {
        const { colorScheme } = useColorScheme();

        const SCREEN_OPTIONS = get_screen_options(colorScheme === "dark");
        
        return (
                <Stack>
                        <Stack.Screen name="(shop_tabs)" options={SCREEN_OPTIONS} />
                </Stack>
        );
}
