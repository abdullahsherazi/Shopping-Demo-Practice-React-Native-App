import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
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
        <View style={{ width: "100%", height: 60 }}>
          {/* Shoppy Text        */}
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Pacifico-Regular",
              fontSize: 30,
              color: "#f44336"
            }}
          >
            Shoppy
          </Text>
        </View>
        <View style={styles.hr}></View>

        {/* All touchable opacity comes here */}
        <ScrollView>
          <View style={styles.container1}>
            {/* Splash Screen Area */}
            <TouchableOpacity
              style={{ flexDirection: "row", marginTop: 20 }}
              onPress={() => this.props.navigation.navigate("SplashScreen")}
            >
              <Text style={{ marginBottom: 15, marginLeft: 30 }}>
                1 Splash Screen
              </Text>
            </TouchableOpacity>
            {/* hr line */}
            <View style={styles.hr} />

            {/* Workthrough Area */}
            <TouchableOpacity
              style={{ flexDirection: "row", marginTop: 20 }}
              onPress={() => this.props.navigation.navigate("WorkThrough")}
            >
              <Text style={{ marginBottom: 15, marginLeft: 30 }}>
                2 Workthrough
              </Text>
            </TouchableOpacity>
            {/* hr line */}
            <View style={styles.hr} />

            {/* SignIn Area */}
            <TouchableOpacity
              style={{ flexDirection: "row", marginTop: 20 }}
              onPress={() => this.props.navigation.navigate("SignIn")}
            >
              <Text style={{ marginBottom: 15, marginLeft: 30 }}>3 SignIn</Text>
            </TouchableOpacity>
            {/* hr line */}
            <View style={styles.hr} />

            {/* SignUp Area */}
            <TouchableOpacity
              style={{ flexDirection: "row", marginTop: 20 }}
              onPress={() => this.props.navigation.navigate("SignUp")}
            >
              <Text style={{ marginBottom: 15, marginLeft: 30 }}>4 SignUp</Text>
            </TouchableOpacity>
            {/* hr line */}
            <View style={styles.hr} />

            {/* Home And Menu Area */}
            <TouchableOpacity
              style={{ flexDirection: "row", marginTop: 20 }}
              onPress={() => this.props.navigation.navigate("DrawerNavigator")}
            >
              <Text style={{ marginBottom: 15, marginLeft: 30 }}>
                5 Home And Menu
              </Text>
            </TouchableOpacity>
            {/* hr line */}
            <View style={styles.hr} />

            {/* Shop By Categories */}
            <TouchableOpacity style={{ flexDirection: "row", marginTop: 20 }}>
              <Text style={{ marginBottom: 15, marginLeft: 30 }}>
                6 Shop By Categories
              </Text>
            </TouchableOpacity>
            {/* hr line */}
            <View style={styles.hr} />

            {/* SignUp Area */}
            <TouchableOpacity style={{ flexDirection: "row", marginTop: 20 }}>
              <Text style={{ marginBottom: 15, marginLeft: 30 }}>
                7 Product Details
              </Text>
            </TouchableOpacity>
            {/* hr line */}
            <View style={styles.hr} />

            {/* Filter Area */}
            <TouchableOpacity style={{ flexDirection: "row", marginTop: 20 }}>
              <Text style={{ marginBottom: 15, marginLeft: 30 }}>8 Filter</Text>
            </TouchableOpacity>
            {/* hr line */}
            <View style={styles.hr} />

            {/* Payment Area */}
            <TouchableOpacity style={{ flexDirection: "row", marginTop: 20 }}>
              <Text style={{ marginBottom: 15, marginLeft: 30 }}>
                9 Payment
              </Text>
            </TouchableOpacity>
            {/* hr line */}
            <View style={styles.hr} />

            {/* Product List Area */}
            <TouchableOpacity style={{ flexDirection: "row", marginTop: 20 }}>
              <Text style={{ marginBottom: 15, marginLeft: 30 }}>
                10 Product List
              </Text>
            </TouchableOpacity>
            {/* hr line */}
            <View style={styles.hr} />
          </View>
        </ScrollView>
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
