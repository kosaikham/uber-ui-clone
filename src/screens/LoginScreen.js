import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
  Animated,
  Dimensions,
  Keyboard,
  Platform,
  BackHandler // for android
} from "react-native";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/Ionicons";

const SCREEN_HEIGHT = Dimensions.get("window").height;

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    placeholder: "Enter your mobile number"
  };

  componentWillMount = () => {
    this.startHeight = new Animated.Value(150);

    this.keyboardWillShowListener = Keyboard.addListener(
      "keyboardWillShow",
      this.keyboardWillShow
    );
    this.keyboardWillHideListener = Keyboard.addListener(
      "keyboardWillHide",
      this.keyboardWillHide
    );

    // for Android "keyboardDidShow" and "keyboardDidHide"
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this.keyboardWillShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this.keyboardWillHide
    );

    this.keyboardHeight = new Animated.Value(0);
    this.forwardArrowOpacity = new Animated.Value(0);
    this.borderBottomWidth = new Animated.Value(0);
  };

  keyboardWillShow = event => {
    if (Platform.OS == "android") {
      duration = 100;
    } else {
      duration = event.duration;
    }
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: duration + 100,
        toValue: event.endCoordinates.height + 10
      }),
      Animated.timing(this.forwardArrowOpacity, {
        duration: duration,
        toValue: 1
      }),
      Animated.timing(this.borderBottomWidth, {
        duration: duration,
        toValue: 1
      })
    ]).start();
  };

  keyboardWillHide = event => {
    if (Platform.OS == "android") {
      duration = 100;
    } else {
      duration = event.duration;
    }
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: duration + 100,
        toValue: 0
      }),
      Animated.timing(this.forwardArrowOpacity, {
        duration: duration,
        toValue: 0
      }),
      Animated.timing(this.borderBottomWidth, {
        duration: duration,
        toValue: 0
      })
    ]).start();

    // for android
    BackHandler.addEventListener("hardwareBackPress", () => {
      if (this.startHeight._value > 150) {
        this.backToInitial();
        return true;
      } else {
        return false;
      }
    });
  };

  onPressAnimatedHeight = () => {
    this.setState({
      placeholder: "0912345678"
    });
    Animated.timing(this.startHeight, {
      toValue: SCREEN_HEIGHT,
      duration: 500
    }).start(() => {
      this.textInputMobile.focus();
    });
  };

  backToInitial = () => {
    Keyboard.dismiss();
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

    const titleTextBottom = this.startHeight.interpolate({
      inputRange: [150, 400, SCREEN_HEIGHT],
      outputRange: [0, 0, 100]
    });

    const titleTextLeft = this.startHeight.interpolate({
      inputRange: [150, SCREEN_HEIGHT],
      outputRange: [100, 25]
    });

    const titleTextOpacity = this.startHeight.interpolate({
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
        <Animated.View
          style={{
            position: "absolute",
            width: 60,
            height: 60,
            right: 10,
            bottom: this.keyboardHeight, // animated
            opacity: this.forwardArrowOpacity, // animated
            zIndex: 100,
            backgroundColor: "#54575e",
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Icon name="md-arrow-forward" size={26} color="white" />
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
                <Animated.View
                  style={{
                    flexDirection: "row",
                    marginTop: animatedMarginTop, // animated
                    paddingHorizontal: 25
                  }}
                >
                  <Animated.Text
                    style={{
                      position: "absolute",
                      fontSize: 24,
                      color: "grey",
                      bottom: titleTextBottom,
                      left: titleTextLeft,
                      opacity: titleTextOpacity
                    }}
                  >
                    Enter your mobile number
                  </Animated.Text>
                  <Image
                    source={require("../../assets/myanmar.png")}
                    style={{
                      width: 24,
                      height: 24,
                      resizeMode: "contain"
                    }}
                  />
                  <Animated.View
                    pointerEvents="none"
                    style={{
                      flexDirection: "row",
                      flex: 1,
                      borderBottomWidth: this.borderBottomWidth
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
                      //   ref="textInputMobile" this is also valid
                      ref={text => (this.textInputMobile = text)}
                      keyboardType="numeric"
                      placeholder={this.state.placeholder}
                      underlineColorAndroid="transparent"
                      style={{
                        flex: 1,
                        fontSize: 20
                      }}
                    />
                  </Animated.View>
                </Animated.View>
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
