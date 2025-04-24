import {Alert, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import styles from '../assets/styles';
import {Figura, Menu} from '../components';
import { useNavigation } from '@react-navigation/native';

const JuegoPlay = () => {
  const [response, setResponse] = useState('primero');
  const navigation = useNavigation();

  const handleResponse = (res) => {
    console.log('res',res)
    setResponse(res);
    if (res === 's2') {
      Alert.alert(
        'Completaste el Juego con éxito.',
        'Puede ver su progreso en la pantalla principal',
      );
      navigation.navigate('Home');
    }else if(res === 's3'){
      Alert.alert(
        'Lo sentimos has perdido.',
        'Puedes jugar nuevamente.',
      );
      navigation.navigate('Juego');
    }
  };
  return (
    <ImageBackground source={require('../assets/Fondo.png')} style={{flex: 1}}>
      <View style={styles.containerPerfil}>
        {response == 'primero' ? (
          <Figura
            imagen={require('../assets/verde.png')}
            respuestaPapa={handleResponse}
          />
        ) : response == 's1' ? (
          <Figura
            imagen={require('../assets/rojo.png')}
            respuestaPapa={handleResponse}
          />
        ) : (
          <></>
        )}
      </View>
      <Menu />
    </ImageBackground>
  );
};

export default JuegoPlay;
