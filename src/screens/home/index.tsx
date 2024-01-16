import {Button, Text, View} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home 페이지</Text>
      <Button title="Go to My Page" onPress={() => navigation.navigate('MyPage')} />
    </View>
  );
};

export default Home;
