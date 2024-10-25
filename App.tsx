import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./navigation/TabNavigation";
import { useEffect } from "react";
import { getLocalStorageTheme } from "./const/utils/localStorage";
import { useThemeStore } from "./states/useThemeStore";

export default function App() {
  const { setTheme } = useThemeStore();

  useEffect(() => {
    getLocalStorageTheme().then((theme) => setTheme(theme as "light" | "dark"));
  }, []);

  return (
    <NavigationContainer>
      <TabNavigation />
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
