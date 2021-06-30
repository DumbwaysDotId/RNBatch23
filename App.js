import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { NativeBaseProvider, Text, Box } from "native-base";
import Home from "./src/screens/Home";
import Counter from "./src/screens/Counter";
import Template from "./src/screens/Template";
import Thema from "./src/screens/Theme";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        {/* <Home /> */}
        {/* <Template /> */}
        <Thema />
        {/* <Counter /> */}
        <StatusBar style="auto" />
      </Box>
    </NativeBaseProvider>
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
