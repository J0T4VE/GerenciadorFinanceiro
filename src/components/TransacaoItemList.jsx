import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TransacaoItemList({ transacao }) {
  return (
    <View style={styles.container}>
      <Text style={styles.descricao}>{transacao.descricao}</Text>
      <Text style={styles.valor}>R$ {transacao.valor}</Text>
      <Text style={styles.data}>{transacao.data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  descricao: {
    fontSize: 16,
    fontWeight: "bold",
  },
  valor: {
    fontSize: 14,
    color: "green",
  },
  data: {
    fontSize: 12,
    color: "#666",
  },
});
