import { router } from "expo-router";
import * as SecureStorage from "expo-secure-store";
import LottieView from 'lottie-react-native';
import React from "react";
import { Button, StyleSheet, View } from "react-native";
import Swiper from 'react-native-swiper';

export default function OnBoardingScreen(){
  
  const updateOnboardingStatus = async () => {
    await SecureStorage.setItemAsync("isOnboarding", "true");
        router.replace("/screens/dashboard");
  }

    return (

      <Swiper style={styles.wrapper} showsButtons={true}>
        <LottieView
          source={require('../../assets/fitness.json')}
          autoPlay
          loop
          style={{ width: "80%", height: "80%" }}
        />
        
        <LottieView 
          source={require('../../assets/running_character.json')}
          autoPlay
          loop
          style={{ width: "80%", height: "80%" }}
        />
        <View>
        <LottieView 
          source={require('../../assets/yoga_day.json')}
          autoPlay
          loop
          style={{ width: "80%", height: "80%" }}
        />
        <Button
          title="Get Started"
          onPress={() => updateOnboardingStatus()}
        />
        </View>
      </Swiper>
    )
}
const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide1: {
    height: '100%',
    width: '70%',
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
