import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';

import { Header, Icon, Button, Avatar, Input } from 'react-native-elements';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default class RegistrationScreen extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <DismissKeyboard>
          <View style={styles.container}>

            <View style={{ backgroundColor: '#FFFFFF', flex: 0.74 }}>
              <ScrollView>
                <View
                  style={{
                    backgroundColor: '#FFFFFF',
                    flexDirection: 'row',
                    flex: 0.16,
                    marginLeft: 20,
                    marginTop: 15,
                  }}>
                  <Icon
                    size={24}
                    type="entypo"
                    name="user"
                    color="#B2B2B3"
                    containerStyle={{ marginRight: 20, marginTop: 25 }}
                  />

                  <Input
                    placeholder="Фамилия"
                    placeholderTextColor="#59595A"
                    textContentType="username"
                    label="Фамилия"
                    labelStyle={{ color: '#B2B2B3', fontSize: 10 }}
                    inputContainerStyle={{ marginTop: -8, marginRight: 40 }}
                  />
                </View>

                <Input
                  placeholder="Имя"
                  placeholderTextColor="#59595A"
                  textContentType="username"
                  label="Имя"
                  labelStyle={{ color: '#B2B2B3', fontSize: 10 }}
                  inputContainerStyle={{ marginTop: -8, marginRight: 60 }}
                  containerStyle={{ marginLeft: 63, marginTop: 15 }}
                />

                <Input
                  placeholder="Отчество"
                  placeholderTextColor="#59595A"
                  textContentType="username"
                  label="Отчество"
                  labelStyle={{ color: '#B2B2B3', fontSize: 10 }}
                  inputContainerStyle={{ marginTop: -8, marginRight: 60 }}
                  containerStyle={{ marginLeft: 63, marginTop: 15 }}
                />

                <View
                  style={{
                    backgroundColor: '#FFFFFF',
                    flexDirection: 'row',
                    flex: 0.16,
                    marginLeft: 20,
                    marginTop: 15,
                  }}>
                  <Icon
                    size={24}
                    type="lonicon"
                    name="call"
                    color="#B2B2B3"
                    containerStyle={{ marginRight: 20, marginTop: 20 }}
                  />

                  <Input
                    placeholder="Номер телефона"
                    placeholderTextColor="#59595A"
                    textContentType="telephoneNumber"
                    keyboardType="numeric"
                    label="Телефон"
                    labelStyle={{ color: '#B2B2B3', fontSize: 10 }}
                    inputContainerStyle={{ marginTop: -8, marginRight: 40 }}
                  />
                </View>

                <View
                  style={{
                    backgroundColor: '#FFFFFF',
                    flexDirection: 'row',
                    flex: 0.16,
                    marginLeft: 20,
                    marginTop: 15,
                  }}>
                  <Icon
                    size={24}
                    type="octicon"
                    name="location"
                    color="#B2B2B3"
                    iconStyle={{ marginLeft: 5 }}
                    containerStyle={{ marginRight: 20, marginTop: 20 }}
                  />
                  <Input
                    placeholder="Город"
                    placeholderTextColor="#59595A"
                    textContentType="location"
                    label="Город"
                    labelStyle={{ color: '#B2B2B3', fontSize: 10 }}
                    inputContainerStyle={{ marginTop: -8, marginRight: 40 }}
                  />
                </View>

                <Input
                  placeholder="Улица"
                  placeholderTextColor="#59595A"
                  textContentType="location"
                  label="Улица"
                  labelStyle={{ color: '#B2B2B3', fontSize: 10 }}
                  inputContainerStyle={{ marginTop: -8, marginRight: 60 }}
                  containerStyle={{ marginLeft: 63, marginTop: 15 }}
                />

                <View
                  style={{
                    backgroundColor: '#FFFFFF',
                    flexDirection: 'row',
                    flex: 0.16,
                    marginTop: 15,
                  }}>
                  <Input
                    placeholder="Дом"
                    placeholderTextColor="#59595A"
                    textContentType="location"
                    label="Дом"
                    labelStyle={{ color: '#B2B2B3', fontSize: 10 }}
                    inputContainerStyle={{ marginTop: -8 }}
                    containerStyle={{ marginLeft: 63, flex: 0.5 }}
                  />

                  <Input
                    placeholder="Квартира"
                    placeholderTextColor="#59595A"
                    keyboardType="numeric"
                    label="Квартира"
                    labelStyle={{ color: '#B2B2B3', fontSize: 10 }}
                    inputContainerStyle={{ marginTop: -8 }}
                    containerStyle={{
                      marginLeft: -10,
                      flex: 0.5,
                      marginRight: -3,
                    }}
                  />
                </View>
              </ScrollView>
            </View>

            <View
              style={{
                backgroundColor: '#FFFFFF',
                flex: 0.15,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Button
                title="Отмена"
                type="solid"
                containerStyle={{ marginLeft: 20 }}
                titleStyle={{ color: '#59595A' }}
                buttonStyle={{
                  height: 35,
                  width: 130,
                  backgroundColor: '#FFFFFF',
                }}
              />

              <Button
                title="Далее"
                containerStyle={{ marginRight: 20 }}
                buttonStyle={{
                  height: 35,
                  width: 130,
                  backgroundColor: '#6AC95B',
                }}
              />
            </View>
          </View>
        </DismissKeyboard>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    alignItems: 'stretch',
  },
});