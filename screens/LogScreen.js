import React from 'react';
import { Text, View, TouchableOpacity, Keyboard, TouchableWithoutFeedback} from 'react-native';
import { Avatar, Input, } from 'react-native-elements';
import styles from '../styles';
import logo from '../images/logo.png';


const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);


export default class LogScreen extends React.Component {
  reg = () => {
    this.props.navigation.navigate('Reg');
  };
  authorization = () => {
    this.props.navigation.navigate('App');
  };
  render() {
    return (
      <DismissKeyboard>
       <View style={styles.Log}>
 
         <View style={ styles.LogContainer1 }/>
 
         <View style={ styles.LogContainer2 }>
           <Avatar 
             rounded 
             size={120} 
             source={logo} 
             containerStyle = { styles.LogContainerAvatar }/>
             
           <Input
             placeholder="Номер телефона"
             placeholderTextColor="#59595A"
             textContentType="telephoneNumber"
             inputContainerStyle={ styles.LogInputPhone }
           />
                   
           <Input
             placeholder="ИНН"
             keyboardType = 'numeric'
             placeholderTextColor="#59595A"
             inputContainerStyle={ styles.LogInputINN }
           />
           
           <View style = {styles.LogContainer3}>
            < TouchableOpacity style = { styles.LogTouchableOpacityButton } onPress={ this.authorization }> 
              <Text style={ styles.LogTextButton }> АВТОРИЗАЦИЯ </Text>
            </ TouchableOpacity >
          </View>
         </View>
 
         <View style={ styles.LogButtonAuthorization }>
           <Text style={ styles.LogTextNoAccount }>Нет аккаунта?</Text>
           <TouchableOpacity onPress={ this.reg }>
             <Text style={ styles.LogTextRegister }> Зарегистрироваться</Text>
           </TouchableOpacity>
         </View>

       </View>
      </DismissKeyboard>
    );
  }
}