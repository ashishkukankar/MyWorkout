import { Redirect } from "expo-router";
import * as SecureStorage from 'expo-secure-store';
import React, { useEffect, useState } from "react";

export default function index(){

  const [isOnboarding,setIsOnboarding] = useState<boolean|null>(null);

  const checkOnboardingStatus = async () => {
        const status = await SecureStorage.getItemAsync("isOnboarding");
        console.log("Checking onboarding status1", status?.toString());
        setIsOnboarding(status !== "false");
        console.log("Checking onboarding status2", isOnboarding);
    }

  useEffect(()=>{
    checkOnboardingStatus();
  },[]);

  if(isOnboarding === null){
    return null;
  }
  
 return (
    isOnboarding ?(
         <Redirect href="/screens/dashboard" />
    ) : (
        <Redirect href="/screens/onboarding" />
       
    )
  )
}