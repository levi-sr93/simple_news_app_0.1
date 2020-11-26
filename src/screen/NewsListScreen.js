import React from "react";
import { StyleSheet } from "react-native";

import Card from "../Components/Card";

const NewsListScreen = (props) => {
  // console.log(props);

  return <Card navigation={props.navigation} />;
};

const styles = StyleSheet.create({});

export default NewsListScreen;
