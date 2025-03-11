import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductListScreen from '../components/ProductListScreen';
import TelaDetalheDoProduto from '../components/TelaDetalheDoProduto';

const Stack = createStackNavigator();

export default function Index() {
  return (
    <Stack.Navigator initialRouteName="ProductList" >
      <Stack.Screen
        name="ProductList"
        component={ProductListScreen}
        options={{ title: "Catálogo de Produtos" }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={TelaDetalheDoProduto}
        options={{ title: "Detalhes do Produto" }}
      />
    </Stack.Navigator>
  );
}