import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/LoginScreen";
import TransacaoListScreen from "./src/screens/TransacaoListScreen";
import NovaTransacaoScreen from "./src/screens/NovaTransacaoScreen"; // Adicione a tela de Nova Transação

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Transações"
          component={TransacaoListScreen}
          options={{ title: "Transações" }}
        />

        <Stack.Screen
          name="Nova Transação"
          component={NovaTransacaoScreen}
          options={{ title: "Nova Transação" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
