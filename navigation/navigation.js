import {
    createSwitchNavigator,
    createStackNavigator,
    createAppContainer,
    createDrawerNavigator,
} from 'react-navigation';
import { StyleSheet, Dimensions } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';

import AppDrawer from './AppDrawer';
import OrderScreen from '../screens/OrderScreen';
import OrderDetailScreen from '../screens/OrderDetailScreen'
import LogScreen from '../screens/LogScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import SettingsScreen from '../screens/SettingsScreen';
import OrderNoOrdersScreen from '../screens/OrderNoOrdersScreen';
import FeedbackScreen from '../screens/FeedbackScreen';
import FilterScreen from '../screens/FilterScreen';
import MapScreen from '../screens/MapScreen';


const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const styleHeader = {
    headerStyle: {
        backgroundColor: '#E41D32',
    },
    headerTitleStyle: {
        color:'white',
    },
    headerBackTitleStyle: {
        color:'white',
    }
    
};


const OrderStack = createStackNavigator(
    {
        Order: OrderScreen,
        OrderDetail: OrderDetailScreen,
        OrderNo: OrderNoOrdersScreen,
        Filter: FilterScreen,
        OrderMap: MapScreen
    },
    {
        defaultNavigationOptions:styleHeader,
        headerLayoutPreset: 'center',        
    }
);


const SettingsStack = createStackNavigator(
    {
        Settings: SettingsScreen,
    },
    {
        defaultNavigationOptions:styleHeader,
        headerLayoutPreset: 'center',
    }
);

const FeedBackStack = createStackNavigator(
    {
        Feedback: {
            screen:FeedbackScreen,
        },
    },
    {
        defaultNavigationOptions:styleHeader,
        headerLayoutPreset: 'center',
        cardShadowEnabled: false,
    }
);

const RegStack = createStackNavigator(
    {
        Reg: RegistrationScreen,
    },
    {
        defaultNavigationOptions:styleHeader
    }
);

const AppStack = createDrawerNavigator (
    {
        Page1: {
            screen: OrderStack,
            navigationOptions: {
                drawerLabel: 'Заявки',
            }
        },
        Page2: {
            screen: FeedBackStack,
            navigationOptions: {
                drawerLabel: 'Отклики',
            }
        },
        Page3: {
            screen: SettingsStack,
            navigationOptions: {
                drawerLabel: 'Настройки',
            }
        }
    },
    {
        drawerWidth: WIDTH * 0.8,
        drawerBackgroundColor: 'blue',
        contentComponent: AppDrawer,
        contentOptions: {
            activeBackgroundColor: 'transparent',
            activeTintColor: 'white',
        }
    }
);


export default createAppContainer(
    createSwitchNavigator(
        {
            Logon: LogScreen,
            App: AppStack,
            Registr: RegStack
        },
        {
            initialRouteName: 'Logon'
        }
    )
);