import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <ImageBackground
          source={require("../../assets/login_bg.jpg")}
          style={{ flex: 1 }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View
              style={{
                width: 100,
                height: 100,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text style={{ fontSize: 26, fontWeight: "bold" }}>Uber</Text>
            </View>
          </View>
          {/* BOTTOM_HALF */}
          <View>
            <View
              style={{
                height: 150,
                backgroundColor: "white"
              }}
            >
              <View
                style={{
                  marginTop: 25, // animated
                  paddingHorizontal: 25,
                  opacity: 1 // animated
                }}
              >
                <Text
                  style={{
                    fontSize: 24
                  }}
                >
                  Get moving with Uber
                </Text>
              </View>
              <TouchableOpacity>
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
                      width: 25,
                      height: 24
                    }}
                  />
                  <View
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
            </View>
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
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default LoginScreen;
