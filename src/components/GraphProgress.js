import { Text, View } from 'react-native'
import React from 'react'
import {ProgressChart} from 'react-native-chart-kit';
import Loading from './Loading';
import styles from '../assets/styles';

const GraphProgress = ({dataGame}) => {
  return (
    <>
      {!dataGame.labels.length || !dataGame.data.length ? (
        <Loading />
      ) : (
        <>
          <Text style={styles.textGeneralWhite}>GraphProgress</Text>
          <ProgressChart
            data={dataGame}
            width={320}
            height={220}
            strokeWidth={16}
            radius={25}
            chartConfig={{
              backgroundColor: '#ffffff',
              backgroundGradientFrom: '#4BC9EF',
              backgroundGradientTo: '#c8c8c8',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(46, 86, 162, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            hideLegend={false}
            style={{
              borderRadius: 16,
              marginVertical: 8,
              borderColor: '#2E56A2',
            }}
          />
        </>
      )}
    </>
  );
}

export default GraphProgress
