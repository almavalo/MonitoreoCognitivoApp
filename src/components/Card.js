import { View, Text } from 'react-native'
import React from 'react'
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../assets/styles';

const Card = () => {
  return (
    <View
      style={styles.containerCard}>
      <View
        style={styles.sectionCard}>
        <View style={{flexDirection: 'row'}}>
          <Material name={'arrow-up'} size={15} color={'#000'} />
          <Text style={styles.titleCard}>Mes</Text>
        </View>
        <Material name={'progress-upload'} size={30} color={'#2E56A2'} borderRadius={16} borderWidth={2} borderColor={'#2E56A2'} />
        <Text style={styles.valCard}>Abril</Text>
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', flex: 0.33}}>
        <View style={{flexDirection: 'row'}}>
          <Material name={'arrow-up'} size={15} color={'#000'} />
          <Text style={{color: '#000', fontSize: 13}}>Pts</Text>
        </View>
        <Material name={'progress-check'} size={30} color={'#2E56A2'} borderRadius={16} borderWidth={2} borderColor={'#2E56A2'} />
        <Text style={{fontSize: 16}}>99</Text>
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', flex: 0.33}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: '#000', fontSize: 13}}>Objetivo</Text>
        </View>
        <Material name={'progress-star'} size={30} color={'#2E56A2'} borderRadius={16} borderWidth={2} borderColor={'#2E56A2'} />
        <Text style={{fontSize: 16}}>Completado</Text>
      </View>
    </View>
  );
}

export default Card