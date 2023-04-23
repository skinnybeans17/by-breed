import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import BreedsApp from './BreedsApp';
import DetailsScreen from './DetailsScreen';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Breeds">
        <Stack.Screen name="Breeds" component={BreedsApp}/>
        <Stack.Screen name="Details" component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}