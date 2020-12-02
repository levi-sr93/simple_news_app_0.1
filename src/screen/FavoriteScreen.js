import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {useSelector} from 'react-redux';

const FavoriteScreen = () => {

  const favorites = useSelector(state => state.news.favorites);

  return (
    <View>
      <Text>Favorite Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({

});

export default FavoriteScreen;