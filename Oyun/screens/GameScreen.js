import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import Title from '../components/Title';
import { useState, useEffect } from 'react';
import ComputerNumber from '../components/ComputerNumber';
import CustomButton from '../components/CustomButton';
import AntDesign from '@expo/vector-icons/AntDesign';
import ComputerGuess from '../components/ComputerGuess';


let minNumber = 1
let maxNumber = 100


export default function GameScreen({ userNumber, onGameOver }) {


  const initialGuess = generateNumber(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [guessCounts, setGuessCounts] = useState([initialGuess])


  useEffect(() => {
    if (currentGuess == userNumber) {
      onGameOver(guessCounts.length)

    }
  }, [currentGuess, userNumber, onGameOver])

  useEffect(() => {
    let minNumber = 1
    let maxNumber = 100
  }, [])



  function nextGuessHandler(direction) {
    if ((direction === "lower" && currentGuess < userNumber) || (direction == "greater" && currentGuess > userNumber)) {
      Alert.alert("Hadi Ordan", "Yanlış Olduğunu Bile Bile Basıyorsun....", [{ text: "Tamam", style: "cancel" }])
      return
    }
    if (direction === "lower") {
      maxNumber = currentGuess
    }
    else {
      minNumber = currentGuess + 1
    }
    const newRandomNumber = generateNumber(minNumber, maxNumber, currentGuess)
    setCurrentGuess(newRandomNumber)
    setGuessCounts((prevGuess) => [newRandomNumber, ...prevGuess])

  }

  function generateNumber(min, max, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randomNumber === exclude) {
      return generateNumber(min, max, exclude);
    } else {
      return randomNumber;
    }
  }


  return (
    <View style={styles.container}>
      <Title>Bilgisayar Tahmini</Title>
      <ComputerNumber>{currentGuess}</ComputerNumber>
      <View style={styles.card}>
        <Text style={styles.title}>Altında mı  üstünde mi</Text>
        <View style={styles.buttonsContiner}>
          <CustomButton onPress={nextGuessHandler.bind(this, "lower")}><AntDesign name="minus" size={24} color="white" /></CustomButton>
          <CustomButton onPress={nextGuessHandler.bind(this, "greater")}><AntDesign name="pluscircleo" size={24} color="white" /></CustomButton>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={guessCounts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(itemData) => (
            <ComputerGuess
              roundNumber={guessCounts.length - itemData.index}
              guess={itemData.item} />
          )
          }
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30
  },
  buttonsContiner: {
    flexDirection: "row",
  },
  card: {
    backgroundColor: "orange",
    padding: 16,
    marginTop: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "white",
    fontSize: 24,
    marginBottom: 15
  },
  listContainer: {
    flex: 1,
    marginTop: 10
  }
});
