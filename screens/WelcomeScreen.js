import { SafeAreaView, Image, View, Text } from "react-native";
import tw from "twrnc";
import React from "react";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import logo from "../assets/logo.png";
import {
  CheckCircleIcon,
  CheckIcon,
  Cog6ToothIcon,
} from "react-native-heroicons/outline";
import { Bar } from "react-native-progress";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const [step, setStep] = React.useState(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setStep(step >= 1 ? 1 : step + 1);
    }, 2000);
  }, [step]);

  return (
    <SafeAreaView
      style={[
        tw`absolute flex-1 inset-0 items-center justify-center bg-blue-900 pt-20`,
        tw.style(step == 1 && "bg-pink-900"),
      ]}
    >
      <View
        style={tw`items-center justify-center h-50 w-50 bg-white rounded-full`}
      >
        {step == 0 && (
          <CheckIcon color={"#ec008c"} size={130} style={tw`font-bold`} />
        )}
        {step == 1 && (
          <Cog6ToothIcon color={"#ec008c"} size={130} style={tw`font-bold`} />
        )}
      </View>
      {step == 0 && (
        <Text
          style={[
            tw`text-2xl  text-center mx-2 text-white mt-30`,
            { fontFamily: "Poppins" },
          ]}
        >
          Votre compte a été crée avec succès !
        </Text>
      )}

      {step == 1 && (
        <View style={tw`mt-30`}>
          <Bar
            progress={0.7}
            width={250}
            indeterminateAnimationDuration={2000}
            indeterminate={true}
            color="white"
          />
          <Text
            style={[
              tw`text-xl  text-center text-white mt-10`,
              { fontFamily: "Poppins" },
            ]}
          >
            Veuillez patienter
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}
