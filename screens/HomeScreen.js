import { SafeAreaView, Image, View, Text } from "react-native";
import tw from "twrnc";
import React from "react";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import logo from "../assets/logo.jpg";

export default function HomeScreen() {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 4000);
  }, [navigation]);

  return (
    <SafeAreaView
      style={tw`absolute inset-0 flex-1 items-center justify-center bg-white`}
    >
      <Animatable.View
        animation="slideInDown"
        duration={1000}
        iterationCount={3}
        direction="alternate"
      >
        <View
          style={tw`items-center justify-center h-50 w-50 bg-white rounded-full`}
        >
          <Image source={logo} style={tw`h-48 w-48`} />
        </View>
      </Animatable.View>
    </SafeAreaView>
  );
}
