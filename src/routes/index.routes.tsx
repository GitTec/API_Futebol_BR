import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {Home} from '../views/Home';
import {Brasileirao} from '../views/brasileirao';
import { DetalhesPartida } from '../views/detalhes-partida';
import { CopaDoBrasil } from '../views/copa-do-brasil';

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
                <Screen
                    name="DetalhesPartida"
                    component={DetalhesPartida}
                />
                <Screen
                    name="CopaDoBrasil"
                    component={CopaDoBrasil}
                />
            </Navigator>
        </NavigationContainer>
    )
}
