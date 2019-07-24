import React from 'react';
import { MapView } from 'expo';


class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialRegion: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers:
        { latlng: { latitude: 51.837231, longitude: 107.594152, }, title:'Точка', description:'Тест' }
    }
    };

  static navigationOptions = {
    title: 'Карта',
    headerTintColor: '#FFF', // Изменить цвет стрелочки "назад"
  };

  render() {

    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 	51.833507,
          longitude:  107.584125,
          latitudeDelta: 0.1922,
          longitudeDelta: 0.0421,
        }} >
        <MapView.Marker
              coordinate={ this.state.markers.latlng }
              title={ this.state.markers.title }
              description={ this.state.markers.description }
            />          
      </MapView>
    );
  }
}

export default MapScreen;
