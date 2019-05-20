import React from "react";
import { ScrollView, Button, StatusBar } from "react-native";
import { RowItem } from "../components/RowItem";

import computerQuestions from "../data/computers";
import spaceQuestions from "../data/space";
import westernsQuestions from "../data/westerns";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Space"
      color="#36b1f0"
      onPress={() => navigation.navigate("Quiz")}
    />
    <RowItem
      name="Westerns"
      color="#799496"
      onPress={() => navigation.navigate("Quiz")}
    />
    <RowItem
      name="Computers"
      color="#49475B"
      onPress={() => navigation.navigate("Quiz")}
    />
  </ScrollView>
);
