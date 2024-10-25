import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../screens/login/Login";
import TabNavigation from "./TabNavigation";

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HomeScreen" component={TabNavigation} />
    </Stack.Navigator>
  );
}
