import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { ScrollView } from 'react-native-gesture-handler';
import AwesomeAlert from 'react-native-awesome-alerts';



class OrderDetailScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            orders: { 
                id: 2, 
                date: '31.05',
                time: '23:10', 
                price: 42, 
                shortTitle: 'Краткое описание Краткое описание Краткое описание',
                address: 'Pushkina 2a',
                description:'Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание' 
            },
            warning: false, //Для сообщения
            toogle: true, //Для смены цета сообщения
            buttonShow: false,//Для кнопки принять
            showAlert: false,//Для вслывающего окна на кнопке отклонить
        }
	}
	static navigationOptions = {
        title: 'Заявки',
        headerTintColor: '#FFF', // Изменить цвет стрелочки "назад"
	};
	map = () => {
        this.props.navigation.navigate('OrderMap');
    }

    /* При нажатии сменить цвет message */
    _onPressColorMessage = () => {
        const newState = !this.state.toogle;
        this.setState({ toogle: newState });
    }
    // Показать message
    _onPressMessage =() => {
        this.setState({warning: true});
        this.setState({buttonShow: true});
    }
    // Показать диалоговое окно
    showAlert = () => {
        this.setState({
          showAlert: true
        });
      };
    
    // Скрыть  диалоговое окно
    hideAlertCansel = () => {
      this.setState({showAlert: false});
    };

    hideAlertConfirm = () => {
        this.setState({showAlert: false});
        this.setState({warning: false});
        this.setState({buttonShow: false});
    };

	render() {
        const {showAlert} = this.state;
        const {orders} = this.state;
        const {toogle}  = this.state;
        const textValue = toogle ? 'Ожидается приглашение' : 'Вы приглашены';
        const colorMessage = toogle ? '#B1B2B6' : '#05A351';

        /* Сообщения о приглашении */
        const ViewmMessage = <View>
        <View style={ styles.orderDetailMessage }>
          <Icon
            size={50}
            type="font-awesome"
            name="check-circle"
            color= {colorMessage}
          />
          <Text
            style={ [ styles.orderDetailTextMessage, {color:colorMessage} ]}>{textValue}</Text>
        </View>
      </View>




		return (
            <View>
                <ScrollView>
                {this.state.warning ? ViewmMessage : <View/>} 
                <View style={styles.orderDetail}>
                    <Text style={ styles.orderDetailText }>{ orders.shortTitle }</Text>
					<TouchableOpacity onPress={ this.map }>
                    <View style={ styles.orderAdress }>
                        <Icon name={'map-marker'} size={20} color={'#E41D32'} style={ styles.icon }/>
                        <Text>{ orders.address }</Text>
                    </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.orderHorizontalLine}/>

                <View style={styles.orderDetail}>
                    <View style={ styles.orderDetailDescription }>
                        <View style={ styles.orderDateTimePrice }>
                                <Icon name={'calendar-range'} size={20} color={'#E41D32'} style={ styles.icon }/>
                                <Text>{ orders.date }</Text>
                        </View>
                        <View style={ styles.orderDateTimePrice }>
                                <Icon name={'clock-outline'} size={20} color={'#E41D32'} style={ styles.icon }/>
                                <Text>{ orders.time }</Text>
                        </View>
                        <View style={ styles.orderDateTimePrice }>
                            <Icon name={'coin'} size={20} color={'#E41D32'} style={ styles.icon }/>
                            <Text>{ orders.price }</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.orderDetail}>
                    <ScrollView>
                        <View style={ styles.orderDetailTextDescription }>
                            <Text>{ orders.description }</Text>
                        </View>
                    </ScrollView>
                    <View style={ styles.orderDetailButton }>

                        <TouchableOpacity style={this.state.buttonShow ? styles.buttonCancel2: styles.buttonCancel}
                            onPress={this.showAlert}>
                            <Text >ОТКЛОНИТЬ</Text>
                        </TouchableOpacity>
                        {this.state.buttonShow ? <View/> : <TouchableOpacity style={ styles.buttonAccept }  onPress = {this._onPressMessage} >
                            <Text style={ styles.buttonAcceptText }>ПРИНЯТЬ</Text>
                        </TouchableOpacity>}


                    </View>
                </View>
                </ScrollView>
                <AwesomeAlert
                    show={showAlert}
                    showProgress={false}
                    contentContainerStyle= { styles.AwesomeAlertContentContainerStyle }
                    title="Внимание!"
                    titleStyle = { styles.AwesomeAlertTitleStyle }
                    message="При отмене уже одобренной заявки, ваш рейтинг понижается.Вы действительно хотите отменить заявку?"
                    messageStyle = { styles.AwesomeAlertMessageStyle }
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={true}
                    showConfirmButton={true}
                    cancelText="НЕТ"
                    confirmText="ДА"
                    confirmButtonColor="#E41D32"
                    cancelButtonColor="#FFF"
                    confirmButtonStyle={ styles.AwesomeAlertConfirmButtonStyle }
                    cancelButtonTextStyle={ styles.AwesomeAlertCancelButtonTextStyle }
                    onCancelPressed={this.hideAlertCansel}
                    onConfirmPressed={this.hideAlertConfirm}
                    />
            </View>
		);
	}
}

export default OrderDetailScreen;
