import {View, Text} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native';

const Login = () => {
  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          alignSelf: 'center',
          marginTop: 100,
          fontSize: 20,
          fontWeight: 800,
        }}>
        Firebase
      </Text>
      <TextInput
        style={{
          width: '84%',
          height: 50,
          borderRadius: 10,
          borderWidth: 0.5,
          alignSelf: 'center',
          marginTop: 100,
        }}
      />
      <TextInput
        placeholder="=Enter Password"
        style={{
          width: '84%',
          height: 50,
          paddingLeft: 15,
          borderRadius: 10,
          borderWidth: 0.5,
          alignSelf: 'center',
          marginTop: 20,
        }}
      />

      <TouchableOpacity
        style={{
          width: '84%',
          height: 50,
          backgroundColor: 'orange',
          borderRadius: 10,
          marginTop: 30,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text style={{fontSize: 20, color: '#000'}}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
