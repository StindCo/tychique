import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { StarIcon } from "react-native-heroicons/outline";
import tw from "twrnc";
import book from "../assets/book.jpg";
import CardBook from "./CardBook";

export default function RecentsBook({ active }) {
  return (
    <ScrollView>
      <View
        style={tw`flex flex-row w-full  mt-5 ml-3 overflow-hidden justify-around`}
      >
        <CardBook />
        <CardBook />
      </View>
      <View
        style={tw`flex flex-row w-full  mt-5 ml-3 overflow-hidden justify-around`}
      >
        <CardBook />
        <CardBook />
      </View>
      <View
        style={tw`flex flex-row w-full  mt-5 ml-3 overflow-hidden justify-around`}
      >
        <CardBook />
        <CardBook />
      </View>
    </ScrollView>
  );
}
