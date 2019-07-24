import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity, Keyboard, TouchableWithoutFeedback, ScrollView} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import styles from '../styles';
import Rheostat, { RheostatThemeProvider } from 'react-native-rheostat';
import Icon from '@expo/vector-icons/Ionicons';

// Скрыть клавиатуру
const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const WeekDays = ['ПТ','ВТ','СР','ЧТ','ПТ','СБ','ВС']
const Months = [
    'Январь,',
    'Февраль,',
    'Март,',
    'Апрель,',
    'Май,',
    'Июнь,',
    'Июль,',
    'Август,',
    'Сентябрь,',
    'Октябрь,',
    'Ноябрь,',
    'Декабрь,',
]
const DisabledDates = [
    'June 2 2019',
    'June 9 2019',
    'June 16 2019',
    'June 23 2019',
    'June 30 2019',
]

// Значение слайдера
const defaultProps = {
    values: [
        500, 3014
    ],
};

export default class FilterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      scrollEnabled: true,
            timeRange:{
                values: [500, 3014]
            }
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  // Для сладера
  onRheostatValUpdated = (payload) => {
    this.setState({
        timeRange: payload
    })
  }

  onSliderDragStart = () => {
      this.setState({scrollEnabled:false})
  }
  
  onSliderDragEnd = () => {
      this.setState({scrollEnabled:true})
  }

    // Настройка Header
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Фильтр',
      headerTintColor: '#FFF', // Изменить цвет стрелочки "назад"
      headerRight: <Icon 
		  				name = "md-refresh" 
		  				color = "#FFF" 
		  				size = {30} 
		  				style = {{marginRight: 20}}
              onPress = { () => navigation.navigate('Filter')}/>,
    };
  };

  render() {
    return (
      <DismissKeyboard>
        <View style={styles.Filter}>
          <View style={ styles.FilterContainer1 }>
            <Text style={ styles.FilterText }>Цена</Text>
            <View style={ styles.FilterContanirPriceBaseFiltres }>
                <RheostatThemeProvider >
                    <Rheostat 
                        values={this.props.values} 
                        min={0} max={3014}
                        snap={true}
                        onValuesUpdated={this.onRheostatValUpdated}
                        onSliderDragStart={this.onSliderDragStart}
                        onSliderDragEnd={this.onSliderDragEnd}
                        theme={{ rheostat: { themeColor: '#E41D32', grey: '#AEAFB2'} }}
                        />
                </RheostatThemeProvider >
                    <Text style={ styles.FilterTextPrice }>
                            { this.state.timeRange.values[0]}
                            -
                            { this.state.timeRange.values[1] }
                    </Text>
            </View>
          </View>
          <View style={ styles.FilterContainer2 }>
            <Text style={ styles.FilterText }>Дата</Text>
              <View style={ styles.FilterContainerCalendar }>
                <ScrollView>
                  <CalendarPicker
                    weekdays={ WeekDays }
                    months={ Months }
                    startFromMonday={true}
                    previousTitle= '  <'
                    nextTitle='>  '
                    selectedDayColor="#060A0C"
                    selectedDayTextColor="#FFFFFF"
                    disabledDates={ DisabledDates }
                    onDateChange={this.onDateChange}
                  />
                </ScrollView>
              </View>
          </View>
          <View
            style={ styles.FilterContainer3 }>
            <TouchableOpacity
              style={ styles.FilterButton }>
              <Text style={ styles.FilterButtonInput }>ПОКАЗАТЬ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </DismissKeyboard>
    );
  }
}
FilterScreen.defaultProps = defaultProps;