import React from 'react';
import MyPage from './src/screens/myPage';
import Home from './src/screens/home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// App.tsx는 애플리케이션의 메인 컴포넌트를 정의하는 파일이다.
// 애플리케이션의 UI가 구성되는 곳이다.

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const BottomTabScreen = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="MyPage" component={MyPage} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MyPage" component={MyPage} />
        <Stack.Screen name="BottomTabs" component={BottomTabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
