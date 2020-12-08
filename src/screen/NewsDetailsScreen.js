import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const NewsDetailsScreen = () => {
  return (
    <View styles={styles.container}>
      <View styles={styles.heading}>
        <Text styles={styles.title}></Text>
      </View>
      <View>
        <ImageBackground styles={styles.image}>
          <View style={styles.titleContainer}>
            <Text styles={styles.author}></Text>
            <MaterialIcons />
          </View>
        </ImageBackground>
      </View>
      <View styles={styles.description}>
        <Text styles={styles.descriptionText}></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  heading: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  title: {
    fontFamily: "Ubuntu Bold",
    fontSize: 24,
  },
  image: {
    width: "100%",
    height: 200,
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0, 0.5)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  author: {
    fontFamily: "Ubuntu",
    fontSize: 20,
    color: "#fff",
  },
  description: {
    fontSize: 20,
    fontFamily: "Ubuntu",
  },
  descriptionText: {
    fontSize: 20,
    fontFamily: 'Ubuntu'
  }
});

export default NewsDetailsScreen;
