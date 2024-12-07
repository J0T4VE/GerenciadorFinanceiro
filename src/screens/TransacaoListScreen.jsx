import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Picker,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import TransacaoItemList from "../components/TransacaoItemList";

const exemploTransacoes = [
  { id: "1", descricao: "Almoço", valor: 50, data: "2024-12-07", hora: "12:30", categoria: "Alimentação", tipo: "Despesa", moeda: "BRL" },
  { id: "2", descricao: "Freelance", valor: 500, data: "2024-12-06", hora: "18:00", categoria: "Trabalho", tipo: "Receita", moeda: "USD" },
  { id: "3", descricao: "Cinema", valor: 30, data: "2024-12-05", hora: "20:00", categoria: "Lazer", tipo: "Despesa", moeda: "BRL" },
];

export default function TransacaoListScreen({ navigation }) {
  const [transacoes, setTransacoes] = useState(exemploTransacoes);
  const [filtro, setFiltro] = useState("");
  const [ordenacao, setOrdenacao] = useState("descricao");

  const transacoesFiltradas = transacoes.filter((transacao) =>
    transacao.descricao.toLowerCase().includes(filtro.toLowerCase())
  );

  const transacoesOrdenadas = [...transacoesFiltradas].sort((a, b) => {
    if (ordenacao === "descricao") return a.descricao.localeCompare(b.descricao);
    if (ordenacao === "valor") return b.valor - a.valor;
    if (ordenacao === "data") return new Date(b.data) - new Date(a.data);
  });

  function handleNovaTransacao() {
    navigation.navigate("Nova Transação");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Transações</Text>

      <TextInput
        style={styles.input}
        placeholder="Filtrar por descrição"
        value={filtro}
        onChangeText={setFiltro}
      />

      <Picker
        selectedValue={ordenacao}
        onValueChange={(itemValue) => setOrdenacao(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="Descrição" value="descricao" />
        <Picker.Item label="Valor" value="valor" />
        <Picker.Item label="Data" value="data" />
      </Picker>

      <FlatList
        data={transacoesOrdenadas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Swipeable>
            <TransacaoItemList transacao={item} />
          </Swipeable>
        )}
      />

      {/* Botão flutuante para adicionar nova transação */}
      <TouchableOpacity
        style={styles.botaoFlutuante}
        onPress={handleNovaTransacao}
      >
        <Text style={styles.textoBotaoFlutuante}>+</Text>
      </TouchableOpacity>
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
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  botaoFlutuante: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#007bff",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  textoBotaoFlutuante: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
