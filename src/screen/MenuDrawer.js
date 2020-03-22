import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";

// import i18n from 'i18n-js';
// import { connect } from 'react-redux'

// const mapStateToProps = state => ({
//     Language: state.Lang
//   })

export default class MenuDrawer extends React.Component {
  render() {
    // this.props.Language==="en" ? i18n.locale="en" : i18n.locale="ar"

    return (
      // TOP OF DRAWER

      <View style={styles.container}>
        <View
          style={{
            height: 60,
            flexDirection: "row",
            backgroundColor: "#00332b",
            alignItems: "center"
          }}
        >
          <FontAwesome5
            name="shopping-bag"
            size={35}
            color="#00695c"
            style={{ marginLeft: 10, marginRight: 40 }}
          />
          <Text style={{ color: "white" }}>wsdesignuiwx</Text>
        </View>

        {/* Categories */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            height: 50,
            width: "100%",
            marginTop: 5
          }}
          onPress={() => this.props.navigation.navigate("Categories")}
        >
          <AntDesign
            name="CodeSandbox"
            size={25}
            color="#f44336"
            style={{ marginLeft: 8, marginRight: 30 }}
          />
          <Text style={{ color: "#00695c", fontSize: 15 }}>Categories</Text>
        </TouchableOpacity>

        {/* My Wallet */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            height: 50,
            width: "100%",
            marginTop: 5
          }}
        >
          <Entypo
            name="wallet"
            size={25}
            color="#f44336"
            style={{ marginLeft: 8, marginRight: 30 }}
          />
          <Text style={{ color: "#00695c", fontSize: 15 }}>My Wallet</Text>
        </TouchableOpacity>

        {/* View History */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            height: 50,
            width: "100%",
            marginTop: 5
          }}
        >
          <FontAwesome5
            name="history"
            size={25}
            color="#f44336"
            style={{ marginLeft: 8, marginRight: 30 }}
          />
          <Text style={{ color: "#00695c", fontSize: 15 }}>View History</Text>
        </TouchableOpacity>

        {/* Refer & Earn */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            height: 50,
            width: "100%",
            marginTop: 5
          }}
        >
          <Entypo
            name="creative-cloud"
            size={25}
            color="#f44336"
            style={{ marginLeft: 8, marginRight: 30 }}
          />
          <Text style={{ color: "#00695c", fontSize: 15 }}>Refer and Earn</Text>
        </TouchableOpacity>

        {/* Help Center */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            height: 50,
            width: "100%",
            marginTop: 5
          }}
        >
          <FontAwesome5
            name="blender-phone"
            size={25}
            color="#f44336"
            style={{ marginLeft: 8, marginRight: 30 }}
          />
          <Text style={{ color: "#00695c", fontSize: 15 }}>Help Center</Text>
        </TouchableOpacity>

        {/* Rate Us */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            height: 50,
            width: "100%",
            marginTop: 5
          }}
        >
          <FontAwesome
            name="star-half-empty"
            size={25}
            color="#f44336"
            style={{ marginLeft: 8, marginRight: 30 }}
          />
          <Text style={{ color: "#00695c", fontSize: 15 }}>Rate Us</Text>
        </TouchableOpacity>

        {/* Logout */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            height: 50,
            width: "100%",
            marginTop: 5
          }}
        >
          <AntDesign
            name="logout"
            size={25}
            color="#f44336"
            style={{ marginLeft: 8, marginRight: 30 }}
          />
          <Text style={{ color: "#00695c", fontSize: 15 }}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

// export default connect(mapStateToProps)(MenuDrawer);
