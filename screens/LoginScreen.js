import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View
      style={tw`relative flex-col min-h-full text-center pt-16  justify-center bg-blue-600`}
    >
      <View
        style={[
          tw`flex h-full flex-col items-center justify-center bg-white flex p-5 `,
          { borderTopLeftRadius: 40, borderTopRightRadius: 40 },
        ]}
      >
        <ScrollView
          style={[tw`h-full bg-white`]}
          showsVerticalScrollIndicator={false}
        >
          <View style={tw`p-3`}>
            <Text
              style={[
                tw`text-3xl my-4 font-bold text-gray-700`,
                { fontFamily: "Poppins" },
              ]}
            >
              Salut ! 😀
            </Text>
            <Text style={[tw`mb-3`, { fontFamily: "Poppins" }]}>
              Ouvrez un livre, et laissez-vous transporter dans un monde de
              rêves et d'aventures.
            </Text>
            <Text style={{ fontFamily: "Poppins" }}>
              Veillez vous connecter afin de continuer l'aventure.
            </Text>
          </View>
          <View style={tw`px-3 pt-7 flex`}>
            <View>
              <TextInput
                style={[
                  tw`px-4 py-3 text-black rounded border-opacity-20 border-gray-500 bg-[#eeeeee]`,
                  { fontFamily: "Poppins" },
                ]}
                onChangeText={onChangeUsername}
                value={username}
                placeholder={"Numéro de téléphone"}
                keyboardType="phone-pad"
              />

              <Text style={tw` mt-7 text-right`}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("PasswordPerdu");
                  }}
                >
                  <Text
                    style={[
                      tw`text-xs mb-1 underline text-[#2e3192]`,
                      { fontFamily: "Poppins" },
                    ]}
                  >
                    Mot de passe oublié ?
                  </Text>
                </TouchableOpacity>
              </Text>

              <TextInput
                style={[
                  tw`px-4 py-3 text-black rounded border-opacity-20 border-gray-500 bg-[#eeeeee]`,
                  { fontFamily: "Poppins" },
                ]}
                onChangeText={onChangePassword}
                value={password}
                secureTextEntry={true}
                placeholder={"Entrez votre mot de passe"}
                keyboardType="default"
              />

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("InscriptionAll");
                }}
                style={tw`mt-8 px-4 py-3 rounded-xl bg-black`}
              >
                <Text
                  style={[
                    tw`text-[#fff]  text-center text-base`,
                    { fontFamily: "PoppinsBold" },
                  ]}
                >
                  Se connecter
                </Text>
              </TouchableOpacity>
            </View>

            <Text
              style={[
                tw`p-2 mt-2 mt-8 pt-10 text-center`,
                { fontFamily: "Poppins" },
              ]}
            >
              Vous n'avez pas encore de compte ?
              <TouchableOpacity
                style={tw`text-center`}
                onPress={() => {
                  navigation.navigate("InscriptionAll");
                }}
              >
                <Text
                  style={[
                    tw`text-[#2e3192] underline text-center pt-2 text-center`,
                    { fontFamily: "Poppins" },
                  ]}
                >
                  Inscrivez-vous
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
