import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import InscriptionAllScreen from "./screens/InscriptionAllScreen";
import InscriptionEmployeeScreen from "./screens/InscriptionEmployeeScreen";
import { Text } from "react-native";
import InscriptionEmployerScreen from "./screens/InscriptionEmployerScreen";
import { getCategories } from "./services/AccountManager";
const Stack = createNativeStackNavigator();
import { RootSiblingParent } from "react-native-root-siblings";
import WelcomeScreen from "./screens/WelcomeScreen";
import PasswordPerdu from "./screens/PasswordPerdu";
import { useFonts } from 'expo-font';

// SplashScreen.preventAutoHideAsync();

export default function App() {
 const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    let a = "Hello world";
    return null; 

  }

  return (
    <NavigationContainer>
      <RootSiblingParent>
        {/* <Provider store={store}> */}
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="InscriptionAll"
            component={InscriptionAllScreen}
          />
          <Stack.Screen
            name="InscriptionEmployee"
            component={InscriptionEmployeeScreen}
          />

          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="PasswordPerdu" component={PasswordPerdu} />
          <Stack.Screen
            name="InscriptionEmployer"
            component={InscriptionEmployerScreen}
          />
        </Stack.Navigator>
        {/* </Provider> */}
      </RootSiblingParent>
    </NavigationContainer>
  );
}
