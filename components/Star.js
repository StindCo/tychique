import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import tw from "twrnc";

export default function Star({ active }) {
  return (
    <View style={tw`mr-6`}>
      <View style={tw`bg-slate-900  w-36 h-42 rounded-xl`}></View>
      <View>
        <Text style={tw`w-36 w-30 p-1 text-left`}>
          Un titre pour présenter des trucs
        </Text>
      </View>
    </View>
  );
}
