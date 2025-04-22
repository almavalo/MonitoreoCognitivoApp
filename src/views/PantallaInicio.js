import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from '../assets/styles';
import {useNavigation} from '@react-navigation/native';

const Inicio = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo1.png')}
        style={styles.styleImg}
        resizeMode={'contain'}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Test')}
        style={styles.styleBtn}>
        <Text style={styles.styleTextBtn}>
          Iniciar Test
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Resultados')}
        style={styles.styleBtn}>
        <Text style={styles.styleTextBtn}>
          Perfil
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Resultados')}
        style={styles.styleBtn}>
        <Text style={styles.styleTextBtn}>
          Juegos
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Inicio
