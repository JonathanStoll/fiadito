export interface ThemeColors {
    primary: string;
    secondary: string;
    background: string;
    buttonText: string;
    text: string;
    disabled: string;
    success: string;
    warning: string;
    danger: string;
}

export const lightColors: ThemeColors = {
    primary: '#007AFF',
    secondary: '#FF9500',
    background: '#F3F2F7',
    buttonText: '#FFFFFF',
    text: '#000000',
    disabled: '#C4C4C4',
    success: '#4cc9f0',
    warning: '#fca311',
    danger: '#e71d36',
};

export const darkColors: ThemeColors = {
    primary: '#FF9500',
    secondary: '#007AFF',
    background: '#1C1C1E',
    buttonText: '#FFFFFF',
    text: '#FFFFFF',
    disabled: '#3A3A3C',
    success: '#4cc9f0',
    warning: '#fca311',
    danger: '#e71d36',
};

