import React from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from '../styles';
import OrderPreview from '../components/OrderPreview'
import { ScrollView } from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/Ionicons';
import { DrawerActions } from 'react-navigation-drawer';
import OrderNoOrdersScreen from './OrderNoOrdersScreen';

class OrderScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			orders: [
				{ id: 1, date: '31.05', time: '23:10', price: 42, shortTitle: 'Краткое описание краткое описание краткое описание краткое описание краткое описание краткое описание', address: 'Pushkina 2a', description:'Полное описание' },
				{ id: 2, date: '31.05', time: '23:10', price: 42, shortTitle: 'Краткое описание краткое опи', address: 'Pushkina 2a', description:'Полное описание' },
				{ id: 3, date: '31.05', time: '23:10', price: 42, shortTitle: 'Краткое описание краткое опи', address: 'Pushkina 2a', description:'Полное описание' },
				{ id: 4, date: '31.05', time: '23:10', price: 42, shortTitle: 'Краткое описание краткое опи', address: 'Pushkina 2a', description:'Полное описание' },
				{ id: 5, date: '31.05', time: '23:10', price: 42, shortTitle: 'Краткое описание краткое опи', address: 'Pushkina 2a', description:'Полное описание' },
				{ id: 6, date: '31.05', time: '23:10', price: 42, shortTitle: 'Краткое описание краткое опи', address: 'Pushkina 2a', description:'Полное описание' },
				{ id: 7, date: '31.05', time: '23:10', price: 42, shortTitle: 'Краткое описание краткое опи', address: 'Pushkina 2a', description:'Полное описание' },
				{ id: 8, date: '31.05', time: '23:10', price: 42, shortTitle: 'Краткое описание краткое опи', address: 'Pushkina 2a', description:'Полное описание' },
				{ id: 9, date: '31.05', time: '23:10', price: 42, shortTitle: 'Краткое описание краткое опи', address: 'Pushkina 2a', description:'Полное описание' },
				{ id: 10, date: '31.05', time: '23:10', price: 42, shortTitle: 'Краткое описание краткое опи', address: 'Pushkina 2a', description:'Полное описание' },
				{ id: 11, date: '31.05', time: '23:10', price: 42, shortTitle: 'Краткое описание краткое опи', address: 'Pushkina 2a', description:'Полное описание' },
			]
		}
	}

	// Drawer = () => {this.props.navigation.dispatch(DrawerActions.openDrawer())}

	static navigationOptions = ({ navigation }) => {
		return {
		title: 'Заявки',

		headerLeft: <Icon 
						name = "md-menu" 
						color = "#FFF" 
						size = {30} 
						style = {{marginLeft: 20}}
		 				onPress = { () => navigation.dispatch(DrawerActions.openDrawer())}/>, // открытие Drawer меню

		headerRight: <Icon 
						name = "md-funnel" 
						color = "#FFF" 
						size = {30} 
						style = {{marginRight: 20}}
						onPress = { () => navigation.navigate('Filter')}/>, // Открытие Filter
		};

	};

	render() {
		const { orders } = this.state;
	
		return (
			this.state.orders.length != 0 ?  
			<View style={styles.orderScreen}>
				<View style={ styles.orderScreenView }>
					<Text style={ styles.orderScreenText }>{orders.length} заявок</Text>
				</View>
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
			:  
			<OrderNoOrdersScreen/>
		);
	}
}

export default OrderScreen;
