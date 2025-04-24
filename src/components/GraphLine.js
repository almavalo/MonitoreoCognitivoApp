import {View, Text} from 'react-native';
import React from 'react';
import {LineChart} from 'react-native-chart-kit';
import styles from '../assets/styles';
import Loading from './Loading';

const GraphLine = ({dataTest}) => {
  return (
    <>
      {!dataTest.labels.length || !dataTest.datasets[0].data.length ? (
        <View style={styles.loadingCenter}>
          <Loading />
        </View>
      ) : (
        <View style={{marginTop:10}}>
          <Text style={styles.styleTextBtnIni}>Progresos del Test:</Text>
          <LineChart
            data={dataTest}
            width={320}
            height={220}
            chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#4BC9EF',
              backgroundGradientTo: '#c8c8c8',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(46, 86, 162, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#fff',
              },
            }}
            style={{
              borderRadius: 16,
              marginVertical: 8,
              borderWidth: 3,
              borderColor: '#2E56A2',
            }}
          />
        </View>
      )}
    </>
  );
};

export default GraphLine;
