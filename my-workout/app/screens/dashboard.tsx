import * as SecureStorage from 'expo-secure-store';
import LottieView from 'lottie-react-native';
import { Button, Text, View } from "react-native";

export default function Dashboard(){
    const updateOnboardingStatus = async () => {
        await SecureStorage.setItemAsync("isOnboarding","false");
        const status = await SecureStorage.getItemAsync("isOnboarding");
        console.log("Onboarding status updated to:", status);
              
      }
    
    return(
        <View style={{ flex: 1, alignItems:'center',marginTop:50 }}>
            <LottieView
            source ={require('../../assets/jumping_jack.json')}
            loop
            autoPlay
            style={{ width: "60%", height: "60%" }} 
            />
            <Text>Jumping Jack Exercise</Text>
            <Button
                      title="Get Started"
                      onPress={() => updateOnboardingStatus()}
                    />
        </View>
    )
}