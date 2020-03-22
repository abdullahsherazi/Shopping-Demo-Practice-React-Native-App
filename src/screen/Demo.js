import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
// import i18n from 'i18n-js';
// import { connect } from 'react-redux'

// const mapStateToProps = state => ({
//   Language: state.Lang
// })

export default class Demo extends React.Component {
  render() {
    // this.props.Language==="en" ? i18n.locale="en" : i18n.locale="ar"
    return (
      <View style={styles.container}>
        {/* Bag Icon */}
        <FontAwesome5 name="shopping-bag" size={80} color="#4caf50" />
        {/* Designed text       */}
        <Text style={{ fontSize: 15, marginTop: 20 }}>
          Designed By Abdullah Sherazi
        </Text>
        {/* Shoppy Text        */}
        <Text
          style={{
            fontFamily: "Pacifico-Regular",
            fontSize: 50,
            color: "#f44336"
          }}
        >
          Shoppy
        </Text>
        {/* Demo Button */}
        <TouchableOpacity
          style={{
            borderRadius: 7,
            width: 120,
            height: 60,
            backgroundColor: "#f44336",
            justifyContent: "center",
            marginTop: 20
          }}
          onPress={() => this.props.navigation.navigate("ShoppyMenu")}
        >
          <Text style={{ textAlign: "center", color: "white", fontSize: 20 }}>
            View Demo
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
// export default connect(mapStateToProps)(SignIn);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
