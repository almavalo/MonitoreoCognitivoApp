import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Header} from '../components';
import styles from '../assets/styles';
import {useNavigation} from '@react-navigation/native';

const Test = () => {
  const navigation = useNavigation();
  const [valueAuto, setValueAuto] = useState('');
  const [valueComp, setValueComp] = useState('');
  const [valueCorr, setValueCorr] = useState('');
  const [valuePlan, setValuePlan] = useState('');
  return (
    <ImageBackground
      source={require('../assets/Fondo.png')}
      style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <Header titulo={'TEST COGNITIVO'} />
        <View style={{flex: 1}}>
          <ScrollView>
            <View style={styles.containerForm}>
              <Text style={styles.textGeneral}>
                LLene los campos con información personal
              </Text>
              <Text style={styles.textGeneralWhite}>Autoevaluación:</Text>
              <TextInput
                editable
                multiline
                numberOfLines={4}
                onChangeText={text => setValueAuto(text)}
                value={valueAuto}
                style={styles.textInput}
              />
              <Text style={styles.textGeneralWhite}>Comprobación:</Text>
              <TextInput
                editable
                multiline
                numberOfLines={4}
                onChangeText={text => setValueComp(text)}
                value={valueComp}
                style={styles.textInput}
              />
              <Text style={styles.textGeneralWhite}>
                Corrección de errores::
              </Text>
              <TextInput
                editable
                multiline
                numberOfLines={4}
                onChangeText={text => setValueCorr(text)}
                value={valueCorr}
                style={styles.textInput}
              />
              <Text style={styles.textGeneralWhite}>
                Planificación y gestión:
              </Text>
              <TextInput
                editable
                multiline
                numberOfLines={4}
                onChangeText={text => setValuePlan(text)}
                value={valuePlan}
                style={styles.textInput}
              />
            </View>
            <View style={{alignItems: 'center', marginBottom: 20}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('TestQuestions')}
                style={[
                  styles.styleBtn,
                  {justifyContent: 'center', alignItems: 'center'},
                ]}>
                <Text style={styles.styleTextBtn}>Siguiente</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Test;
