import { StyleSheet, Dimensions } from 'react-native';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const styles = StyleSheet.create({

    // Кнопки
    buttonAccept: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E41D32',
        width: 100,
        height: 36,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    buttonAcceptText: {
        color: '#FFFFFF'
    },
    buttonCancel: {
        width: 100,
        height: 36,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 50
    },
    buttonCancel2: {
        width: 100,
        height: 36,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginRight: 15,
    },
    buttonLogin: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#01DF01',
        width: 100,
        height: 36,
        borderRadius: 8,
    },
    AwesomeAlertContentContainerStyle:{
        alignItems: 'flex-end',
    },
    AwesomeAlertTitleStyle: {
        fontSize:20, 
        color: '#060A0C',
    },
    AwesomeAlertMessageStyle: {
        color: '#060A0C',
    },
    AwesomeAlertConfirmButtonStyle: {
        width: 50, 
        alignItems: 'center',
    },
    AwesomeAlertCancelButtonTextStyle: {
        color:"#E41D32",
    },
    otstup: {
        padding: 20
    },
    //Заявки
    order: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 70,
        width: WIDTH - 30,
        justifyContent: 'center',
        marginVertical: 5,
        marginHorizontal:2,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },

    orderDate: {
        marginRight: 10,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
    },

    orderDateSize: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    orderTimeSize: {
        fontSize: 14
    },

    orderDescription: {
        flex: 1,
        height: 55,
        justifyContent: 'space-around',
    },

    orderTitleHeader: {
        fontSize: 16,
        color: '#1C1C1C',
        maxHeight: 40,
    },

    orderDescriptionPrice: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold'
    },
    orderScreen: {
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
    },
    orderScrollView: {
        width: WIDTH,
    },
    orderScrollViewContainer: {
        alignItems: 'center',
    },
    orderScreenText: {
        width: WIDTH - 30,
        alignSelf: 'flex-end',
        color: '#A4A4A4',
        height: 20,
        textAlign: 'right',
    },
    orderVerticalLine: {
        height: 50,
        width: 1,
        borderWidth: 1,
        borderColor: '#E6E6E6',
        marginRight: 10
    },
    orderScreenView: {
        width: WIDTH - 30,
    },
    orderDetail: {
        padding: 10,
    },
    orderDetailMessage: {
        marginLeft: 10, 
        marginTop: 10, 
        marginBottom: -20, 
        height: 60, 
        flexDirection: 'row',
    },
    orderDetailTextMessage: {
        marginLeft: 10,
        marginTop: 13,
        justifyContent: 'center',
        fontSize: 16,
    },
    orderDetailText: {
        width: WIDTH - 20,
        justifyContent: 'flex-start',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
    },
    orderDetailButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    orderDetailDescription: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    orderAdress: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    orderDateTimePrice: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    orderHorizontalLine: {
        height: 1,
        width: WIDTH,
        borderWidth: 1,
        borderColor: '#E6E6E6',
    },
    orderDescriptionBlock: {
        flex: 1,
    },
    icon: {
        marginRight: 5,
    },
    orderDetailTextDescription: {
        height: HEIGHT - 310,
    },
    //Заявок нет
    OrderNoOrders: {
        backgroundColor:'#F7F8FB',
        flex: 1,
    },
    OrderNoOrdersContainer1: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 0.56,
    },
    OrderNoOrdersText: {
        fontSize: 18, 
        color: '#060A0C', 
        marginTop:10,
    },
    OrderNoOrdersContainer2: {
        justifyContent:'flex-end',
        flex:0.44,
    },
    OrderNoOrdersIcon: {
        marginTop:-10, 
        marginBottom: 10
    },
    //Авторизация
    Log: {
        flex: 1,
        backgroundColor: '#F7F8FB',
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    LogContainer1: {
        flex: 0.28,
        backgroundColor: '#F7F8FB',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    LogContainer2: {
        flex: 0.62,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        marginHorizontal: 16,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
        	height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    LogContainer3: {
        flex: 1, 
        justifyContent: 'center',
    },
    LogButtonAuthorization: {
        backgroundColor: '#F7F8FB',
        flex: 0.18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    LogContainerAvatar: {
        marginTop: -60,
    },
    LogInputPhone: {
        marginHorizontal: 35,
        marginTop: 40,
    },
    LogInputINN: {
        marginHorizontal: 35,
        marginTop: 20,
    },
    LogTouchableOpacityButton: {
        backgroundColor: '#E41D32',
        height: 56,
        width: 238,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    LogTextButton: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 24,
    },
    LogTextNoAccount: {
        color: '#B2B2B3',
        lineHeight: 16,
    },
    LogTextRegister: {
        color: '#E41D32',
        lineHeight: 16,
    },
    //Дроувер
    drawer: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#FFF',
    },
    drawercontainer1: {
        flex: 0.35,  
        alignItems:'center', 
        justifyContent: 'center', 
        borderBottomWidth: 3, 
        borderColor: '#EFEFEF'
    },
    drawercontainer2: {
        flex: 0.65
    },
    drawerbuttons:{
        alignItems: 'center',
        height: 70,
        flexDirection: 'row', 
    },
    drawertextFIO: {
        marginTop: 20,
        fontSize: 22,
    },
    drawertextPhone: {
        color:"#B1B2B6",
    },
    drawertextrcolor1: {
        marginLeft: 40, 
        color: 'black',
        fontSize: 18,
    },
    drawertextrcolor2: {
        marginLeft: 40, 
        color: '#E41D32',
        fontSize: 18,
    },
    drawericons: {
        marginLeft: 20,
    },

    //Настройки
    Settings: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    SettingsLine: {
        width: WIDTH,
        borderWidth: 1,
        borderColor: '#E6E6E6',
    },
    SettingsBaseBlock: {
        width: WIDTH-30,
        height: 70,
        marginTop: 20
    },
    SettingsBaseText: {
        fontSize:18
    },
    SettingsPrimaryText: {
        fontSize:12,
        color: '#AEAFB2'
    },
    SettingsRow: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    SettingsLogo:{
        marginTop: HEIGHT-370,
        alignItems: 'center',
    },
    SettingsTextVersion: {
        color: '#AEAFB2',
        marginTop: 15,
    },
    //Отклики
    FeedbackScreen: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10,
        flex: 1,
    },
    // Фильтр
    Filter: {
        flex: 1,
        backgroundColor: '#F7F8FB',
        justifyContent: 'center',
    },
    FilterContainer1:{
        backgroundColor: '#FFF',
        marginHorizontal: 10,
        borderRadius: 8,
        height: 120,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
        	height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    FilterText: {
        color: '#E41D32',
        lineHeight: 16,
        marginTop: 20,
        marginLeft: 15,
    },
    FilterContanirPriceBaseFiltres: {
        marginHorizontal: 20, 
    },
    FilterTextPrice: {
        marginTop: 20, 
        textAlign: 'center', 
        fontSize: 16,
    },
    FilterContainer2: {
        backgroundColor: '#FFF',
        marginHorizontal: 10,
        borderRadius: 8,
        flex: 0.7,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
        	height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    FilterContainerCalendar: {
        flex: 1, 
        borderRadius: 8,
    },
    FilterContainer3: {
        flex: 0.3, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    FilterButton: {
        height: 45,
        backgroundColor: '#E42D32',
        width: 140,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
        	height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    FilterButtonInput: {
        color: '#FFF',
    },    
});
export default styles;
