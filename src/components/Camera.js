import React, {useEffect, useState} from 'react';
import {Camera, useCameraDevice} from 'react-native-vision-camera';
import {useAnimatedCamera, useLayout, useCameraScan} from '../hooks';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, {
  runOnJS,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
// import Header from './Header';

export default () => {
  const [firstQR, setFirstQR] = useState('');
  const [show, setShow] = useState(true);
  const [cameraType, setCameraType] = useState('back' /*back*/);
  const [flashActived, setFlashActived] = useState(false);
  const [flashEnabled, setFlashEnabled] = useState(true);
  const [zoom, setZoom] = useState(false);

  const {layout, onLayout} = useLayout();
  const device = useCameraDevice(cameraType);

  const progress = useSharedValue(0);
  const isShow = useSharedValue(false);
  const translateY = useSharedValue(300);
  const navigation = useNavigation();

  const {codeScanner, scanFrame, codeHighlights} = useCameraScan({
    progress,
    handleAddProgress: () => (progress.value = progress.value + 1),
    firstQR,
    setFirstQR,
    layout,
  });
  const {highlightStyle, toastStyle} = useAnimatedCamera({
    translateY,
    show,
    scanFrame,
    codeHighlights,
    layout,
  });

  // const esNumero = (cadena) => {
  //   const patron = /^\d+$/;
  //   return patron.test(cadena);
  // }

  useEffect(() => {
    console.log("firstQR",firstQR)
    if (firstQR && firstQR.length === 46) {
      navigation.navigate('Juego', {dataSeccionPasiva: firstQR})
      setFirstQR('')
    }else if (firstQR && firstQR.length === 32) {
        navigation.navigate('Instantaneo', {dataInstantaneo: firstQR})
        setFirstQR('');
    }else if(firstQR.length != 0 && firstQR.length != 46 && firstQR.length != 32){
      navigation.navigate('PantallaError')
    }
  }, [firstQR, navigation]);

  useEffect(() => {
    setFlashEnabled(cameraType === 'front' ? true : false);
    setFlashActived(false);
  }, [cameraType]);

  useEffect(() => {
    setFlashEnabled(cameraType === 'front' ? true : false);
    progress.value = 0;
  }, [cameraType]);

  const handleRestart = () => {
    setTimeout(() => {
      progress.value = 0;
      translateY.value = withSpring(300);
      setShow(false);
      isShow.value = false;
    }, 4000);
  };
  useDerivedValue(() => {
    if (translateY.value === 0 && isShow.value) {
      runOnJS(handleRestart)();
    }
  });

  useDerivedValue(() => {
    if (progress.value === 7 && !isShow.value) {
      runOnJS(setShow)(true);
      isShow.value = true;
      translateY.value = withSpring(0);
    }
  });

  return (
    <>
      {device ? (
        <>
          <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            onLayout={onLayout}
            codeScanner={codeScanner}
            torch={flashActived ? 'on' : 'off'}
            enableZoomGesture
          />
          {/* HEADER */}
          {/* <Header /> */}
          <Animated.View
            style={[
              {
                position: 'absolute',
                borderWidth: 1.5,
                borderColor: '#ecb14f',
              },
              highlightStyle,
            ]}
          />
          {/* MENSAJE DE ZOOM */}
          {zoom ? (
            <View
              style={[
                {
                  height: 'auto',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  bottom: 100,
                },
              ]}>
              <View
                style={{
                  height: 'auto',
                  width: '80%',
                  flexDirection: 'row',
                  paddingVertical: 15,
                  paddingHorizontal: 30,
                  borderRadius: 30,
                  backgroundColor: 'rgba(0,0,0,0.3)',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Material
                  name={'alert-circle-outline'}
                  size={20}
                  color={'#fff000'}
                />
                <Text
                  style={{
                    fontSize: 14,
                    color: '#fff000',
                    marginLeft: 12,
                    fontWeight: '500',
                  }}>
                  Para hacer zoom, puedes pellizcar o separar los dedos sobre la
                  pantalla.{' '}
                </Text>
              </View>
            </View>
          ) : (
            <></>
          )}
          <View
            style={{
              height: 80,
              width: '100%',
              flexDirection: 'row',
              backgroundColor: '#002f1f',
              position: 'absolute',
              bottom: 0,
            }}>
            <TouchableOpacity
              disabled={flashEnabled}
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
              onPress={() => setFlashActived(!flashActived)}>
              <Material
                name={flashActived ? 'flash-off' : 'flash'}
                size={28}
                color={flashEnabled ? '#808080' : '#fff'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
              onPress={() => setZoom(zoom === true ? false : true)}>
              <Material
                name={'magnify-plus-outline'}
                size={28}
                color={'#fff'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
              onPress={() =>
                setCameraType(cameraType === 'back' ? 'front' : 'back')
              }>
              <Material name={'camera-flip'} size={28} color={'#fff'} />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
