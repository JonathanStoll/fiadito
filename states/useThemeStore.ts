import { create } from 'zustand';
import { darkColors, lightColors, ThemeColors } from '../const/styles';
import { setLocalStorageTheme } from '../const/utils/localStorage';
interface ThemeState {
    theme: 'light' | 'dark',
    toggleTheme: () => void
    currentColors: ThemeColors
    setTheme: (themeUser: 'light' | 'dark') => void
}

export const useThemeStore = create<ThemeState>()((set, get) => ({
    theme: 'light',
    currentColors: lightColors,
    toggleTheme: async () => {
        const themeUser = get().theme === 'light' ? 'dark' : 'light'
        set({ theme: themeUser, currentColors: themeUser === "light" ? lightColors : darkColors })
        await setLocalStorageTheme(themeUser)
    },
    setTheme: async (themeUser) => {
        set({ theme: themeUser, currentColors: themeUser === "light" ? lightColors : darkColors })
        await setLocalStorageTheme(themeUser)
    }

}))
