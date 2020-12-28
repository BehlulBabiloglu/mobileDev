import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Input from '../components/Input';
import MyButton from '../components/MyButton';

export default class LoginForm extends Component{
    render() {
      return(
          <View>
              <Text style={styles.singIn}>Sing In</Text>
              <Input
               returnKeyType={"next"}
               autoCapitalize="none"
               placeholder="Username"
                   onSubmitEditing={() => this.passwordInput.focus()}
               />

               <Input
               returnKeyType={"go"}
               secureTextEntry={true}
               placeholder="Password"
               inputRef={input => this.passwordInput=input}
               />
               <MyButton
                   textColor={"#f1f1f1"}
                   bgColor={"#0065e0"}
                   text={"Join Now"}
               />

            
          </View>
      );
    }
}

const styles = StyleSheet.create({
    singIn:{
        marginVertical:10,
        fontSize:14
        
    }
})