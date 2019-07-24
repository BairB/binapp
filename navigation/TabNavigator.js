import {
    createAppContainer,
    createMaterialTopTabNavigator
} from 'react-navigation';
import FeedbackAgreedScreen from '../screens/FeedbackAgreedScreen';
import FeedbackSendScreen from '../screens/FeedbackSendScreen';

const TabNavigator = createMaterialTopTabNavigator(
    {
        Agreed: FeedbackAgreedScreen,
        Send: FeedbackSendScreen,
    },
    {
        initialRouteName: 'Agreed',
        tabBarOptions: {
            labelStyle: {
                fontSize: 12
            },
            indicatorStyle: {
                
                backgroundColor:'#FFFFFF'
            },
            style: {
                backgroundColor: '#E41D32',
                marginTop:75,
            }
        }
    }
);

export default createAppContainer(TabNavigator);