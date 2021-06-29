import React, { Component } from "react";
import { View, Text } from "react-native";

const Headers = (props) => {
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  );
};

// class Headers extends Component {
//   render() {
//     return (
//       <View>
//         <Text>{this.props.title}</Text>
//       </View>
//     );
//   }
// }

export default Headers;
