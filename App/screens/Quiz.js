import React from "react";
import { View, SafeAreaView, StyleSheet, StatusBar, Text } from "react-native";
import { Button, ButtonContainer } from "../components/Button";

import TEMP_QUESTIONS from "../data/computers";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#36b1f0",
    flex: 1,
    paddingHorizontal: 20
  },
  safeArea: {
    flex: 1,
    marginTop: 100,
    justifyContent: "space-between"
  },
  text: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600"
  }
});

class Quiz extends React.Component {
  render() {
    const question = TEMP_QUESTIONS[0];
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safeArea}>
          <View>
            <Text style={styles.text}>{question.question} </Text>
            <ButtonContainer>
              {question.answers.map(answer => (
                <Button
                  key={answer.id}
                  text={answer.text}
                  onPress={() => alert("to do")}
                />
              ))}
            </ButtonContainer>
          </View>
          <Text style={styles.text}>0 / 3 </Text>
        </SafeAreaView>
      </View>
    );
  }
}

export default Quiz;
