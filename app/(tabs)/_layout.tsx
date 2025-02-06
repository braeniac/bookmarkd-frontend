import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Device from 'expo-device';
import * as Haptics from 'expo-haptics';
import { TouchableOpacity } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: '#333',
            tabBarInactiveTintColor: '#A8B9C9',	
            tabBarShowLabel: false,
            headerShown: false,
            animation: 'fade',
            tabBarStyle: { 
              position: 'absolute', 
              backgroundColor: '#FFF',
              height: Device.osName === 'iOS' ? 80 : 70
            },
            tabBarIconStyle: {
              marginTop: 10
            },
        }}
    >
      <Tabs.Screen 
        name="index"     
        options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'library-sharp' : 'library-outline'} color={color} size={24} />
            ),
        }}
        />
      <Tabs.Screen 
        name="search" 
        options={{
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? 'search-sharp' : 'search-outline'} color={color} size={24} />
            ),
        }}  
      />
      <Tabs.Screen 
        name="bookmark"
        options={{
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? 'bookmarks-sharp' : 'bookmarks-outline'} color={color} size={24} />
            ),
        }}  
      />
		  <Tabs.Screen 
			  name="activity"  
			  options={{
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? 'flash-sharp' : 'flash-outline'} color={color} size={24} />
            ),
        }}  
      />
      <Tabs.Screen 
			  name="account"   
			  options={{
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? 'person-sharp' : 'person-outline'} color={color} size={24} />
            ),
        }}  
      />
    </Tabs>
  );
}
