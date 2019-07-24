import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles';

class OrderPreview extends React.Component {
    orderDetail = () => {
        this.props.navigation.navigate('OrderDetail');
    }

	render() {
        const { date, time, shortTitle, price } = this.props;
        
		return (
            <TouchableOpacity onPress={ this.orderDetail } style={ styles.order }>
                <View style={ styles.orderDate }>
                    <Text style={ styles.orderDateSize }>{ date }</Text>
                    <Text style={ styles.orderTimeSize }>{ time }</Text>
                </View>
                <View style={ styles.orderVerticalLine}/>
                <View style={ styles.orderDescription }>
                    <Text style={ styles.orderTitleHeader }>{ shortTitle }</Text>
                    <Text style={ styles.orderDescriptionPrice }>{ price }</Text>
                </View>                    
            </TouchableOpacity>
		);
	}
}

export default OrderPreview;
