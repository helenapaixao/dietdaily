import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Home} from "../screens/Home";
import NewFood from "../screens/NewFood";
import { RootStackParamList } from "../types";

//import Statistics from "@screens/Statistics";
//import FeedBack from "@components/FeedBack";
const Stack = createNativeStackNavigator<RootStackParamList>();
export const AppRoutes = () => {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator
      screenOptions={{
        headerShown: true,
        contentStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="NewFood"
        component={NewFood}
        options={{
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          title: "Nova refeição",
          headerStyle: {
            backgroundColor: "#DDDEDF",
          },
          headerTintColor: "#1B1D1E",
          headerTitleStyle: {
            fontFamily: "Nunito_700Bold",
            fontWeight: "bold",
          },
        }}
      />
      <Screen
        name="Statistics"
        component={Home}
        options={{
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          title: "",
          headerTitle: undefined,
          headerStyle: {
            backgroundColor: "#E5F0DB",
          },
          headerTintColor: "#639339",
        }}
      />
      <Screen
        name="FeedBack"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};
