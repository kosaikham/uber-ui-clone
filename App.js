import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./src/screens/LoginScreen";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const stackNavigator = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen
  }
});

const AppContainer = createAppContainer(stackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
