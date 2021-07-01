import React, { Component, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

//Import CSS
import style from "../style";

const Content = () => {
  const [text, setText] = useState("");
  const navigation = useNavigation();

  function getBatch() {
    return 20 + 3;
  }

  function Greeting() {
    alert("Hello This Event");
  }

  const nameBootcamp = "Dumbways.id";

  const getPic = {
    uri: "https://i.pinimg.com/originals/fe/de/7d/fede7d1d06a38ec59a448c2828727208.jpg",
  };

  return (
    <ScrollView>
      <View style={style.container}>
        <Text style={{ marginTop: 20, marginBottom: 20 }}>
          Welcome To {nameBootcamp} Batch {getBatch()}
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("Counter")}
          style={style.stylingButton}
        >
          <Text style={{ textAlign: "center", color: "#FFF" }}>
            Counter Screen
          </Text>
        </TouchableOpacity>

        <Image
          source={getPic}
          style={{ width: 300, height: 500, marginBottom: 20 }}
        />
        <TextInput
          onChangeText={setText}
          value={text}
          placeholder="Input the Text"
          style={{
            backgroundColor: "#FFF",
            maxWidth: "100%",
            height: 50,
            borderRadius: 10,
            padding: 5,
            marginBottom: 20,
          }}
        />

        <TouchableOpacity
          onPress={() => Greeting()}
          style={style.stylingButton}
        >
          <Text
            style={style.stylingText}
            fontFamily="body"
            fontWeight={500}
            fontStyle="Medium"
          >
            Tap Me
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// class Content extends Component {
//   getBatch() {
//     return 20 + 3;
//   }

//   render() {
//     // Init Variable
//     let nameBootcamp = "Dumbways.id";

//     return (
//       <View>
//         <Text>
//           Welcome To {nameBootcamp} Batch {this.getBatch()}
//         </Text>
//       </View>
//     );
//   }
// }

export default Content;
