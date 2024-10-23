export const globalColors = {
    primary: '#007AFF',
    secondary: '#FF9500',
    background: '#F5F5F7',
    text: '#000000',
    disabled: '#C4C4C4',
}

export const globalStyles = {
    container: {
        flex: 1,
        backgroundColor: globalColors.background,
        padding: 10,
    },
    text: {
        color: globalColors.text,
        fontSize: 16,
    },
    textBold: {
        fontWeight: 'bold',
        color: globalColors.text,
    },
    btnPrimary: {
        backgroundColor: globalColors.primary,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    }
}
