import React from "react";
import { View, Text, Image } from "react-native";
import tw from "twrnc";

export default function ProductDetailScreen({ route }) {
  const { produto } = route.params;

  return (
    <View style={tw`flex-1 bg-gray-100 p-4`}>
      <Image
        source={{ uri: produto.imagem }}
        style={tw`w-full h-64 rounded-lg mb-4`}
      />
      <Text style={tw`text-2xl font-bold text-gray-800 mb-2`}>{produto.nome}</Text>
      <Text style={tw`text-lg text-gray-600 mb-4`}>R$ {produto.preco.toFixed(2)}</Text>
      <Text style={tw`text-base text-gray-700`}>{produto.descricao}</Text>
    </View>
  );
}