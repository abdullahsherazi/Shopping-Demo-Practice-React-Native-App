import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";

// import i18n from 'i18n-js';
// import { connect } from 'react-redux'

// const mapStateToProps = state => ({
//   Language: state.Lang
// })

export default class ShoppyMenu extends React.Component {
  render() {
    // this.props.Language==="en" ? i18n.locale="en" : i18n.locale="ar"
    return (
      <View style={styles.container}>
        {/* HEADER */}
        <View
          style={{
            backgroundColor: "#00332b",
            width: "100%",
            height: 60,
            flexDirection: "row"
          }}
        >
          <View style={{ width: "20%", alignItems: "center" }}>
            <Entypo
              name="menu"
              size={30}
              color="white"
              style={{ paddingTop: 12, paddingLeft: "9%" }}
              onPress={() => this.props.navigation.toggleDrawer()}
            />
          </View>

          <View
            style={{
              width: "60%",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Pacifico-Regular",
                fontSize: 30,
                color: "white"
              }}
            >
              Shoppy
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#37474f",
            width: "100%",
            height: 60,
            borderTopWidth: 0.5,
            borderTopColor: "black",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View
            style={{
              width: "90%",
              backgroundColor: "white",
              height: 30,
              borderRadius: 5,
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Ionicons
              name="md-search"
              size={25}
              color="#9e9e9e"
              style={{ marginLeft: 10 }}
            />
            <TextInput
              placeholder="Find The Best Deal"
              style={{ width: "80%", height: 45 }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start"
  },
  container1: {
    paddingTop: 0,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: "flex-start",
    backgroundColor: "white"
  },
  hr: {
    borderBottomColor: "black",
    borderBottomWidth: 0.5
  }
});

// export default connect(mapStateToProps)(SignUp);
