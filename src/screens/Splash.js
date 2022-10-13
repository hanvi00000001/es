import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30, fontWeight: '800', color: '#000'}}>
        Firebase
      </Text>
      <Text style={{fontSize: 14, fontWeight: '800', color: 'red'}}>
        The eSon App
      </Text>
    </View>
  );
};

export default Splash;
