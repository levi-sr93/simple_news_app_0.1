import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../Components/Card";


import { useSelector } from "react-redux";

const FavoriteScreen = (props) => {
  const favorites = useSelector((state) => state.news.favorites);

  return (
    <FlatList
      data={favorites}
      keyExtractor={(item) => item.url}
      renderItem={({ item }) => (
        <Card
          navigation={props.navigation}
          title={item.title}
          image={item.urlToImage}
          description={item.description}
          url={item.url}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default FavoriteScreen;
