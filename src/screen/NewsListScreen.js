import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import Card from "../Components/Card";

import * as newsAction from "../redux/actions/newsActions";

const NewsListScreen = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newsAction.fetchArticles());
  }, [dispatch]);

  const articles = useSelector((state) => state.news.articles);
  console.log(articles);

  return <Card navigation={props.navigation} />;
};

const styles = StyleSheet.create({});

export default NewsListScreen;
