import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import Jogador from './jogador';  // Importa o componente Jogador

const Time = ({ time }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: time.imagem }} style={styles.timeImage} />
      <Text style={styles.timeName}>{time.nome} ({time.anoFundacao})</Text>
      <Text style={styles.timeMascote}>Mascote: {time.mascote}</Text>

      <FlatList
        data={time.jogadores}
        renderItem={({ item }) => <Jogador jogador={item} />}
        keyExtractor={(item) => item.nome}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  timeImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  timeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  timeMascote: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
});

export default Time;
