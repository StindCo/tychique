import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { StarIcon } from "react-native-heroicons/outline";
import tw from "twrnc";
import book from "../assets/book.jpg";

export default function CardBook({ active }) {
  return (
    <View style={tw`mr-6`}>
      <TouchableOpacity style={tw`shadow-md w-36 h-39 rounded-xl`}>
        <Image source={book} style={tw`w-36 h-39 rounded-xl`} />
      </TouchableOpacity>
      <View>
        <Text
          style={[
            tw`w-36 p-1 text-left`,
            {
              fontFamily: "Poppins",
            },
          ]}
        >
          Un titre pour présenter des trucs
        </Text>
        <View style={tw`flex flex-row items-center`}>
          <StarIcon size={20} color={"#ffcd3c"} />
          <StarIcon size={20} color={"#ffcd3c"} />
          <StarIcon size={20} color={"#ffcd3c"} />
        </View>
      </View>
    </View>
  );
}
