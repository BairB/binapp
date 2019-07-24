import * as React from 'react';
import { Text, View, Switch, Keyboard, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import { Icon,Avatar} from 'react-native-elements';
import { DrawerActions } from 'react-navigation-drawer';

import styles from '../styles';
import logo from '../images/logo.png';

const DismissKeyboard = ({ children }) => (
   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
   </TouchableWithoutFeedback>
);

export default class SettingsScreen extends React.Component {
   constructor() {
      super();
      this.state = {
         check: false
      }
   };

	static navigationOptions = ({ navigation }) => {
		return {
		title: 'Настройки',
		headerLeft: <Icon 
                  name = "md-menu"
                  type = 'ionicon' 
						color = "#FFF" 
						size = {30} 
                  containerStyle = {{marginLeft: 20}}
                  underlayColor = '#E41D32' // Цвет при нажатии
		 				onPress = { () => navigation.dispatch(DrawerActions.openDrawer())}/>, // открытие Drawer меню
		};
	};

   checkBoxTest() {
      this.setState({
         check: !this.state.check
      })
   }

   render() {
      return (
         <View style={styles.Settings}>
            {/* Выйти */}
            <TouchableOpacity style={ styles.SettingsBaseBlock }>
               <Text style={ styles.SettingsPrimaryText }>Учётная запись</Text>
               <View style={ styles.SettingsRow }>
                  <Text style={ styles.SettingsBaseText }>Выйти из учётной записи</Text>
                  <Icon size={30} type="font-awesome" name="sign-out" color='#AEAFB2' containerStyle = {{marginRight: 10}}/>
               </View>
            </TouchableOpacity>

            {/* Линия */}
            <View style={ styles.SettingsLine }/>
            
             {/* Push уведомления */}
            <View style={ styles.SettingsBaseBlock }>
               <Text style={ styles.SettingsPrimaryText }>PUSH-уведомления</Text>
               <View style={ styles.SettingsRow }>
                  <Text style={ styles.SettingsBaseText }>Получать уведомления</Text>
                  <Switch onChange={() => this.checkBoxTest()} value={this.state.check} trackColor={{ true: '#E41D32', false: '#AEAFB2' }}/>
               </View>
            </View>

            {/* Линия */}
            <View style={ styles.SettingsLine }/>
    

         {/* Логотип и версия  */}
            <View style={ styles.SettingsLogo }>
               <Avatar source={logo} size={48} rounded/>
               <Text style = {styles.SettingsTextVersion}>Версия программы 1.1</Text>               
            </View>

      </View>
      );
   }
}