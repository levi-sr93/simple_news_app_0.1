import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { useDispatch, useSelector } from "react-redux";
import * as newsAction from "../redux/actions/newsActions";

const Card = (props) => {
  const dispatch = useDispatch();

  //getting the favorites from global state.
  const isFav = useSelector((state) =>
    state.news.favorites.some((article) => article.url === props.url)
  );

  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate({
          routeName: "NewsDetails",
          params: {
            title: props.title,
            description: props.description,
          },
        });
      }}
    >
      <View style={styles.card}>
        <View style={styles.imageWrapper}>
          <Image
            source={{
              uri: props.image
                ? props.image
                : "https://images.unsplash.com/photo-1555245654-a6ed32522cb0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
            }}
            style={styles.image}
          />
        </View>

        <View style={styles.titleWrapper}>
          <Text style={styles.title}>
            {props.title && props.title.length > 25
              ? props.title.slice(0, 25) + "..."
              : props.title}
          </Text>
          <MaterialIcons
            name={isFav ? "favorite" : "favorite-border"}
            color="#72bcd4"
            size={30}
            onPress={() => {
              dispatch(newsAction.toggleFavorites(props.url));
            }}
          />
        </View>

        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>
            {props.description && props.description.length > 100
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
