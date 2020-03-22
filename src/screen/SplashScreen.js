import React from "react";
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Animated,
  Easing
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

// import i18n from 'i18n-js';
// import { connect } from 'react-redux'

// const mapStateToProps = state => ({
//   Language: state.Lang
// })

export default class SplashScreen extends React.Component {
  constructor() {
    super();
    this.animated = new Animated.Value(0);
  }
  componentWillMount() {
    this.animate();
  }
  animate = () => {
    Animated.timing(this.animated, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear
    }).start();
  };

  render() {
    // this.props.Language==="en" ? i18n.locale="en" : i18n.locale="ar"

    //fading khtm horahi hai
    const opacity = this.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });
    // text barai se choota horaha hai
    const textSize = this.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [40, 30]
    });
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("./photos/Nature.jpg")}
          style={{ width: "100%", height: "100%" }}
        >
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

            {/* <View style={{width:"60%", alignItems:"center"}}>      
      <Text style={{fontFamily:"Pacifico-Regular",fontSize:20,color:"#f44336"}}>Shoppy</Text>
      </View> */}
          </View>

          {/* SHOPPY TEXT ANIMATION */}
          <Animated.View
            style={{
              width: "100%",
              alignItems: "center",
              marginTop: 20,
              opacity
            }}
          >
            <Text
              style={{
                fontFamily: "Pacifico-Regular",
                fontSize: 80,
                color: "#f44336"
              }}
            >
              Shoppy
            </Text>
          </Animated.View>

          {/* DESIGNER ABDULLAH ANIMATION */}
          <View style={{ width: "100%", alignItems: "center", marginTop: 180 }}>
            <Animated.Text
              style={{
                opacity,
                fontSize: textSize,
                fontFamily: "Pacifico-Regular",
                color: "#212121"
              }}
            >
              Designer: Abdullah
            </Animated.Text>
          </View>
        </ImageBackground>
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
