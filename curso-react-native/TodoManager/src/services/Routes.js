import React from 'react';
import { StackNavigator } from 'react-navigation'; 
import App from '../../App';
import Login from '../screens/Login';
import Register from '../screens/Register';

export const Routes = StackNavigator({ 
        App: { screen: App },
        Login: { screen: Login }, 
        Register: { screen: Register }
    }, 
    {
        headerMode: 'screen' 
    }
);