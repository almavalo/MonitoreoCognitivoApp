import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../assets/styles';

const CardPerfil = ({datosPerfil}) => {
  return (
    <>
      <Text style={styles.styleTextBtnIni}>Tú Perfil:</Text>
      <View style={styles.containerCardPerfil}>
        <View
          style={{
            flex: 0.2,
          }}>
          <Image
            source={require('../assets/perfil.png')}
            style={{
              width: 100,
              height: 100,
              borderWidth: 3,
              borderColor: '#2E56A2',
              borderRadius: 50,
              padding: 5,
            }}
            resizeMode={'contain'}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 0.8,
          }}>
          <Text style={styles.valCard}>Nombre: {datosPerfil.nombre}</Text>
          <Text style={styles.valCard}>Apellido: {datosPerfil.apellido}</Text>
          <Text style={styles.valCard}>Edad: {datosPerfil.edad}</Text>
          <Text style={styles.valCard}>Sexo: {datosPerfil.sexo}</Text>
        </View>
      </View>
    </>
  );
}

export default CardPerfil