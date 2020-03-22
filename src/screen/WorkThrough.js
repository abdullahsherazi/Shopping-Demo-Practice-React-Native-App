import React from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

// import i18n from 'i18n-js';
// import { connect } from 'react-redux'

// const mapStateToProps = state => ({
//   Language: state.Lang
// })

export default class WorkThrough extends React.Component {
  render() {
    let width = Dimensions.get("window").width;
    // this.props.Language==="en" ? i18n.locale="en" : i18n.locale="ar"
    return (
      <View style={styles.container}>
        {/* HEADER */}
        <View
          style={{
            width: "100%",
            height: 60,
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <View style={{ width: "20%", alignItems: "center" }}>
            <Ionicons
              name="md-arrow-round-back"
              size={30}
              color="#f44336"
              onPress={() => this.props.navigation.goBack()}
            />
          </View>
          <View style={{ width: "60%", alignItems: "center" }}>
            <Text
              style={{
                fontFamily: "Pacifico-Regular",
                fontSize: 20,
                color: "#f44336"
              }}
            >
              WorkThrough
            </Text>
          </View>
        </View>

        <ScrollView
          pagingEnabled={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 20, marginBottom: 30 }}
        >
          {/* IMAGE1     */}
          <View style={{ flex: 1, width: width }}>
            <View style={{ marginLeft: 20, marginRight: 20 }}>
              <Image
                source={require("./photos/screen1.jpg")}
                style={{ width: "100%", height: "100%", borderRadius: 20 }}
              ></Image>
            </View>
          </View>

          {/* IMAGE2     */}
          <View style={{ flex: 1, width: width }}>
            <View style={{ marginLeft: 20, marginRight: 20 }}>
              <Image
                source={require("./photos/screen2.jpg")}
                style={{ width: "100%", height: "100%", borderRadius: 20 }}
              ></Image>
            </View>
          </View>

          {/* IMAGE3     */}
          <View style={{ flex: 1, width: width }}>
            <View style={{ marginLeft: 20, marginRight: 20 }}>
              <Image
                source={require("./photos/screen3.jpg")}
                style={{ width: "100%", height: "100%", borderRadius: 20 }}
              ></Image>
            </View>
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
  }
});

// export default connect(mapStateToProps)(SignUp);
