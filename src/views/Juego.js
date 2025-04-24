import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../assets/styles';
import { Menu } from '../components';
import { useNavigation } from '@react-navigation/native';

const Juego = () => {
  const navigation = useNavigation()
  return (
    <ImageBackground source={require('../assets/Fondo.png')} style={{flex: 1}}>
      <View style={styles.containerPerfil}>
        <Text style={styles.textPrincipal}>Escoge el color</Text>
        <Text style={styles.textGeneralJuego}>Instrucciones:</Text>
        <Text style={styles.textGeneralJuego}>
          Escribe el nombre del color que se encuentra dentro de la figura
          geométrica para obtener puntos
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('JuegoPlay')}
          style={styles.styleBtnJuego}>
          <Text style={styles.styleTextBtn}>Comenzar</Text>
        </TouchableOpacity>
      </View>
      <Menu />
    </ImageBackground>
  );
}

export default Juego

const stylesJuego = StyleSheet.create({
  textPrincipal:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'flex-start',
    marginTop: 20,
  },
  textGeneralJuego:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
  styleBtnJuego: {
    width: '50%',
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#2E56A2',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
})
