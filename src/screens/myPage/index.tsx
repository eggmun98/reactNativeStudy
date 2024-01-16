import {Button, Text, View} from 'react-native';
import React from 'react';

const MyPage = ({navigation}) => {
  return (
    <View>
      <Text>MyPage 페이지</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')}></Button>
    </View>
  );
};

export default MyPage;
