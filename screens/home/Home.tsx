import { View, Text, Pressable } from "react-native";
import { useThemeStore } from "../../states/useThemeStore";

export const Home = () => {
  const { toggleTheme, currentColors } = useThemeStore();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: currentColors.background,
        padding: "5%",
      }}
    >
      <Pressable
        onPress={toggleTheme}
        style={{
          padding: 10,
          backgroundColor: currentColors.primary,
          borderRadius: 5,
          alignSelf: "center",
        }}
      >
        <Text style={{ color: currentColors.buttonText }}>Toggle theme</Text>
      </Pressable>
    </View>
  );
};
