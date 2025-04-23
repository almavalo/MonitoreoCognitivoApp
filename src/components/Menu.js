import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../assets/styles';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation()
  return (
    <View
      style={{
        backgroundColor: '#fff',
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 0.25,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Material
            name={'home'}
            size={25}
            color={'#2E56A2'}
          />
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#000', fontSize: 13}}>Inicio</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 0.25,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Test')}>
          <Material
            name={'brain'}
            size={25}
            color={'#2E56A2'}
          />
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#000', fontSize: 13}}>Test</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 0.25,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Test')}>
          <Material
            name={'puzzle'}
            size={25}
            color={'#2E56A2'}
          />
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#000', fontSize: 13}}>Juega</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 0.25,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
          <Material
            name={'account'}
            size={25}
            color={'#2E56A2'}
          />
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#000', fontSize: 13}}>Perfil</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Menu