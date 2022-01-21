import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
export default function Character({ name, gender, birth }) {
  return (
    <View
      style={tw`flex flex-row items-center mb-4 border-solid border-[#464646] border-b pb-4`}
    >
      <View style={tw`rounded-full w-12 h-12 bg-[#242424] mr-4`}></View>
      <View style={tw`flex-grow`}>
        <Text style={tw`text-white`}>{name}</Text>
        <Text style={tw`text-white`}>{gender}</Text>
      </View>
      <View style={tw`mr-4`}>
        <Text style={tw`text-white`}>
          birth: <Text style={tw`font-bold`}>{birth}</Text>
        </Text>
      </View>
    </View>
  );
}