import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Picker, Alert } from "react-native";

export default function NovaTransacaoScreen({ navigation }) {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [data, setData] = useState("");
  const [categoria, setCategoria] = useState("Alimentação");
  const [tipo, setTipo] = useState("Despesa");
  const [moeda, setMoeda] = useState("BRL");

  const handleSalvar = () => {
    if (!descricao || !valor || !data) {
      Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    const novaTransacao = {
      descricao,
      valor: parseFloat(valor),
      data,
      categoria,
      tipo,
      moeda,
    };

    console.log("Nova transação criada:", novaTransacao);

    Alert.alert("Sucesso", "Transação salva com sucesso!");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nova Transação</Text>

      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />

      <TextInput
        style={styles.input}
        placeholder="Valor"
        value={valor}
        keyboardType="numeric"
        onChangeText={setValor}
      />

      <TextInput
        style={styles.input}
        placeholder="Data (YYYY-MM-DD)"
        value={data}
        onChangeText={setData}
      />

      <Picker
        selectedValue={categoria}
        onValueChange={(itemValue) => setCategoria(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="Alimentação" value="Alimentação" />
        <Picker.Item label="Saúde" value="Saúde" />
        <Picker.Item label="Lazer" value="Lazer" />
      </Picker>

      <Picker
        selectedValue={moeda}
        onValueChange={(itemValue) => setMoeda(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="BRL" value="BRL" />
        <Picker.Item label="USD" value="USD" />
        <Picker.Item label="EUR" value="EUR" />
      </Picker>

      <View style={styles.tipoContainer}>
        <Button
          title="Receita"
          onPress={() => setTipo("Receita")}
          color={tipo === "Receita" ? "green" : "gray"}
        />
        <Button
          title="Despesa"
          onPress={() => setTipo("Despesa")}
          color={tipo === "Despesa" ? "red" : "gray"}
        />
      </View>

      <Button title="Salvar" onPress={handleSalvar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  tipoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
