import AsyncStorage from "@react-native-async-storage/async-storage"






export const getLocalStorageTheme = async () => {

    const localTheme = await AsyncStorage.getItem('theme')
    if (!localTheme) return 'light'
    return localTheme

}


export const setLocalStorageTheme = async (theme: 'light' | 'dark') => {

    await AsyncStorage.setItem('theme', theme)


}


