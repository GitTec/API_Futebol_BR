import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {Home} from '../views/Home';
import {Brasileirao} from '../views/brasileirao';

const { Navigator, Screen } = createStackNavigator();

export function Routes() {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    headerShown: false
                }}>
                    
                <Screen
                    name="Home"
                    component={Home}
                />
                <Screen
                    name="Brasileirao"
                    component={Brasileirao}
                />
            </Navigator>
        </NavigationContainer>
    )
}
