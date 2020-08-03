import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import useLinking from './src/navigation/useLinking';

import Login from './src/screens/Login';
import HomeIndex from './src/screens/Home';

import ContaReceita from './src/screens/ContaReceita';
import ContaDespesa from './src/screens/ContaDespesa';
import CartaoCredito from './src/screens/CartaoCredito';
import ContaDespesaDetail from './src/screens/ContaDespesaDetail';
import ContaDespesaForm from './src/screens/ContaDespesaForm/index';
import ContaDespesaCartaoCreditoForm from './src/screens/ContaDespesaCartaoCreditoForm/index';
import ContaReceitaForm from './src/screens/ContaReceitaForm/index';
import ContaDespesaEdit from './src/screens/ContaDespesaEdit/index';
import Cadastros from './src/screens/Cadastros/index';
import CadContaForm from './src/screens/CadContaForm/index';
import CadGrupoFamiliarForm from './src/screens/CadGrupoFamiliarForm/index';
import CadCartaoCreditoForm from './src/screens/CadCartaoCreditoForm/index';
import Perfil from './src/screens/Profile/index';
import CadUsuarioForm from './src/screens/CadUsuarioForm/index';
import ListaUsuarios from './src/screens/ListaUsuarios/index';
import NovoCadUsuario from './src/screens/NovoCadUsuario/index';

import { Header } from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

export default function App(props) {

  console.disableYellowBox = true;
  
 
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./src/assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <NavigationContainer ref={containerRef} initialState={initialNavigationState} >
          <Stack.Navigator >
            <Stack.Screen name="Login" component={Login}  options={{ headerShown: false}} />
            <Stack.Screen name="HomeIndex" component={HomeIndex}  options={{ headerShown: false}} />
            <Stack.Screen name="ContaReceita" component={ContaReceita} options={{ title:'Receitas'}}  />
            <Stack.Screen name="ContaDespesa" component={ContaDespesa} options={{ title:'Despesas',headerStyle:{ backgroundColor:"red"},headerTitleStyle:{color:"#FFFFFF"},headerBackTitleStyle:{color:"#FFFFFF"}}} />
            <Stack.Screen name="CartaoCredito" component={CartaoCredito} options={{ title:'Cartão Crédito',headerStyle:{ backgroundColor:"red"},headerTitleStyle:{color:"#FFFFFF"},headerBackTitleStyle:{color:"#FFFFFF"}}} />
            <Stack.Screen name="ContaDespesaDetail" component={ContaDespesaDetail} options={{ title:'Detalhes da despesa',headerStyle:{ backgroundColor:"red"},headerTitleStyle:{color:"#FFFFFF"},headerBackTitleStyle:{color:"#FFFFFF"}}} />
            <Stack.Screen name="Root" component={BottomTabNavigator}  options={{ headerShown: false}}/> 
            <Stack.Screen name="ContaDespesaForm" component={ContaDespesaForm} options={{ title:'Criar Despesa',headerStyle:{ backgroundColor:"red"},headerTitleStyle:{color:"#FFFFFF"},headerBackTitleStyle:{color:"#FFFFFF"}}} />
            <Stack.Screen name="ContaDespesaCartaoCreditoForm" component={ContaDespesaCartaoCreditoForm} options={{ title:'Criar Despesa de cartão de crédito',headerStyle:{ backgroundColor:"red"},headerTitleStyle:{color:"#FFFFFF"},headerBackTitleStyle:{color:"#FFFFFF"}}} />
            <Stack.Screen name="ContaReceitaForm" component={ContaReceitaForm} options={{ title:'Criar Receita',headerStyle:{ backgroundColor:"green"},headerTitleStyle:{color:"#FFFFFF"},headerBackTitleStyle:{color:"#FFFFFF"}}} />
            <Stack.Screen name="ContaDespesaEdit" component={ContaDespesaEdit} options={{ title:'Editar Despesa',headerStyle:{ backgroundColor:"#red"},headerTitleStyle:{color:"#FFFFFF"},headerBackTitleStyle:{color:"#FFFFFF"}}} />
            <Stack.Screen name="Cadastros" component={Cadastros} options={{ title:'Cadastros',headerStyle:{ backgroundColor:"#ffffff"},headerTitleStyle:{color:"#000000"},headerBackTitleStyle:{color:"#cccccc"}}} />
            <Stack.Screen name="CadContaForm" component={CadContaForm} options={{ title:'Conta',headerStyle:{ backgroundColor:"#ffffff"},headerTitleStyle:{color:"#000000"},headerBackTitleStyle:{color:"#cccccc"}}} />
            <Stack.Screen name="CadGrupoFamiliarForm" component={CadGrupoFamiliarForm} options={{ title:'Grupo',headerStyle:{ backgroundColor:"#ffffff"},headerTitleStyle:{color:"#000000"},headerBackTitleStyle:{color:"#cccccc"}}} />
            <Stack.Screen name="CadCartaoCreditoForm" component={CadCartaoCreditoForm} options={{ title:'Cartão de Crédito',headerStyle:{ backgroundColor:"#ffffff"},headerTitleStyle:{color:"#000000"},headerBackTitleStyle:{color:"#cccccc"}}} />
            <Stack.Screen name="Perfil" component={Perfil} options={{ title:'Perfil do usúario',headerStyle:{ backgroundColor:"#ffffff"},headerTitleStyle:{color:"#000000"},headerBackTitleStyle:{color:"#cccccc"}}} />
           
            <Stack.Screen name="CadUsuarioForm" component={CadUsuarioForm} options={{ title:'Editar Permissões de usúario',headerStyle:{ backgroundColor:"#ffffff"},headerTitleStyle:{color:"#000000"},headerBackTitleStyle:{color:"#cccccc"}}} />
            <Stack.Screen name="ListaUsuarios" component={ListaUsuarios} options={{ title:'Lista de usuários vinculados',headerStyle:{ backgroundColor:"#ffffff"},headerTitleStyle:{color:"#000000"},headerBackTitleStyle:{color:"#cccccc"}}} />
            <Stack.Screen name="NovoCadUsuario" component={NovoCadUsuario} options={{ title:'Cadastrar usuário vinculado',headerStyle:{ backgroundColor:"#ffffff"},headerTitleStyle:{color:"#000000"},headerBackTitleStyle:{color:"#cccccc"}}} />
           
            
          </Stack.Navigator>
         
        </NavigationContainer>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
