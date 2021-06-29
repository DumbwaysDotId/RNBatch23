import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Home from "./src/screens/Home";
import Counter from "./src/screens/Counter";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      {/* <Counter /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    alignContent: "center",
  },
});
