import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import styles from '../assets/styles';

const Header = ({titulo}) => {
  const navigation = useNavigation();
  return (
    <View
      style={styles.headerContainer}>
      <TouchableOpacity style={{ paddingHorizontal: 15 }} onPress={() => navigation.navigate('Home')}>
        <Material name={'arrow-left'} size={25} color={'#fff'} />
      </TouchableOpacity>
      <Text style={styles.headerText}>
        {titulo}
      </Text>
    </View>
  );
}

export default Header