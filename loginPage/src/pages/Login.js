

import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View,KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import LoginForm from './LoginForm';



export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.headBg}/>
      <KeyboardAvoidingView behavior={"position"}>
      <View>
        <Text style={styles.logo}>Welcome</Text>
        <Text style={styles.logoDesc}>To Our Humble App</Text>
      </View>
      <ScrollView>
        <View style={styles.login}>
          <Text style={styles.loginArea}>Jump in the Adventure</Text>
          <Text style={styles.loginAreaDesc}>We all want to be a king.Are you a next one?</Text>
        <LoginForm/>
        </View>
      </ScrollView>
      <View style={styles.singUpArea}>
      <Text style={styles.singUpDetails}>Don't have an account</Text>
      <TouchableOpacity>
        <Text style={styles.singUpText}>Sing Up</Text>
      </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingVertical : 80
  },
  headBg:{
    position:'absolute',
    top:0,
    left:0,
    height:250,
    width:'100%',
    backgroundColor:'skyblue'
  },
  logo:{
    textAlign:'center',
    fontSize:40,
    fontWeight:'bold',
    color:'black'
  },
  logoDesc:{
    textAlign:'center',
    color:'black'
  },
  login:{
    marginHorizontal:40,
    marginVertical:40,
    backgroundColor: 'white',
    padding : 20,
    borderRadius:5,
    elevation:4
  },
  loginArea:{
      fontSize:20,
      textAlign:'center'
  },
  loginAreaDesc:{
      fontSize:12,
      textAlign:'center',
      marginVertical:10
  },
  singUpArea:{
    alignItems:'center'
  },
  singUpDetails:{
    color:'#999'
  },
  singUpText:{
    color:'skyblue'
  }
});
