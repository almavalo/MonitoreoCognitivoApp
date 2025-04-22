import {View, ImageBackground} from 'react-native';
import React from 'react';
import {RequestCamera} from '../components'
import cameraPermissions from '../permissions/cameraPermissions'
import PantallaInicio from './PantallaInicio'

const Home = () => {
  const {hasPermission, requestPermissions} = cameraPermissions()
  return (
    <ImageBackground
      source={require('../assets/Fondo.png')}
      style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {hasPermission === 'LOADING' ||
        hasPermission === 'DENIED' ||
        hasPermission === 'ERROR' ? (
          <RequestCamera
            hasPermission={hasPermission}
            requestPermissions={requestPermissions}
          />
        ) : (
          <PantallaInicio />
        )}
      </View>
    </ImageBackground>
  );
};

export default Home;
