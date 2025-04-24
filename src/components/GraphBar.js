import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Loading from './Loading';
import {BarChart} from 'react-native-chart-kit';
import styles from '../assets/styles';

const GraphBar = ({dataDay}) => {
  console.log('dataDay',dataDay)
  return (
    <>
      {!dataDay.labels.length || !dataDay.datasets[0].data.length ? (
        <View style={styles.loadingCenter}>
          <Loading />
        </View>
      ) : (
        <View style={{marginTop: 10}}>
          <Text style={styles.styleTextBtnIni}>Progreso diario:</Text>
          <BarChart
            style={{
              borderRadius: 16,
              marginVertical: 8,
              borderColor: '#2E56A2',
              borderWidth: 3
            }}
            data={dataDay}
            width={320}
            height={220}
            chartConfig={{
              backgroundColor: '#ffffff',
              backgroundGradientFrom: '#4BC9EF',
              backgroundGradientTo: '#c8c8c8',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(9, 12, 70, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            verticalLabelRotation={0}
          />
        </View>
      )}
    </>
  );
}

export default GraphBar
