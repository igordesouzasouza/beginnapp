import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import tw from "twrnc";

export default function ProductDetailScreen({ route }) {
  const { produto, isDarkMode, produtos } = route.params; //receptar de dados da pagina de produtos 

  const containerStyle = isDarkMode
    ? tw`flex-1 bg-gray-900 p-4`
    : tw`flex-1 bg-gray-100 p-4`;
  const titleStyle = isDarkMode
    ? tw`text-2xl font-bold text-white mb-2`
    : tw`text-2xl font-bold text-black mb-2`;
  const priceStyle = isDarkMode
    ? tw`text-lg text-white mb-4`
    : tw`text-lg text-black mb-4`;
  const descriptionStyle = isDarkMode
    ? tw`text-base text-white`
    : tw`text-base text-black`

  return (
    <View style={containerStyle}>
      <Image
        source={{ uri: produto.imagem }}
        style={tw`w-full h-64 rounded-lg mb-4`}
      />
      <Text style={titleStyle}>{produto.nome}</Text>
      <Text style={priceStyle}>R$ {produto.preco.toFixed(2)}</Text>
      <Text style={descriptionStyle}>{produto.descricao}</Text>
    </View>
  );
}