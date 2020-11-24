import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import card01 from "../../assets/card01_news.jpeg";
const Card = () => {
  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image source={card01} style={styles.image} />
      </View>

      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Dummy Title</Text>
        <MaterialIcons name="favorite-border" color="#72bcd4" size={30}/>
      </View>

      <View style={styles.descriptionWrapper}>
        <Text style={styles.description}>This is dummy description</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    height: 300,
    margin: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  imageWrapper: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  titleWrapper: {
    height: "10%",
    paddingHorizontal: 15,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
  },
  descriptionWrapper: {
    paddingHorizontal: 15,
  },
  title: {
    fontFamily: "Roboto-Bold",
    fontSize: 20,
  },
  description: {
    fontFamily: "Roboto",
    fontSize: 15,
    marginTop: 10,
  },
});

export default Card;
