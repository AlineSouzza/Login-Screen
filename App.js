import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#eee', alignItems: 'center' }}>
      <Text style={{ marginTop: 150, fontSize: 30 }}>Bem-Vindo!</Text>
      <Text style={{textAlign:'center', marginTop: 70, fontSize: 14}}>Faça seu login ou se cadastre{'\n'} para ter acesso ao aplicativo.{'\n'} {'\n'} Boas compras!</Text>
      <View style={{ flexDirection: 'row', marginTop: 80, alignItems: 'center', alignSelf:'flex-start', marginLeft:70}}>
        <Text> Logiin: </Text>
        <TextInput style={{ backgroundColor: '#fff', width: 150,borderColor:'#000', borderWidth:1.5, borderRadius:5, paddingLeft:8 }}></TextInput>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, alignSelf:'flex-start', marginLeft:70 }}>
        <Text> Senha: </Text>
        <TextInput style={{ backgroundColor: '#fff', width: 150, borderColor:'#000', borderWidth:1.5, borderRadius:5, paddingLeft:8}} secureTextEntry={true}></TextInput>
      </View>
      <View style={{backgroundColor: '#80ed8d', marginTop:10, width:100, alignItems: 'center', borderColor:'#000', borderWidth:1.5, borderRadius:5}}>
        <Text style={{fontSize:16 }}>Entrar</Text> 
      </View>
      <Text style={{ position: 'absolute', bottom: 40, textDecorationLine: 'underline' }}>Cadastre-se</Text>
    </View>
  );
}