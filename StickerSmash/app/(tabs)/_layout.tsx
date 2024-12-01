import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
const Tab_layout = () => {
  return (
   <Tabs
   screenOptions={{
    tabBarActiveTintColor: '#ffd33d',
    headerStyle: {
      backgroundColor: '#25292e',
    },
    headerShadowVisible: false,
    headerTintColor: '#fff',
    tabBarStyle: {
    backgroundColor: '#25292e',
    },
  }}>
   <Tabs.Screen name='index'
   options={{
    title:"Home",
    tabBarIcon:({color,focused})=>(
     <Ionicons name={focused?"home-sharp":"home-outline"} color={color} size={24} />
    )
   }}
   />
    <Tabs.Screen name='about' options={{ title: 'About',
        tabBarIcon:({focused,color})=>(
            <Ionicons  name={focused?"information-circle-sharp":"information-circle-outline"}   size={24} color={color} />
        )
     }} />
   
   </Tabs>
  )
}

export default Tab_layout