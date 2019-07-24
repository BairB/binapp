import React from 'react';
import TabNavigator from '../navigation/TabNavigator';
import { DrawerActions } from 'react-navigation-drawer';
import Icon from '@expo/vector-icons/Ionicons';

class FeedbackScreen extends React.Component {

	static navigationOptions = ({ navigation }) => {
		return {
		headerTransparent: true,
		title: 'Отклики',
		headerLeft: <Icon 
						name = "md-menu" 
						color = "#FFF" 
						size = {30} 
						style = {{marginLeft: 20}}
		 				onPress = { () => navigation.dispatch(DrawerActions.openDrawer())}/>, // открытие Drawer меню
		};
	};

	render() {
		return (
			<TabNavigator/>
		);
	}
}

export default FeedbackScreen;
