import React from "react";
import Icon from 'react-native-vector-icons/AntDesign';
import {View, Text} from 'react-native'
import {ScreenHome} from '../screen/home';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

  
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  

export const BottomNavigation = () =>{
return(
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name="Homeeeeeee" component={ScreenHome}options={{   TabBarIcon: ({color}) => (
        <TabBarIcon name="user" color={color}/>
         ),headerShown: false  }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
         TabBarIcon: ({color}) => (
        <TabBarIcon name="user" color={color}/>
         ),
      }}/>

    </Tab.Navigator>

)

}

function TabBarIcon({name, color}) {
    return(
        <Icon size={30} style={{marginBottom: -3}} name={name} color={color}/>
    );
}



