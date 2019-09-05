import React, { Component } from 'react';
import { Platform, StatusBar } from 'react-native';
import {
    createSwitchNavigator,
    createAppContainer,
    createDrawerNavigator,
    createStackNavigator
} from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';

import RegistrationScreen from '../Registration/RegistrationScreen';
import LoginScreen from '../Login/LoginScreen';

import Dashboard from '../Dashboard/Dashboard';
import CreditCardList from '../CreditCard/index';
import CreditCardForm from '../CreditCard/form';
import SideBar from "../SideBar/SideBar.js";

const DashboardStackNavigator = createStackNavigator(
    {
        DashboardNavigator: Dashboard
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="md-menu"
                        size={30}
                    />
                )
            };
        }
    }
);

const CreditCardListStackNavigator = createStackNavigator(
    {
        CreditCardListNavigator: CreditCardList
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="md-menu"
                        size={30}
                    />
                )
            };
        }
    }
);

const CreditCardFormStackNavigator = createStackNavigator(
    {
        CreditCardFormNavigator: CreditCardForm
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="md-menu"
                        size={30}
                    />
                )
            };
        }
    }
);
const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: {
        screen: DashboardStackNavigator
    },
    CreditCardList: {
        screen: CreditCardListStackNavigator
    },
    CreditCardForm: {
        screen: CreditCardFormStackNavigator
    },
});

const AppSwitchNavigator = createSwitchNavigator({
    Dashboard: { screen: AppDrawerNavigator },
    CreditCardList: { screen: CreditCardList },
    CreditCardForm: { screen: CreditCardForm },
});

const LeftMenuNavigator = createAppContainer(AppSwitchNavigator);

export default LeftMenuNavigator;