import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../assets/styles'

const Questions = ({imagen, text, respuestaPapa}) => {
  return (
    <View>
      <Image
        source={imagen}
        style={styles.styleImgQuestions}
        resizeMode={'cover'}
      />
      <Text style={[styles.textGeneralWhite, {textAlign: 'center'}]}>
        ¿Mejorar tu {text}?
      </Text>
      <View style={{alignItems: 'center', marginBottom: 20}}>
        <TouchableOpacity
          onPress={() => {
            respuestaPapa(text === 'Memoria' ? 's1' : text === 'Razonamiento' ? 's2' : text === 'Concentración' ? 's3' : ''); 
          }}
          style={[
            styles.styleBtn,
            {justifyContent: 'center', alignItems: 'center'},
          ]}>
          <Text style={styles.styleTextBtn}>SÍ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            respuestaPapa(text === 'Memoria' ? 'n1' : text === 'Razonamiento' ? 'n2' : text === 'Concentración' ? 'n3' : ''); 
          }}
          style={[
            styles.styleBtn,
            {justifyContent: 'center', alignItems: 'center'},
          ]}>
          <Text style={styles.styleTextBtn}>NO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Questions