import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Jogador = ({ jogador }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: jogador.imagem }} style={styles.jogadorImage} />
      <Text style={styles.jogadorName}>{jogador.nome}</Text>
      <Text style={styles.jogadorNumber}>Número: {jogador.numero}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  jogadorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  jogadorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  jogadorNumber: {
    fontSize: 14,
    color: '#666',
  },
});

export default Jogador;
