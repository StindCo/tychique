import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Button,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import { ArrowLeftIcon, ArrowRightIcon } from "react-native-heroicons/outline";
import Stepper from "../components/Stepper";
import { Picker } from "@react-native-picker/picker";
import CustomToast from "../components/CustomToast";
import { registerNewEmployer } from "../services/AccountManager";

export default function InscriptionEmployerScreen() {
  const navigation = useNavigation();
  const [fullname, onChangeFullname] = React.useState("");
  const [age, onchangeAge] = React.useState("");
  const [address, onchangeAddress] = React.useState("");
  const [step, setStep] = React.useState(0);
  const [experience, setExperience] = React.useState();
  let [typeEmployer, setTypeEmployer] = useState("2");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordToConfirm, setPasswordToConfirm] = React.useState("");

  let validateGenerale = () => {
    if (fullname == "") {
      CustomToast("Veuillez préciser votre nom complet !");
      return;
    }

    if (typeEmployer == "") {
      CustomToast("Veuillez précicer le type de compte");
      return;
    }

    if (address == "") {
      CustomToast("Veuillez préciser votre adresse !");
      return;
    }

    setStep(1);
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

    let response = await registerNewEmployer({
      username: phoneNumber,
      phoneNumber: phoneNumber,
      password: password,
      typeEmployer: typeEmployer,
      address: address,
      fullname: fullname,
      usernameType: 1,
    });

    if (response) navigation.navigate("WelcomeScreen");
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={tw`flex-1`}>
      <View
        style={tw`relative flex-col min-h-full text-center  justify-center bg-[#ec008c]`}
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

          <Stepper active={step} />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[
            tw`bg-white flex-1 p-4`,
            { borderTopLeftRadius: 40, borderTopRightRadius: 40 },
          ]}
        >
          <View style={tw.style(step != 0 && "hidden")}>
            <Text
              style={[
                tw`text-xl text-gray-700 text-center px-5 pt-5 pb-5`,
                { fontFamily: "PoppinsBold" },
              ]}
            >
              Informations Générales
            </Text>

            <View style={tw`px-4 pt-4`}>
              <Text style={tw`px-1 pb-4 text-base text-center`}>
                Quel type de compte voulez créer ?
              </Text>
              <Picker
                style={tw`px-4 pt-1 pb-4 text-[#000] rounded-xl text-center border-opacity-20 border-gray-500 bg-[#eeeeee]`}
                selectedValue={typeEmployer}
                onValueChange={setTypeEmployer}
              >
                <Picker.Item label="Compte individu" value="2" />
                <Picker.Item label="Compte entreprise" value="1" />
              </Picker>
              <Text style={tw`px-1 pb-4 mt-4 text-base text-center`}>
                Quel est votre nom complet ?
              </Text>

              <TextInput
                style={[
                  tw`px-4 py-3 mb-7 text-[#000] rounded text-center border-opacity-20 border-gray-500 bg-[#eeeeee]`,
                  { fontFamily: "Poppins" },
                ]}
                onChangeText={onChangeFullname}
                value={fullname}
                placeholder={"exemple: Louis Katoto Nzuzi"}
                keyboardType="default"
              />

              <Text style={tw`px-1 pb-4 text-base text-center`}>
                Quelle est votre adresse actuelle ?
              </Text>
              <TextInput
                style={[
                  tw`px-4 pt-1 pb-4 text-[#000] rounded text-center border-opacity-20 border-gray-500 bg-[#eeeeee]`,
                  { fontFamily: "Poppins" },
                ]}
                multiline
                numberOfLines={4}
                onChangeText={onchangeAddress}
                value={address}
                placeholder="Exemple: 132, avenue Lolo, quartier Mbuta, Commune Kinshasa, Kinshasa"
                keyboardType="default"
              />
              <View style={tw`flex-row justify-end`}>
                <TouchableOpacity
                  onPress={() => {
                    validateGenerale();
                  }}
                  style={tw`bg-gray-900 text-white px-5 py-3 rounded justify-center items-center mt-5`}
                >
                  <ArrowRightIcon
                    size={20}
                    style={tw`text-center`}
                    color="#ffffff"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={tw.style(step != 1 && "hidden")}>
            <Text
              style={[
                tw`text-xl text-gray-700 text-center px-5 pt-5 pb-5`,
                { fontFamily: "PoppinsBold" },
              ]}
            >
              Aidez-nous à securiser votre compte
            </Text>

            <View style={tw`px-4 pt-5`}>
              <Text style={tw`px-1 pb-4 text-base text-center`}>
                Quel est votre numéro de téléphone ?
              </Text>
              <TextInput
                style={[
                  tw`px-4 py-3 mb-5 text-[#000] rounded text-center border-opacity-20 border-gray-500 bg-[#eeeeee]`,
                  { fontFamily: "Poppins" },
                ]}
                onChangeText={setPhoneNumber}
                value={phoneNumber}
                placeholder={"+243 000000000"}
                keyboardType="phone-pad"
              />
              <Text style={tw`px-1 pb-4 text-base text-center`}>
                Ecrivez votre mot de passe.
              </Text>

              <TextInput
                style={[
                  tw`px-4 py-3 mb-8 text-[#000] rounded text-center border-opacity-20 border-gray-500 bg-[#eeeeee]`,
                  { fontFamily: "Poppins" },
                ]}
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
                placeholder={"6 caractères minimum"}
                keyboardType="default"
              />
              <Text style={tw`px-1 pb-4 text-base text-center`}>
                Réecrivez votre mot de passe.
              </Text>

              <TextInput
                style={[
                  tw`px-4 py-3 mb-8 text-[#000] rounded text-center border-opacity-20 border-gray-500 bg-[#eeeeee]`,
                  { fontFamily: "Poppins" },
                ]}
                onChangeText={setPasswordToConfirm}
                value={passwordToConfirm}
                secureTextEntry={true}
                placeholder={"Le même mot de passe"}
                keyboardType="default"
              />

              <View style={tw`w-full`}>
                <TouchableOpacity
                  onPress={() => {
                    validateAccount();
                  }}
                  style={tw`bg-gray-800 text-white px-5 py-3 rounded justify-center items-center mt-1`}
                >
                  <Text
                    style={[
                      tw`text-white p-1 text-base`,
                      { fontFamily: "Poppins" },
                    ]}
                  >
                    Créer votre compte
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={tw`pt-10`}></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
