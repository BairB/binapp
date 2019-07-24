import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { Icon, Avatar} from 'react-native-elements';

import styles from '../styles';
import logo from '../images/logo.png';

class OrderDetailScreen extends React.Component {
  order = () => {
    this.props.navigation.navigate('Order');
  };
  feed = () => {
    this.props.navigation.navigate('Feedback');
  };
  set = () => {
    this.props.navigation.navigate('Settings');
  };

    /*  Методы для смены стиля у комонента при нажатии на него */
  constructor(props) {
    super(props)
    this.state = { ThanksModalCheck: false, ButtonPressed:false, ThanksModalCheck2: false, ButtonPressed2:false, ThanksModalCheck3: false, ButtonPressed3:false  }
  }

   // Заявки
 onHideUnderlay=()=> {
    this.setState({ ButtonPressed: false });
  }
  onShowUnderlay= ()=> {
    this.setState({ ButtonPressed: true });
  }
  // Отклики
 onHideUnderlay2=()=> {
    this.setState({ ButtonPressed2: false });
  }
  onShowUnderlay2= ()=> {
    this.setState({ ButtonPressed2: true });
  }
  // Настройки
 onHideUnderlay3=()=> {
    this.setState({ ButtonPressed3: false });
  }
  onShowUnderlay3= ()=> {
    this.setState({ ButtonPressed3: true });
  }

  render() 
  {
    // Данные пользователя
    const data = {
      FIO: 'Петров П.П.',
      Phone: '+7 (999) 999-99-99'
    }
    // Цвет компонентов при касании
    const iconcolor = {
        red : '#E41D32',
        black: 'grey',
    }

    return (
      <View style={styles.drawer}>
        <View style = { styles.drawercontainer1 }>
          <Avatar
            rounded
            size = {120}
            source={logo}              
          />
          <Text style = { styles.drawertextFIO}>   {data.FIO} </Text>
          <Text style = { styles.drawertextPhone }>  {data.Phone} </Text>
        </View>

        <View style = { styles.drawercontainer2 }>

          <TouchableHighlight 
            style = { styles.drawerbuttons } 
            underlayColor="#ffffff"
            onShowUnderlay={()=> this.onShowUnderlay()}
            onHideUnderlay={()=> this.onHideUnderlay()} 
            activeOpacity={1} 
            onPress={ this.order }>
            <View style = {{flexDirection: 'row'}}> 
              <Icon 
                 size={24}
                 type="feather"
                 name="clipboard"
                 color={this.state.ButtonPressed ? iconcolor.red : iconcolor.black}
                 containerStyle = { styles.drawericons }                
              />      
              <Text style={ (this.state.ButtonPressed) ? styles.drawertextrcolor2 : styles.drawertextrcolor1 }>Заявки</Text>
            </View> 
          </TouchableHighlight> 

          <TouchableHighlight 
             style = { styles.drawerbuttons } 
             underlayColor="#ffffff"
             onShowUnderlay={()=> this.onShowUnderlay2()}
             onHideUnderlay={()=> this.onHideUnderlay2()} 
             activeOpacity={1} 
             onPress={ this.feed }>
             <View style = {{flexDirection: 'row'}}> 
               <Icon 
                  size={24}
                  type="font-awesome"
                  name="check-circle"
                  color={this.state.ButtonPressed2 ? iconcolor.red : iconcolor.black}
                  containerStyle = { styles.drawericons }                
               />      
               <Text style={ (this.state.ButtonPressed2) ? styles.drawertextrcolor2 : styles.drawertextrcolor1 }>Отклики</Text>
             </View> 
          </TouchableHighlight> 

          <TouchableHighlight 
            style = { styles.drawerbuttons } 
            underlayColor="#ffffff"
            onShowUnderlay={()=> this.onShowUnderlay3()}
            onHideUnderlay={()=> this.onHideUnderlay3()} 
            activeOpacity={1} 
            onPress={ this.set }>
            <View style = {{flexDirection: 'row'}}> 
              <Icon 
                size={24}
                type="font-awesome"
                name="cog"
                color={this.state.ButtonPressed3 ? iconcolor.red : iconcolor.black}
                containerStyle = { styles.drawericons }                
              />      
              <Text style={ (this.state.ButtonPressed3) ? styles.drawertextrcolor2 : styles.drawertextrcolor1 }>Настройки</Text>
            </View> 
          </TouchableHighlight> 

        </View>
      </View>
    );
  }
}

export default OrderDetailScreen;