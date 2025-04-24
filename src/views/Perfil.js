import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../assets/styles';
import {Card, CardPerfil, GraphBar, Menu} from '../components';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';

const Perfil = () => {
  const [dataResult, setDataResult] = useState({});
  const [datos, setDatos] = useState({});
  const [dataDay, setDataDay] = useState({
    labels: [],
    datasets: [
      {
        data: [],
      },
    ],
  });
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
            sexo: 'Masculino',
          });
        }
      });
  };
  const apiDay = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(function (response) {
        if (response) {
          setDataDay({
            labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'],
            datasets: [
              {
                data: [50, 10, 77, 30, 99],
              },
            ],
          });
        }
      });
  };

  useEffect(() => {
    apiResult();
    apiDatos();
    apiDay();
  }, []);

  return (
    <ImageBackground source={require('../assets/Fondo.png')} style={{flex: 1}}>
      <ScrollView>
        <View style={styles.containerPerfil}>
          <View style={{marginVertical: 10}}>
            <CardPerfil datosPerfil={datos} />
          </View>
          <View style={{marginVertical: 10}}>
            <Card dataResult={dataResult} />
          </View>
          <View style={[styles.containerCardIni, {marginVertical: 10}]}>
            <Text style={styles.styleTextBtnIni}>Actualiza tus datos</Text>
            <TouchableOpacity
              onPress={() =>
                Alert.alert(
                  'Monitoreo Cognitivo',
                  'Tus datos han sido actualizados correctamente.',
                )
              }
              style={styles.styleBtnIni}>
              <Text style={styles.styleTextBtn}>Actualizar</Text>
            </TouchableOpacity>
          </View>
          <GraphBar dataDay={dataDay} />
        </View>
      </ScrollView>

      <Menu />
    </ImageBackground>
  );
};

export default Perfil;
