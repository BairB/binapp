import React from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles';
import OrderPreview from '../components/OrderPreview'
import { ScrollView } from 'react-native-gesture-handler';




class FeedbackSendScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			orders: [
				{ id: 1, date: '31.05', time: '23:10', price: 42, shortTitle: 'Краткое описание краткое описание краткое описание краткое описание краткое описание краткое описание', address: 'Pushkina 2a', description:'Полное описание' },
				{ id: 2, date: '31.05', time: '23:10', price: 42, shortTitle: 'Краткое описание краткое опи', address: 'Pushkina 2a', description:'Полное описание' },
				{ id: 3, date: '31.05', time: '23:10', price: 42, shortTitle: 'Краткое описание краткое опи', address: 'Pushkina 2a', description:'Полное описание' },
				{ id: 4, date: '31.05', time: '23:10', price: 56, shortTitle: 'Краткое описание краткое опи', address: 'Pushkina 2a', description:'Полное описание' },
				{ id: 5, date: '31.05', time: '23:10', price: 56, shortTitle: 'Краткое описание краткое опи', address: 'Pushkina 2a', description:'Полное описание' },
				{ id: 6, date: '31.05', time: '23:10', price: 56, shortTitle: 'Краткое описание краткое опи', address: 'Pushkina 2a', description:'Полное описание' },
				{ id: 7, date: '31.05', time: '23:10', price: 56, shortTitle: 'Краткое описание краткое опи', address: 'Pushkina 2a', description:'Полное описание' },
			]
		}
	};
	static navigationOptions = {
		title: 'ОТПРАВЛЕНО',
	};

	render() {
		const { orders } = this.state;
	
		return (
			<View style={styles.FeedbackScreen}>
				<ScrollView style = {styles.orderScrollView} contentContainerStyle = {styles.orderScrollViewContainer}>
					{orders.map((order) => (<OrderPreview
						key={order.id}
						date={order.date}
						time={order.time}
						price={order.price}
						shortTitle={order.shortTitle}
						navigation={this.props.navigation}
					/>))}
				</ScrollView>
			</View>
		);
	}
}

export default FeedbackSendScreen;
