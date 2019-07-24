import  React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from '../styles';

export default class OrderNoOrdersScreen extends React.Component {

  render() {
    return (
        <View style={styles.OrderNoOrders}>

            <View style={ styles.OrderNoOrdersContainer1 }>
                <Icon
                      size={70}
                      type="ionicon"
                      name="md-sad"
                    />
                <Text style={ styles.OrderNoOrdersText }>
                  Активных заявок нет
                </Text>
            </View>

            <View style={ styles.OrderNoOrdersContainer2 }>
                <TouchableOpacity>
                    <Icon
                         size={17}
                         type="font-awesome"
                         name="chevron-down"
                         color="#B1B2B6"
                    />
                    <Icon
                         size={17}
                         type="font-awesome"
                         name="chevron-down"
                         color="#B1B2B6"
                         containerStyle={ styles.OrderNoOrdersIcon }
                    />
                </TouchableOpacity> 
            </View>
        </View>
    );
  }
}