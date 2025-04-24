import { View, Text } from 'react-native'
import React from 'react'
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../assets/styles';
import Loading from './Loading';

const Card = ({dataResult}) => {
  return (
    <>
      {!dataResult ? (
        <View style={styles.loadingCenter}>
          <Loading />
        </View>
      ) : (
        <>
          <Text style={styles.styleTextBtnIni}>Tús Logros:</Text>
          <View style={styles.containerCard}>
            <View style={styles.sectionCard}>
              <View style={{flexDirection: 'row'}}>
                <Material name={'arrow-up'} size={15} color={'#000'} />
                <Text style={styles.titleCard}>Mes</Text>
              </View>
              <Material
                name={'progress-upload'}
                size={30}
                color={'#2E56A2'}
                borderRadius={16}
                borderWidth={2}
                borderColor={'#2E56A2'}
              />
              <Text style={styles.valCard}>{dataResult.mes}</Text>
            </View>
            <View style={styles.sectionCard}>
              <View style={{flexDirection: 'row'}}>
                <Material name={'arrow-up'} size={15} color={'#000'} />
                <Text style={styles.titleCard}>Pts</Text>
              </View>
              <Material
                name={'progress-check'}
                size={30}
                color={'#2E56A2'}
                borderRadius={16}
                borderWidth={2}
                borderColor={'#2E56A2'}
              />
              <Text style={styles.valCard}>{dataResult.puntos}</Text>
            </View>
            <View style={styles.sectionCard}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.titleCard}>Objetivo</Text>
              </View>
              <Material
                name={'progress-star'}
                size={30}
                color={'#2E56A2'}
                borderRadius={16}
                borderWidth={2}
                borderColor={'#2E56A2'}
              />
              <Text style={styles.valCard}>{dataResult.objetivo}</Text>
            </View>
          </View>
        </>
      )}
    </>
  );
}

export default Card