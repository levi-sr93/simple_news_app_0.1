import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { useDispatch } from "react-redux";
import * as newsAction from "../redux/actions/newsActions";

const Card = (props) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity onPress={() => props.navigation.navigate("NewsDetails")}>
      <View style={styles.card}>
        <View style={styles.imageWrapper}>
          <Image source={{ uri: props.image }} style={styles.image} />
        </View>

        <View style={styles.titleWrapper}>
          <Text style={styles.title}>
            {props.title.length > 25
              ? props.title.slice(0, 25) + "..."
              : props.title}
          </Text>
          <MaterialIcons
            name="favorite-border"
            color="#72bcd4"
            size={30}
            onPress={() => {
              dispatch(newsAction.toggleFavorites(props.url));
            }}
          />
        </View>

        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>
            {props.description.length > 100
              ? props.title.slice(0, 100) + " ..."
              : props.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
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
    alignItems: "center",
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
