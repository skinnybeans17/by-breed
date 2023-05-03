import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import BreedsApp from './BreedsApp';
import DetailsScreen from './DetailsScreen';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Breeds" screenOptions={{
        title: 'By Breed',
        headerStyle: {
          backgroundColor: 'white'
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 22
        }
      }}>
        <Stack.Screen name="Breeds" component={BreedsApp}/>
        <Stack.Screen name="Details" component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;