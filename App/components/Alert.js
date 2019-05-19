import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  circle: {
    alignItems: "center",
    backgroundColor: "#ff4136",
    borderRadius: screen.width / 2,
    height: screen.width / 2,
    justifyContent: "center",
    width: screen.width / 2
  },
  circleCorrect: {
    backgroundColor: "#28A125"
  },
  container: {
    alignItems: "center",
    bottom: 0,
    flex: 1,
    left: 0,
    justifyContent: "center",
    position: "absolute",
    right: 0,
    top: 0
  },
  icon: {
    width: screen.width / 3
  }
});

export const Alert = ({ correct, visible }) => {
  if (!visible) {
    return null;
  }
  const icon = correct
    ? require("../assets/check.png")
    : require("../assets/close.png");

  const circleStyles = [styles.circle];

  if (correct) {
    circleStyles.push(styles.circleCorrect);
  }

  return (
    <View style={styles.container}>
      <View style={circleStyles}>
        <Image source={icon} style={styles.icon} resizeMode="contain" />
      </View>
    </View>
  );
};
