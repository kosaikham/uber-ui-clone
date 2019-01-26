import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
  Animated,
  Dimensions
} from "react-native";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/Ionicons";

const SCREEN_HEIGHT = Dimensions.get("window").height;

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  componentWillMount = () => {
    this.startHeight = new Animated.Value(150);
  };

  onPressAnimatedHeight = () => {
    Animated.timing(this.startHeight, {
      toValue: SCREEN_HEIGHT,
      duration: 500
    }).start();
  };

  backToInitial = () => {
    Animated.timing(this.startHeight, {
      toValue: 150,
      duration: 500
    }).start();
  };

  render() {
    const animatedOpacity = this.startHeight.interpolate({
      inputRange: [150, SCREEN_HEIGHT],
      outputRange: [1, 0]
    });

    const animatedMarginTop = this.startHeight.interpolate({
      inputRange: [150, SCREEN_HEIGHT],
      outputRange: [25, 100]
    });

    const headerBackArrowOpacity = this.startHeight.interpolate({
      inputRange: [150, SCREEN_HEIGHT],
      outputRange: [0, 1]
    });

    return (
      <View
        style={{
          flex: 1
        }}
      >
        <Animated.View
          style={{
            height: 60,
            width: 60,
            position: "absolute",
            top: 60,
            left: 25,
            zIndex: 100,
            opacity: headerBackArrowOpacity
          }}
        >
          <TouchableOpacity onPress={() => this.backToInitial()}>
            <Icon name="md-arrow-back" size={26} />
          </TouchableOpacity>
        </Animated.View>
        <ImageBackground
          source={require("../../assets/login_bg.jpg")}
          style={{ flex: 1 }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Animatable.View
              animation="zoomIn"
              iterationCount={1}
              style={{
                width: 100,
                height: 100,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text style={{ fontSize: 26, fontWeight: "bold" }}>Uber</Text>
            </Animatable.View>
          </View>
          {/* BOTTOM_HALF */}
          <Animatable.View animation="slideInUp" iterationCount={1}>
            <Animated.View
              style={{
                height: this.startHeight,
                backgroundColor: "white"
              }}
            >
              <Animated.View
                style={{
                  marginTop: animatedMarginTop, // animated
                  paddingHorizontal: 25,
                  opacity: animatedOpacity // animated
                }}
              >
                <Text
                  style={{
                    fontSize: 24
                  }}
                >
                  Get moving with Uber
                </Text>
              </Animated.View>
              <TouchableOpacity onPress={() => this.onPressAnimatedHeight()}>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 25,
                    paddingHorizontal: 25
                  }}
                >
                  <Image
                    source={require("../../assets/myanmar.png")}
                    style={{
                      width: 24,
                      height: 24,
                      resizeMode: "contain"
                    }}
                  />
                  <View
                    pointerEvents="none"
                    style={{
                      flexDirection: "row",
                      flex: 1
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        paddingHorizontal: 10
                      }}
                    >
                      +95
                    </Text>
                    <TextInput
                      placeholder="Enter your mobile number"
                      underlineColorAndroid="transparent"
                      style={{
                        flex: 1,
                        fontSize: 20
                      }}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </Animated.View>
            <View
              style={{
                height: 70,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "flex-start",
                borderTopWidth: 1,
                borderTopColor: "#e8e8ec",
                paddingHorizontal: 25
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#5a7fdf"
                }}
              >
                Or connect using a social account
              </Text>
            </View>
          </Animatable.View>
        </ImageBackground>
      </View>
    );
  }
}

export default LoginScreen;
