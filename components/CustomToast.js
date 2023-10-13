import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import Toast from "react-native-root-toast";
import { ArrowLeftIcon } from "react-native-heroicons/outline";

export default function CustomToast(message) {
  Toast.show(
    <Text style={tw`px-10 text-center text-lg text-[#ec008c]`}>{message}</Text>,
    {
      duration: Toast.durations.SHORT,
      position: 130,
      animation: true,
      hideOnPress: true,
      delay: 0,
      opacity: 1,
      backgroundColor: "#fff",
    }
  );
}
