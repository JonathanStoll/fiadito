import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../screens/login/Login";
import TabNavigation from "./TabNavigation";
import { CreateAccount } from "../screens/create-account/CreateAccount";

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="HomeScreen" component={TabNavigation} />
    </Stack.Navigator>
  );
}
