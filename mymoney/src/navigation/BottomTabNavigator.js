import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeIndex from '../screens/Home/index';
import Operacional from '../screens/Operacional/index';
import Outros from '../screens/Outros/index';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Carteira';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route), headerStyle: {
    backgroundColor: '#00adb5',//3fc1c9 //364f6b 
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  }, });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Carteira"
        component={HomeIndex}
        options={{
          title: 'Carteira',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      <BottomTab.Screen
        name="Operacional"
        component={Operacional}
        options={{
          title: 'Operacional',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
     
       <BottomTab.Screen
        name="Mais"
        component={Outros}
        options={{
          title: 'Mais',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Carteira':
      return 'Carteira Virtual';
    case 'Operacional':
      return 'Operacional';
      case 'Mais':
        return 'Mais';
  }
}
