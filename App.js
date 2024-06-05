import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './src/screens/Home';
import userRead from './src/screens/userRead'
import userRegister from './src/screens/userRegister';
import userDelete from './src/screens/userDelete';
import userUpdate from './src/screens/userUpdate';
import userAllDetails from './src/screens/userAllDetails';


import UserList from './src/screens/UserList';
import CreateUser from './src/screens/CreateUser';
import UserDetails from './src/screens/UserDetails';

const Stack = createStackNavigator();


function MyStack(){
  return(    
  <Stack.Navigator> 
    <Stack.Screen name='UserList' component={UserList} options={{title: 'User List'}}/>
    <Stack.Screen name='CreateUser' component={CreateUser} options={{title: 'Create User'}}/>
    <Stack.Screen name='UserDetails' component={UserDetails} options={{title: 'User Details'}}/>

  </Stack.Navigator>)
}


export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
