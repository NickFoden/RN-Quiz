import React from "react";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
  row: {
    backgroundColor: "#36B1F0",
    marginBottom: 1,
    paddingHorizontal: 15,
    paddingVertical: 20
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600"
  }
});

export const RowItem = ({ onPress = () => {}, name, color }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
    <View style={[styles.row, { backgroundColor: color }]}>
      <Text style={styles.text}>{name}</Text>
    </View>
  </TouchableOpacity>
);
