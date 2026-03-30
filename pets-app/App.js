import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';


// Importando as telas
import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
import DetailsScreen from './screens/DetailsScreen';
import ProfileScreen from './screens/ProfileScreen';
import AdoptionScreen from './screens/AdoptionScreen';

// Criando navegadores
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Stack da Lista (Lista → Detalhes)
function ListStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Lista de Pets" component={ListScreen} />
      <Stack.Screen name="Detalhes" component={DetailsScreen} />
      <Stack.Screen name="Adoção" component={AdoptionScreen} />
    </Stack.Navigator>
  );
}

// Navegação principal (Tabs)
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
       screenOptions={({ route }) => ({
       tabBarIcon: ({ color, size }) => {
       let iconName;

      if (route.name === 'Home') {
        iconName = 'home';
      } else if (route.name === 'Lista') {
        iconName = 'list';
      } else if (route.name === 'Perfil') {
        iconName = 'person';
      }

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: '#4CAF50',
    tabBarInactiveTintColor: 'gray'
  })}
>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Lista" component={ListStack} />
        <Tab.Screen name="Perfil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}