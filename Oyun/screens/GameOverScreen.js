import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Title from '../components/Title';
import CustomButton from '../components/CustomButton';

export default function GameOverScreen({roundsNumber,useNumber,onStartNewGame}) {
  return (
    <View style={styles.container}>
      <Title><Text>Oyun Tamamlandı</Text></Title>
      <Text style={styles.countAndNumber}>{roundsNumber}</Text> 
      <Text>Denemeyle</Text>
      <Text style={styles.countAndNumber}> {useNumber}</Text> 
      <Text>Sayısını Buldun</Text>
      <CustomButton onPress={onStartNewGame}><Text>Yeni Oyuna Başla</Text></CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  countAndNumber: {
    textAlign: "center",
    color:"red"
  }
});
