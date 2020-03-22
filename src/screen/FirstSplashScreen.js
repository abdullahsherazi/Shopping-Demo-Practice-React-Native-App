import React from "react";
import { Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <MaterialCommunityIcons
          name="cart-outline"
          size={200}
          color="#f44336"
          style={{ paddingTop: 12, paddingLeft: "9%" }}
        />
        <Text
          style={{
            textAlign: "center",
            fontFamily: "Pacifico-Regular",
            fontSize: 30,
            color: "#f44336"
          }}
        >
          Shoppy App Template
        </Text>
      </View>
    );
  }
}
