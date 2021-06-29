import React from "react";
import { ScrollView, View } from "react-native";

// Import Components
import Headers from "../components/Headers";
import Content from "../components/Content";

//Import CSS
import style from "../style";

const Home = () => {
  return (
    <View style={style.container}>
      <Headers title="Home" />
      <Content />
    </View>
  );
};

export default Home;
