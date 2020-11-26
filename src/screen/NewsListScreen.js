import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Card from "../Components/Card";

const NewsListScreen = (props) => {
  console.log(props)

  return (
    <TouchableOpacity onPress={() => props.navigation.navigate('NewsDetails')}>
      <Card />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

});

export default NewsListScreen;