import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import {View,StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingScreen from '../screens/OnBordingScreen';
import LoginScreen from '../screens/LoginScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-async-storage/async-storage';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();

const AuthStack = () => {

  const [isFirstLaunch,setIsFirstLaunch] = useState(null);
  let routeName
     
  // use Effect hook becuase we want to track is it user first time in a app or not 
  // that why we use async storage 
  useEffect(()=>{
      // get alreadyLaunch variable item from a async storage and then check its Value 
      AsyncStorage.getItem('alreadyLaunch').then( (value) =>{
          // if its value is null means its user first time launch 
          if(value==null){
              // so we set the alreadyLaunch variable value true and also update the hook 
              AsyncStorage.setItem('alreadyLaunch','true')
              setIsFirstLaunch(true)
          }else{
              // if the alreadyLaunch value is not null means its not firstlaunch so we set the useState value fasle because in
              // this case we want to show any action IN THIS CASE IT IS STORYBOARD BUT IT CAN BE ANYTHING LIKE LOGIN AGAIN ETC 
              setIsFirstLaunch(false)
          }
      });
  },[])

    // check is isFirstLaunch value is null then Show nothing 
    if(isFirstLaunch === null){
        return null
    }else if(isFirstLaunch === true){
        // check is isFirstLaunch value is true Means its user first time in the app so we show the on boarding story screens
            routeName = 'OnBoardingScreen'
    }else{
        // that means isFirstLaunch is false that show user come already into the app that show only Login Screen to user
            routeName = 'LoginScreen'
    } 


  return (
     // by default initial route is the first screen for our case its is boarding screen 
      // but in our case it is we check where its users first time login in a app after that show the screen 
    
       <Stack.Navigator initialRouteName={routeName}>
          <Stack.Screen name="OnBoadingScreen" component={OnBoardingScreen} options={{headerShown:false}}/>
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} 
             
             options={({navigation}) => ({
              title: '',
              headerStyle: {
                backgroundColor: '#f9fafd',
                shadowColor: '#f9fafd',
                elevation: 0,
              },
              headerLeft: () => (
                <View style={{marginLeft: 10}}>
                  <FontAwesome.Button 
                    name="long-arrow-left"
                    size={25}
                    backgroundColor="#f9fafd"
                    color="#333"
                    onPress={() => navigation.navigate('LoginScreen')}
                  />
                </View>
              ),
            })}

          />
       </Stack.Navigator>
    

    
  );
}

export default AuthStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})