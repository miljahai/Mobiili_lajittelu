import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import Etusivu from './Etusivu';
import Koodit from './Koodit';
import Linkit from './Linkit';


const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size }) => {
          let iconName;

          if (route.name === 'Haku') {
            iconName = "search"
          }
          else if (route.name === 'Koodit') {
            iconName = "list-ul"
          }
          else if (route.name === 'Lisätietoa') {
            iconName = "info"
          }
          
          return <FontAwesome name={iconName} size={24} color='green'/>
        }
      })}>
        <Tab.Screen name='Haku' component={Etusivu} options={{headerShown: false}}/>
        <Tab.Screen name='Koodit' component={Koodit} options={{headerShown: false}}/>
        <Tab.Screen name='Lisätietoa' component={Linkit} options={{headerShown: false}}/>
      </Tab.Navigator>
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
