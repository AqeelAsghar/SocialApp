import React from 'react';
import {Text,View,StyleSheet, Button,Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnBoardingScreen = ({navigation}) => {
  return (
    <Onboarding
    // we use replace here because we doest want to give user control to use back button to see storyboard
    onSkip={()=>navigation.replace('LoginScreen')} 
    onDone={()=>navigation.navigate('LoginScreen')}
    pages={[
        {
            backgroundColor: '#8CD4F3',
            image: <Image style={styles.OnboardingImage} source={require('../assets/onBording1.png')} />,
            title: 'Welcome',
            subtitle: 'Happy to see you here!',
        },
        {
            backgroundColor: '#CECBCA',
            image: <Image style={styles.OnboardingImage} source={require('../assets/onBording2.png')} />,
            title: 'Connect to the World',
            subtitle: 'Try a new way to connect with the World with Us',
        },
        {
            backgroundColor: '#FF7E33',
            image: <Image style={styles.OnboardingImage} source={require('../assets/onBording3.png')} />,
            title: 'Become a Star',
            subtitle: 'Let the spot-light to capture you',
        },

]}
/>
  );
}

export default OnBoardingScreen;

const styles = StyleSheet.create({
    OnboardingImage:{
        resizeMode:'contain',
        height:350
    }

})