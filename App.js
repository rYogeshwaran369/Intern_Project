import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './components/welcome';
import Start from './components/start';
import Login from './components/login';
import Register from './components/register';
import ForgotPassword from './components/forgetPassword';
import EmailSend from './components/emailsend';
import Homepage from './components/homepage';
import ExploreCourses from './components/explorecourses';
import Exams from './components/exams';
import Upcomingexams from './components/upcomingexams';
import Testdetail from './components/testdetail';
import Testregistrationstatus from './components/testregistrationstatus';
import Test from './components/test';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import React from 'react';



const Stack = createStackNavigator();

export default class App extends React.Component{
  
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" options={{ headerShown:false }} component={Welcome} />
        <Stack.Screen name="Test" options={{ headerShown:false }} component={Test} />
          <Stack.Screen name="Start"  options={{ headerShown:false }} component={Start} />
          <Stack.Screen name="Login"  options={{ headerShown:false }} component={Login} />
          <Stack.Screen name="Register"  options={{ headerShown:false }} component={Register} />
          <Stack.Screen name="ForgotPassword" options={{ title: 'CARVE IT.',headerTitleStyle:{color:"black"} }}  component={ForgotPassword} />
          <Stack.Screen name="EmailSend" options={{ title: 'CARVE IT.',headerTitleStyle:{color:"black"} }}  component={EmailSend} />
          <Stack.Screen name="Homepage"  options={{ headerShown:false }} component={Homepage} />
          <Stack.Screen name="ExploreCourses"  options={{ headerShown:false }} component={ExploreCourses} />
          <Stack.Screen name="Exams"  options={{ headerShown:false }} component={Exams} />
          <Stack.Screen name="Upcomingexams"  options={{ headerShown:false }} component={Upcomingexams} />
          <Stack.Screen name="Testdetail"  options={{ headerShown:false }} component={Testdetail} />
          <Stack.Screen name="Testregistrationstatus"  options={{ headerShown:false }} component={Testregistrationstatus} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }}

