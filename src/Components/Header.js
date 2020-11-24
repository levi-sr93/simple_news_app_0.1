import React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>News App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Platform.OS === "ios" ? '#72bcd4' : '#fff',
    padding: 15,
    borderBottomColor: Platform.OS === "ios" ? '#fff' : '#72bcd4',
    borderWidth: 2
  },
  title: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 20,
    color: Platform.OS === "ios" ? '#fff' : '#aaa',
    fontWeight: 'bold'
  }
})

export default Header;
