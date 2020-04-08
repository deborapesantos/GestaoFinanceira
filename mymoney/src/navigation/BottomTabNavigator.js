import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Container,Right,Fab,Button,View} from 'native-base';
import TabBarIcon from '../components/TabBarIcon';
import MyHome from '../screens/Home/index';
import Operacional from '../screens/Operacional/index';
import Outros from '../screens/Outros/index';
import Login from '../screens/Login/index';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Carteira';

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions(getHeader(route));
  
  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME} headerMode="screen"
    style={{ borderTopColor: 'red' }}>
      <BottomTab.Screen
        name="Carteira"
        component={MyHome}
        options={{
          title: 'Carteira',

          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
        
      />
      {/* <BottomTab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarVisible:false,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
        
      /> */}
      
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
       <BottomTab.Screen
        name="."
        component={Operacional}
        options={{
          title: '.'
        }}
      />
    </BottomTab.Navigator>
   
  );
}



  function getHeader(route) {
    const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;
    if(routeName == "Login")
    {
      return {
        
        headerStyle: {
          backgroundColor: '#930D72',
          shadowRadius: 0,
          shadowOffset: {
              height: 0,
          },
          elevation:0
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color:'#930D72'
        }

      };
    }
    else
    {

      return { 
        headerTitle: getHeaderTitle(route), 
        headerStyle: {
            backgroundColor: '#930D72',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },

        


    }
  }
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

