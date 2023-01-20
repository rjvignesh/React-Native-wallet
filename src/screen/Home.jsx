import React from "react";
import { NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import SignUp from "./SignUp";
import Camera from "./Camera";
const Stack = createNativeStackNavigator();
const Home = ()=>{
    return (
        <NavigationContainer
        >
            <Stack.Navigator
            screenOptions={
              { headerShown:false}
            }>
                <Stack.Screen name="signup" component={SignUp}/>
                <Stack.Screen name="camera" component={Camera}/>
            </Stack.Navigator> 
        </NavigationContainer>
    )
}
export default Home