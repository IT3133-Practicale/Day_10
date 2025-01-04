import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './components/Home';

const Stack = createNativeStackNavigator();
export default function App() {

  const stack=createNativeStackNavigator();


  return (
    <>
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='home'
        screenOptions={{
          headerStyle: { backgroundColor: 'tomato'},
        }}
        >
          <Stack.Screen name='home' component={Home} options={{title:'Welcome'}}/>
          
        </Stack.Navigator>
      </NavigationContainer>
      
    </SafeAreaProvider>
    </>
  );
}
