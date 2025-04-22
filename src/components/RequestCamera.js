import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Loading from './Loading';
import styles from '../assets/styles'

export default ({hasPermission, requestPermissions = () => {}}) => {
  return (
    hasPermission === 'LOADING'
    ?
      <Loading />
    :
    <View style={{height: 'auto', alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20}}>
      <Image 
        source={require('../assets/logo1.png')}
        style={styles.styleImg}
        resizeMode={'contain'}
      />
      <Text style={{fontSize: 25, fontWeight: 'bold', color: '#2E56A2', textAlign: 'center', marginBottom: 10}}>Necesitamos acceso a tu cámara.</Text>
      <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff', textAlign: 'center', marginBottom: 30}}>Para continuar, por favor otorga acceso a la cámara. Esto es necesario para capturar fotos y vídeos.</Text>
      <TouchableOpacity
        onPress={requestPermissions}
        style={styles.styleBtn}
      >
        <Text style={styles.styleTextBtn}>PERMITIR ACCESO</Text>
      </TouchableOpacity>
    </View>
  )
};


