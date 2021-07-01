import React, { Component } from "react";
import { View } from "react-native";
import { Text } from "native-base";

const Headers = (props) => {
  return (
    <View
      style={{
        marginBottom: 20,
        marginTop: 30,
        backgroundColor: "#fd79a8",
        width: "100%",
        height: "10%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <Text style={{ fontFamily: "Inter_900Black" }}>{props.title}</Text> */}
      <Text fontFamily="body" fontWeight={400} fontStyle="normal">
        {props.title}
      </Text>
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
