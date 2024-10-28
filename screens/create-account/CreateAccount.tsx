import { Text, View } from "react-native";
import { CreateAccountForm } from "./CreateAccountForm";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const CreateAccount = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ marginTop: top, flex: 1 }}>
      <CreateAccountForm />
    </View>
  );
};
