import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import tw from "twrnc";

export default function Stepper({ active }) {
  return (
    <View style={tw`flex-row justify-center items-center mb-3 mt-8`}>
      <View
        style={[
          tw`p-2 bg-[#ffffff] rounded-3xl mx-2 text-center justify-center w-3 h-3`,
          tw.style(active >= 0 && `bg-gray-700`),
        ]}
      ></View>

      <View
        style={[
          tw`p-2 bg-[#ffffff] rounded-3xl mx-2 text-center justify-center w-3 h-3`,
          tw.style(active >= 1 && `bg-gray-700`),
        ]}
      ></View>

      <View
        style={[
          tw`p-2 bg-[#ffffff] rounded-3xl mx-2 text-center justify-center w-3 h-3`,
          tw.style(active >= 2 && `bg-gray-700`),
        ]}
      ></View>
    </View>
  );
}
