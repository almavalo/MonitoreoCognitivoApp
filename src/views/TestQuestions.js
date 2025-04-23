import { View, Text, ImageBackground, Alert } from 'react-native'
import React, { useState } from 'react'
import { Header, Questions } from '../components';
import { useNavigation } from '@react-navigation/native';

const TestQuestions = () => {
  const navigation = useNavigation();
  const [response, setResponse] = useState('primero')
  const handleResponse = (res) => {
    setResponse(res)
    if(res === 's3' || res === 'n3') {
      Alert.alert("Completaste el test con éxito.", "Puede ver su progreso en la pantalla principal")
      navigation.navigate('Home')
    }
  };
  return (
    <ImageBackground source={require('../assets/Fondo.png')} style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <Header titulo={'TEST COGNITIVO'} />
        <View style={{flex: 1}}>
          {response == 'primero' ? (
            <Questions
              imagen={require('../assets/camara.jpg')}
              text={'Memoria'}
              respuestaPapa={handleResponse}
            />
          ) : response == 's1' || response == 'n1' ? (
            <Questions
              imagen={require('../assets/rompecabeza.png')}
              text={'Razonamiento'}
              respuestaPapa={handleResponse}
            />
          ) : response == 's2' || response == 'n2' ? (
            <Questions
              imagen={require('../assets/libro.jpg')}
              text={'Concentración'}
              respuestaPapa={handleResponse}
            />
          ) : (
            <></>
          )}
        </View>
      </View>
    </ImageBackground>
  );
}

export default TestQuestions