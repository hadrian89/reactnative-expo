import React, { Component } from 'react';
import { Platform, StatusBar } from 'react-native';
// import {   createSwitchNavigator,  
//   createAppContainer,  
//   createDrawerNavigator,  
//   createStackNavigator    } from 'react-navigation';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

// import RegistrationScreen from '../Registration/RegistrationScreen';
// import LoginScreen from '../Login/LoginScreen';

// import Dashboard from '../Dashboard/Dashboard';
// import CreditCardList from '../CreditCard/index';
// import CreditCardForm from '../CreditCard/form';
// import SideBar from "../SideBar/SideBar.js";

export default class tabNavigator extends Component {
  render() {
    return (

      <Footer>
        <FooterTab>
          <Button vertical onPress={() => this.props.navigation.navigate('Register')}>
            <Icon name="apps" />
            <Text>Profile</Text>
          </Button>
          <Button vertical onPress={() => this.props.navigation.navigate('CreditCardList')}>
            <Icon name="camera" />
            <Text>Credit Cards</Text>
          </Button>
          <Button vertical onPress={() => this.props.navigation.navigate('CreditCardForm')}>
            <Icon name="navigate" />
            <Text>EMI</Text>
          </Button>
          <Button vertical onPress={() => this.props.navigation.navigate('Login')}>
            <Icon name="person" />
            <Text>Bill</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}