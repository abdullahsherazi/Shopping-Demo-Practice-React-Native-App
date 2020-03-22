import React from "react";
import {
  ImageBackground,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { Item, Input, Label } from "native-base";
import { CheckBox } from "react-native-elements";

// import i18n from 'i18n-js';
// import { connect } from 'react-redux'

// const mapStateToProps = state => ({
//   Language: state.Lang
// })

export default class SignIn extends React.Component {
  state = {
    checked: false
  };
  render() {
    // this.props.Language==="en" ? i18n.locale="en" : i18n.locale="ar"
    return (
      <KeyboardAvoidingView style={{ flex: 1 }}>
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
                SignIn
              </Text>
            </View>
          </View>

          {/* SHOPPY TEXT */}
          <View
            style={{
              width: "100%",
              alignItems: "center",
              marginTop: 5,
              marginBottom: 30
            }}
          >
            <Text
              style={{
                fontFamily: "Pacifico-Regular",
                fontSize: 40,
                color: "#f44336"
              }}
            >
              Shoppy
            </Text>
          </View>

          {/* SignIn with fb button */}
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#42a5f5",
                width: 270,
                height: 35,
                borderRadius: 20
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <EvilIcons name="sc-facebook" size={40} color="white" />
                <Text style={{ color: "white" }}>Signin with Facebook</Text>
              </View>
            </TouchableOpacity>
            <Text style={{ marginTop: 5 }}> or </Text>
          </View>

          {/* EMAIL TEXTINPUT */}
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              marginTop: 10
            }}
          >
            <EvilIcons
              name="user"
              size={40}
              color="black"
              style={{ marginLeft: 50 }}
            />
            <Item floatingLabel style={{ width: 200, paddingBottom: 12 }}>
              <Label>email</Label>
              <Input />
            </Item>
          </View>

          <View style={styles.hr} />

          {/* PASSWORD TEXTINPUT */}
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              marginTop: 10
            }}
          >
            <EvilIcons
              name="lock"
              size={40}
              color="black"
              style={{ marginLeft: 50 }}
            />
            <Item floatingLabel style={{ width: 200, paddingBottom: 12 }}>
              <Label>password</Label>
              <Input secureTextEntry={true} textContentType="password" />
            </Item>
          </View>
          <View style={styles.hr} />

          {/* CHECKBOX */}
          <View
            style={{
              alignItems: "center",
              marginTop: 10,
              paddingLeft: 10,
              width: "100%"
            }}
          >
            <CheckBox
              title="Forget Password?"
              checked={this.state.checked}
              onPress={() => this.setState({ checked: !this.state.checked })}
              containerStyle={{
                backgroundColor: "white",
                borderColor: "white"
              }}
            />
          </View>

          {/* SIGNIN & SIGNUP WITH BACKGROUND IMAGE  */}
          <View style={{ flex: 1, height: "100%" }}>
            <ImageBackground
              source={require("./photos/Nature.jpg")}
              style={{ width: "100%", height: "100%" }}
            >
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                  style={{
                    marginTop: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f44336",
                    width: 270,
                    height: 35,
                    borderRadius: 20
                  }}
                >
                  <Text style={{ color: "white" }}>Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text
                    style={{
                      marginTop: 10,
                      color: "#f44336",
                      borderBottomColor: "#f44336",
                      borderBottomWidth: 1,
                      fontSize: 15,
                      fontWeight: "bold"
                    }}
                  >
                    Signup Now
                  </Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end"
  },
  hr: {
    borderBottomColor: "#f44336",
    borderBottomWidth: 0.8,
    width: 250,
    marginLeft: 45
  }
});

// export default connect(mapStateToProps)(SignUp);
