import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LoginForm } from "./LoginForm";

export const Login = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ marginTop: top, flex: 1 }}>
      <LoginForm />
    </View>
  );
};
