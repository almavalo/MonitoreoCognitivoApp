import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainStack from './src/navigation/MainStack';
import {StatusBar} from 'react-native';
import SystemNavigationBar from 'react-native-system-navigation-bar';

const App = () => {
  SystemNavigationBar.navigationShow();
  SystemNavigationBar.setNavigationColor('#2E56A2');
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#2E56A2" />
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

export default App