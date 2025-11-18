import { Button } from '@/src/components/ui/button';
import { Icon } from '@/src/components/ui/icon';
import { MoonStarIcon, SunIcon } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import * as React from 'react';

const THEME_ICONS = {
        light: SunIcon,
        dark: MoonStarIcon,
};

export function ThemeToggle() {
        const { colorScheme, toggleColorScheme } = useColorScheme();

        return (
                <Button
                        onPressIn={toggleColorScheme}
                        size="icon"
                        variant="ghost"
                        className="rounded-full ios:size-9 web:mx-4">
                        <Icon as={THEME_ICONS[colorScheme ?? 'light']} className="size-5" />
                </Button>
        );
}