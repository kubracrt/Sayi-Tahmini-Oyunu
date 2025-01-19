import { StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';
import { useState } from 'react';
import Title from '../components/Title';

export default function GameStartScreen({ onPress, onSendNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("")
  
  function resetHandler() {
    setEnteredNumber("")
  }

  function confirmHandler() {
    const chosenNumber = parseInt(enteredNumber)
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Geçersiz Sayı", "Sayı 1 ile 99 arasında olmalıdır",
        [{ text: "Tamam", style: "destructive", onPress: resetHandler }])
      return
    }
    onSendNumber(chosenNumber)
  }

  return (
    <View style={styles.container}>
     <Title>Sayı Tahmini Uygulaması</Title>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          keyboardType='number-pad'
          maxLength={2}
          onChangeText={(number) => setEnteredNumber(number)}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <CustomButton onPress={resetHandler}>
              <Text>Temizle</Text>
            </CustomButton>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton onPress={confirmHandler}>
              <Text>Onayla</Text>
            </CustomButton>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    marginTop: 20,
    borderRadius: 20,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "yellow",
    width: 50,
    height: 50,
    marginVertical: 10,
    fontSize: 35,
    fontWeight: "bold"
  },
  buttonsContainer: {
    flexDirection:"row",
    alignItems: "center",
  },
  buttonContainer: {
    flex:1
  }
});