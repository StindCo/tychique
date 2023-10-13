import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
  Button,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Cog8ToothIcon,
} from "react-native-heroicons/outline";
import Stepper from "../components/Stepper";
import { Picker } from "@react-native-picker/picker";
import CustomToast from "../components/CustomToast";
import { registerNewEmployee } from "../services/AccountManager";

export default function PasswordPerdu({ route, navigation }) {
  // const navigation = useNavigation();

  const [fullname, onChangeFullname] = React.useState("");
  const [age, onchangeAge] = React.useState("");
  const [address, onchangeAddress] = React.useState("");
  const [step, setStep] = React.useState(0);
  const [experience, setExperience] = React.useState("");
  let [profession, setProfession] = useState("");
  const [sexe, setSexe] = useState("M");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordToConfirm, setPasswordToConfirm] = React.useState("");

  const [isPasswordValid, setIsPasswordValid] = React.useState(true);

  let validateGenerale = () => {
    if (fullname == "") {
      CustomToast("Veuillez préciser votre nom complet !");
      return;
    }

    if (age == "") {
      CustomToast("Veuillez préciser votre âge !");
      return;
    }

    if (address == "") {
      CustomToast("Veuillez préciser votre adresse !");
      return;
    }

    setStep(1);
  };

  let validateProfession = () => {
    if (profession == "") {
      CustomToast("Veuillez préciser votre profession !");
      return;
    }

    if (experience == "") {
      CustomToast("Veuillez préciser le nombre d'années d'expériences ?");
      return;
    }

    setStep(2);
  };

  let validateAccount = async () => {
    if (phoneNumber == "") {
      CustomToast("Veuillez renseigner votre numéro de téléphone !");
      return;
    }

    if (password == "") {
      CustomToast("Veuillez préciser votre mot de passe !");
      return;
    }

    if (password != passwordToConfirm) {
      CustomToast("Les deux mots de passe ne sont pas identiques !");
      return;
    }

    let response = await registerNewEmployee({
      username: phoneNumber,
      phoneNumber: phoneNumber,
      password: password,
      experience: experience,
      age: age,
      sexe: sexe,
      fullname: fullname,
      usernameType: 1,
      address: address,
      jobCategoriesIds: [profession],
    });

    if (response) navigation.navigate("WelcomeScreen");
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView
      style={tw`relative flex-1 flex-col min-h-full text-center  justify-center bg-[#ec008c]`}
    >
      <View style={tw`text-left pt-7`}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={tw`items-center mx-4 mt-5 mt-10 opacity-90 justify-center h-13 w-13 bg-white rounded-full`}
        >
          <ArrowLeftIcon size={20} color="#2e3192" />
        </TouchableOpacity>

        <View
          style={tw`items-center justify-center mx-auto my-15 h-36 w-36 bg-white rounded-full`}
        >
          <Cog8ToothIcon color={"#2e3192"} size={100} style={tw`font-bold`} />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[
          tw`bg-white flex-1 p-4 z-10`,
          {
            borderTopLeftRadius: 70,
            borderTopRightRadius: 5,
            borderCurve: "circular",
          },
        ]}
      >
        <Text
          style={[
            tw`text-xl text-gray-700 text-center px-5 pt-8 pb-5`,
            { fontFamily: "PoppinsBold" },
          ]}
        >
          Récupération du compte
        </Text>

        <View style={tw.style(step != 0 && "hidden")}>
          <View style={tw`px-4 pt-4`}>
            <Text style={tw`px-1 pb-4 text-base text-center`}>
              Quel est votre numéro de téléphone ?
            </Text>
            <TextInput
              style={[
                tw`px-4 py-3 mb-7 text-[#000] rounded z-1 text-center border-opacity-20 border-gray-500 bg-[#eeeeee]`,
                { fontFamily: "Poppins" },
              ]}
              onChangeText={onChangeFullname}
              value={fullname}
              placeholder={"Entrez votre numéro de téléphone "}
              keyboardType="phone-pad"
            />

            <View style={tw`w-full`}>
              <TouchableOpacity
                onPress={() => {
                  validateGenerale();
                }}
                style={tw`bg-gray-900 text-white px-5 py-3 rounded justify-center items-center mt-2`}
              >
                <Text
                  style={[
                    tw`text-white p-1 text-base`,
                    { fontFamily: "Poppins" },
                  ]}
                >
                  Soumettre le formulaire
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={tw`pt-10`}></View>
      </ScrollView>
    </SafeAreaView>
  );
}
