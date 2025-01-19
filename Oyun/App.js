
import { StyleSheet, View, ImageBackground } from 'react-native';
import GameStartScreen from './screens/GameStartScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [gameIsOver, setGameIsOver] = useState(true)
  const [userNumber, setUserNumber] = useState(null)
  const [guessCounts, setGuessCounts] = useState(0)

  function sendedNumberHandler(sendedNumber) {
    setUserNumber(sendedNumber)
    setGameIsOver(false)
  }

  function gameOverHandler(numberOfGuess){
    setGameIsOver(true)
    setGuessCounts(numberOfGuess)
  }

  function startNewGameHandler(){
    setUserNumber(null)
    setGuessCounts(0)
  }


  let screen = <GameStartScreen onSendNumber={sendedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }
  if (gameIsOver && userNumber) {
    screen = <GameOverScreen roundsNumber={guessCounts} userNumber={userNumber} onStartNewGame={startNewGameHandler}/>
  }
  return (
    <LinearGradient
      colors={["rgba(255, 200, 255, 1)", "transparent"]}
      style={styles.container}

    >
      <ImageBackground style={styles.container} source={require("./assets/a.jpg")} imageStyle={styles.backgroundImage}>
        {screen}
      </ImageBackground>
    </LinearGradient>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.6
  }

});
