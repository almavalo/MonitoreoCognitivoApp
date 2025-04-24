import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../assets/styles';

const Figura = ({imagen, respuestaPapa}) => {
    const [value, setValue] = useState('');

    const colorSelect = (val) => {
      setValue(val)
    }
  return (
    <View>
      <Image
        source={imagen}
        style={styles.styleImgFigura}
        resizeMode={'cover'}
      />
      <TextInput
        editable
        numberOfLines={1}
        onChangeText={val => colorSelect(val)}
        value={value}
        style={styles.textInputJuego}
      />
      <View style={{alignItems: 'center', marginBottom: 20}}>
        <TouchableOpacity
          onPress={() => {
            respuestaPapa(
              value === 'Verde' ? 's1' : value === 'Rojo' ? 's2' : 's3',
              setValue('')
            );
          }}
          style={[
            styles.styleBtn,
            {justifyContent: 'center', alignItems: 'center'},
          ]}>
          <Text style={styles.styleTextBtn}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Figura
