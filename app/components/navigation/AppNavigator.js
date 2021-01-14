import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import {createStackNavigator} from '@react-navigation/stack'

import NewsList from '../lists/NewsList'
import Home from '../screens/Home'
import NewsDetails from '../screens/NewsDetails'

const Stack = createStackNavigator()

const AppNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerTransparent:true,
            headerTitle:'',
            headerTintColor:'white',
            headerLeftContainerStyle:{
                width:40,
                height:40,
                borderRadius:20,
                backgroundColor:'rgba(92,90,91,0.7)',
                alignItems:'center',
                marginLeft:10,

            }
        }}>
            <Stack.Screen options={{headerShown:false}} name='Home' component={Home}/>
            <Stack.Screen name='NewsDetails' component={NewsDetails}/>
            <Stack.Screen name='NewsList' component={NewsList}/>
        </Stack.Navigator>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})
