import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { useEffect } from "react";
import { getLocalStorageTheme } from "./const/utils/localStorage";
import { useThemeStore } from "./states/useThemeStore";
import StackNavigation from "./navigation/StackNavigation";

export default function App() {
  const { setTheme } = useThemeStore();

  useEffect(() => {
    getLocalStorageTheme().then((theme) => setTheme(theme as "light" | "dark"));
  }, []);

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
