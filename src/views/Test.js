import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../assets/styles';
import {useNavigation} from '@react-navigation/native';
import { Menu } from '../components';

const Test = () => {
  const navigation = useNavigation();
  const [valueAuto, setValueAuto] = useState('');
  const [valueComp, setValueComp] = useState('');
  const [valueCorr, setValueCorr] = useState('');
  const [valuePlan, setValuePlan] = useState('');
  const [disabled, setDisable] = useState(true);

  const disabledBtn = (text) => {
    setValuePlan(text)
    if(valueAuto.length > 0 && valueComp.length > 0 && valueCorr.length > 0 && valuePlan.length > 0) setDisable(false)
    else setDisable(true)  
  }

  return (
    <ImageBackground
      source={require('../assets/Fondo.png')}
      style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
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
                onChangeText={text => disabledBtn(text)}
                value={valuePlan}
                style={styles.textInput}
              />
            </View>
            <View style={{alignItems: 'center', marginBottom: 20}}>
              <TouchableOpacity
              disabled={disabled}
                onPress={() => navigation.navigate('TestQuestions')}
                style={[
                  disabled ? styles.styleBtnDisabled : styles.styleBtn,
                  {justifyContent: 'center', alignItems: 'center'},
                ]}>
                <Text style={styles.styleTextBtn}>Siguiente</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
      <Menu />
    </ImageBackground>
  );
};

export default Test;
