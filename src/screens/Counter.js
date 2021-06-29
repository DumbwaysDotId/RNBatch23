import React, { Component, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

//Import CSS
import style from "../style";

const Counter = () => {
  const [number, setNumber] = useState(0);

  function Increment() {
    return setNumber(number + 1);
  }

  function Decrement() {
    return setNumber(number - 1);
  }

  return (
    <View>
      <Text style={{ textAlign: "center", color: "#FFF" }}>
        Tap The Button + if you Increment tap Button - if You Decrement
      </Text>

      <Text style={style.stylingValue}>{number}</Text>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => Increment()}
          style={style.stylingButton}
        >
          <Text style={style.stylingText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Decrement()}
          style={style.stylingButton}
        >
          <Text style={style.stylingText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// class Counter extends Component {
//   constructor() {
//     super();
//     this.state = {
//       number: 0,
//     };
//   }

//   Increment = () => {
//     this.setState({
//       number: this.state.number + 1,
//     });
//   };

//   Decrement = () => {
//     this.setState({
//       number: this.state.number + 1,
//     });
//   };

//   render() {
//     return (
//       <View>
//         <Text>
//           Tap The Button + if you Increment tap Button - if You Decrement
//         </Text>
//         <Text>{this.state.number}</Text>

//         <TouchableOpacity onPress={this.Increment}>
//           <Text>+</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={this.Decrement}>
//           <Text>-</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

export default Counter;
