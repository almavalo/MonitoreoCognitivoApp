import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../assets/styles';
import {useNavigation} from '@react-navigation/native';
import GraphLine from '../components/GraphLine';
import { Card, GraphProgress } from '../components';

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
  const [dataGame, setDataGame] = useState({
    labels: [],
    data: []
  });

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

  useEffect(() => {
    apiTest(),
    apiGame()
  }, [])
  

  return (
    <View style={styles.container}>
      <ScrollView>
        <GraphLine dataTest={dataTest} />
        <GraphProgress dataGame={dataGame} />
        <Card />
        <TouchableOpacity
          onPress={() => navigation.navigate('Test')}
          style={styles.styleBtn}>
          <Text style={styles.styleTextBtn}>Iniciar Test</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Resultados')}
          style={styles.styleBtn}>
          <Text style={styles.styleTextBtn}>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Resultados')}
          style={styles.styleBtn}>
          <Text style={styles.styleTextBtn}>Juegos</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default Inicio
