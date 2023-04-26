import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Header, Icon, Input } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Etusivu from './Etusivu';
import Vastaus from './Vastaus';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Etusivu' component={Etusivu}/>
        <Stack.Screen name='Vastaus' component={Vastaus}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {

  },
  text: {
    margin: 9
  },
  input: {
    padding: 10
  }
});
