import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { useSelector } from "react-redux";
const NewsDetailsScreen = (props) => {
  //getting the unique value articleUrl that was sent from Card component
  const { articleUrl } = props.route.params;

  const article = useSelector((state) =>
    state.news.articles.articles.find((article) => article.url === articleUrl)
  );

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.title}>{article.title}</Text>
      </View>
      <View>
        <ImageBackground
          source={{ uri: article.urlToImage }}
          style={styles.image}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.author}>{article.author}</Text>
            <MaterialIcons />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>{article.description}</Text>
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
    fontFamily: "Ubuntu",
  },
});

export default NewsDetailsScreen;
