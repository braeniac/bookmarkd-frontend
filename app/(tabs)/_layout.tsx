import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Device from 'expo-device';


export default function TabLayout() {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: '#333',
            tabBarInactiveTintColor: '#A8B9C9',	
            tabBarShowLabel: false,
            animation: 'shift',
            tabBarStyle: { 
              position: 'absolute', 
              backgroundColor: '#FFF',
              height: Device.osName === 'iOS' ? 80 : 70
            }  
        }}
    >
      <Tabs.Screen 
        name="index"     
        options={{
            tabBarIconStyle: {
              marginTop: 10
            },
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
            ),
            headerShown: false
          }}
        />
      <Tabs.Screen 
        name="search" 
        options={{
            tabBarIconStyle: {
              marginTop: 10
            },
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? 'search-sharp' : 'search-outline'} color={color} size={24} />
            ),
            headerShown: false
        }}  
      />
      <Tabs.Screen 
        name="bookmark"
        options={{
            tabBarIconStyle: {
              marginTop: 10
            },
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? 'bookmarks-sharp' : 'bookmarks-outline'} color={color} size={24} />
            ),
            headerShown: false
        }}  
      />
		<Tabs.Screen 
			name="activity"  
			options={{
            tabBarIconStyle: {
              marginTop: 10
            },
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? 'flash-sharp' : 'flash-outline'} color={color} size={24} />
            ),
            headerShown: false
        }}  
      />
      <Tabs.Screen 
			name="account"   
			options={{
            tabBarIconStyle: {
              marginTop: 10
            },
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? 'person-sharp' : 'person-outline'} color={color} size={24} />
            ),
            headerShown: false
        }}  
      />
    </Tabs>
  );
}
