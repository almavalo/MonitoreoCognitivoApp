import {View, Text, ImageBackground, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../assets/styles';
import {Card, CardPerfil, Menu} from '../components';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';

const Perfil = () => {
  const [dataResult, setDataResult] = useState({});
  const [datos, setDatos] = useState({});
  const apiResult = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(function (response) {
        if (response) {
          setDataResult({
            mes: 'Abril',
            puntos: '99',
            objetivo: 'Completado',
          });
        }
      });
  };
  const apiDatos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(function (response) {
        if (response) {
          setDatos({
            nombre: 'Alfredo',
            apellido: 'Valbuena',
            edad: '34',
            sexo: 'Masculino'
          });
        }
      });
  };

  useEffect(() => {
    apiResult();
    apiDatos();
  }, []);

  return (
    <ImageBackground source={require('../assets/Fondo.png')} style={{flex: 1}}>
      <View style={styles.containerPerfil}>
        <View style={{marginVertical: 10}}>
          <CardPerfil datosPerfil={datos} />
        </View>
        <View style={{marginVertical: 10}}>
          <Card dataResult={dataResult} />
        </View>
        <View style={[styles.containerCardIni, {marginVertical: 10}]}>
          <Text style={styles.styleTextBtnIni}>Actualiza tu datos</Text>
          <TouchableOpacity
            onPress={() => Alert.alert("Monitoreo Cognitivo","Tus datos han sido actualizados correctamente.")}
            style={styles.styleBtnIni}>
            <Text style={styles.styleTextBtn}>Actualizar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Menu />
    </ImageBackground>
  );
};

export default Perfil;
