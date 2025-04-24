import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../assets/styles';
import {useNavigation} from '@react-navigation/native';
import GraphLine from '../components/GraphLine';
import { Card, GraphBar, GraphProgress, Menu } from '../components';

const Inicio = () => {
  const navigation = useNavigation();
  const [dataTest, setDataTest] = useState({
    labels: [],
    datasets: [
      {
        data: [],
      },
    ],
  });
  const [dataDay, setDataDay] = useState({
    labels: [],
    datasets: [
      {
        data: [],
      },
    ],
  });
  const [dataGame, setDataGame] = useState({
    labels: [],
    data: []
  });
  const [dataResult, setDataResult] = useState({});

  const apiTest = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(function (response) {
        if(response){
          setDataTest({
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
            datasets: [
              {
                data: [20, 45, 28, 99, 80, 43],
              },
            ],
          });
        }
      })
  }

  const apiGame = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(function (response) {
        if(response){
          setDataGame({
            labels: ["Metas", "Obj", "Logros"],
            data: [0.4, 0.6, 0.8]
          });
        }
      })
  }

  const apiDay = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(function (response) {
        if(response){
          setDataDay({
            labels: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"],
            datasets: [
              {
                data: [50, 10, 77, 30, 99]
              }
            ]
          });
        }
      })
  }

  const apiResult = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(function (response) {
        if(response){
          setDataResult({
            mes: 'Abril',
            puntos: '99',
            objetivo: 'Completado'
          });
        }
      })
  }

  useEffect(() => {
    apiTest(),
    apiGame(),
    apiDay(),
    apiResult()
  }, [])
  

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <Card dataResult={dataResult} />
          <GraphBar dataDay={dataDay} />
          <GraphLine dataTest={dataTest} />
          <View style={styles.containerCardIni}>
            <Text style={styles.styleTextBtnIni}>
              Comienza el Test Cognitivo
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Test')}
              style={styles.styleBtnIni}>
              <Text style={styles.styleTextBtn}>Iniciar Test</Text>
            </TouchableOpacity>
          </View>
          <GraphProgress dataGame={dataGame} />
          <View style={styles.containerCardIni}>
            <Text style={styles.styleTextBtnIni}>
              Entrena tu mente jugando
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Juego')}
              style={styles.styleBtnIni}>
              <Text style={styles.styleTextBtn}>Juega</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <Menu />
    </>
  );
}

export default Inicio

