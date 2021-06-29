import React, { Component, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

//Import CSS
import style from "../style";

const Content = () => {
  const [number, onChangeNumber] = useState(0);

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
    <View style={style.container}>
      <ScrollView>
        <Text>
          Welcome To {nameBootcamp} Batch {getBatch()}
        </Text>

        <Image
          source={getPic}
          style={{ width: 300, height: 500, marginBottom: 20 }}
        />
        <TextInput
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Input the Number"
          keyboardType="numeric"
          style={{
            backgroundColor: "#FFF",
            maxWidth: "100%",
            height: 50,
            borderRadius: 10,
            padding: 10,
            marginBottom: 20,
          }}
        />

        <TouchableOpacity
          onPress={() => Greeting()}
          style={style.stylingButton}
        >
          <Text style={style.stylingText}>Tap Me</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
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
