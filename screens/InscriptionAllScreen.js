import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import book from "../assets/book.jpg";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BookOpenIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { getCategories } from "../services/AccountManager";
import CardBook from "../components/CardBook";
import RecentsBook from "../components/RecentsBook";
import FavorisBook from "../components/FavoriBook";

export default function InscriptionAllScreen() {
  const navigation = useNavigation();
  const [categories, setCategories] = React.useState([]);
  const [view, setView] = React.useState("decouvrir");

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "",
    });
  }, []);

  React.useEffect(() => {}, []);

  return (
    <SafeAreaView style={tw`flex-1`}>
      <ScrollView
        contentContainerStyle={tw`relative pt-0  min-h-full text-center   bg-[#f5f5f5]`}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={tw`w-full p-5 rounded-xl flex flex-row items-center text-lg`}
        >
          <BookOpenIcon size={27} color="#000" />

          <Text
            style={[
              tw`text-xl ml-3 text-slate-800`,
              {
                fontFamily: "PoppinsBold",
              },
            ]}
          >
            Ma bibliothèque
          </Text>
        </View>

        <View
          style={tw`bg-white  mx-4 p-2 px-4 rounded-lg flex flex-row items-center justify-between shadow-md text-lg`}
        >
          <TextInput
            style={[
              tw`px-3 text-black rounded w-5/6  border-opacity-20 border-gray-500 `,
              { fontFamily: "Poppins" },
            ]}
            placeholder={"aujourd'hui, je veux lire ..."}
            keyboardType="default"
          />
          <MagnifyingGlassIcon size={20} color="#000" />
        </View>

        <View style={tw`flex flex-row items-center justify-center mt-5`}>
          <TouchableOpacity
            onPress={() => setView("decouvrir")}
            style={[
              tw`mr-3 text-sm p-2 px-5 ${view == "decouvrir" ? "bg-blue-500 border-white": ""} border  text-white rounded-full`,
              { fontFamily: "Poppins" },
            ]}
          >
            <Text style={tw`${view == "decouvrir" ? "text-white": ""}`}>Découvrir</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setView("news")}
            style={[
              tw`mr-3 text-sm p-2 px-5 ${view == "news" ? "bg-blue-500 border-white": ""} border  text-white rounded-full`,
              { fontFamily: "Poppins" },
            ]}
          >
            <Text style={tw`${view == "news" ? "text-white": ""}`}>Récents</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setView("favori")}
            style={[
              tw`mr-3 text-sm p-2 px-5 ${view == "favori" ? "bg-blue-500 border-white": ""} border  text-white rounded-full`,
              { fontFamily: "Poppins" },
            ]}
          >
            <Text style={tw`${view == "favori" ? "text-white": ""}`}>Favoris</Text>
          </TouchableOpacity>

        </View>

        {view == "news" && <View>
          <RecentsBook />
        </View>}

        {view == "favori" && <View>
          <FavorisBook />
        </View>}

        {view == "decouvrir" && (
          <View>
            <ScrollView>
              <View style={tw`mt-5 px-3 rounded-full`}>
                <Image source={book} style={tw`h-56 rounded-xl w-full`} />
                <Text
                  style={[
                    tw`absolute w-40 uppercase right-2 top-8 text-xl text-white`,
                    { fontFamily: "PoppinsBold" },
                  ]}
                >
                  Une lecture pour un jour.
                </Text>
              </View>
              <View>
                <View
                  style={tw`mt-5 px-3 flex flex-row items-center justify-between`}
                >
                  <Text style={[tw`text-lg`, { fontFamily: "Poppins" }]}>
                    Top de la semaine
                  </Text>
                  <TouchableOpacity>
                    <ArrowRightIcon size={25} color="#000" />
                  </TouchableOpacity>
                </View>
                <ScrollView
                  contentContainerStyle={{
                    paddingHorizontal: 15,
                    paddingTop: 10,
                  }}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                >
                  <CardBook />
                  <CardBook />
                  <CardBook />
                  <CardBook />
                </ScrollView>
              </View>
            </ScrollView>

            <ScrollView>
              <View>
                <View
                  style={tw`mt-5 px-3 flex flex-row items-center justify-between`}
                >
                  <Text style={[tw`text-lg`, { fontFamily: "Poppins" }]}>
                    Un livre pour la route
                  </Text>
                  <TouchableOpacity>
                    <ArrowRightIcon size={25} color="#000" />
                  </TouchableOpacity>
                </View>
                <ScrollView
                  contentContainerStyle={{
                    paddingHorizontal: 15,
                    paddingTop: 10,
                  }}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                >
                  <CardBook />
                  <CardBook />
                  <CardBook />
                  <CardBook />
                </ScrollView>
              </View>
            </ScrollView>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
