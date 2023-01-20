import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView, TextInput,Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, Modal, FlatList } from "react-native";
import {LinearGradient} from "expo-linear-gradient"
import { Logo,Visible,Visible_off } from "../constant/Images"
import { Icon } from "@rneui/themed";
import { COUNTRY } from "../constant/Data";
const SignUp = ({navigation})=>{
    const [passVisible,setVisible] = useState(true);
    const [countryLst,setCountyList] = useState(COUNTRY);
    const [areaselected,setArea] = useState(COUNTRY[0]);
    const [modalView,setModal] = useState(false);
    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex:1,backgroundColor:"transparent"}}>
            <LinearGradient
                style={{flex:1}}
                colors={['#12D877','#0EBB64']}
                start={{x:0,y:0}}
                end={{x:1,y:1}}>
                <View style={{justifyContent:"center",alignItems:"center"
                ,marginTop:100}}>
                    <Image
                    source={Logo}
                    resizeMode="center"
                    style={{width:200,height:200}}
                    />
                </View>
                <View style={{paddingHorizontal:10}}>
                    <Text style={{color:"white"}}>
                        Your Name
                    </Text>
                    <TextInput 
                        placeholder="Enter your name"
                        placeholderTextColor={"white"}
                        color="white"
                        style={{width:"100%",height:50,borderBottomColor:"white",borderBottomWidth:2}}
                        />
                </View>
                <View style={{padding:10}}>
                    <Text style={{color:"white"}}>Phone Number</Text>
                    <View style={{flexDirection:"row", height:50}}>
                        <View style={{flex:0.3}}>
                            <TouchableOpacity
                            onPress={()=>setModal(true)}
                        style={{width:"90%",height:50,borderBottomColor:"white",borderBottomWidth:2,flexDirection:"row",alignItems:"center"}}                    
                            >
                            <Icon
                            type="ionicon"
                            name="chevron-down-outline"
                            color={"white"}
                            size={20}
                            />
                                <Text style={{color:"white",fontStyle:"italic",textAlign:"center"}}>(+{areaselected.callingCodes}) {areaselected.name}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:0.7}}>
                            <TextInput
                        placeholder="Enter Phone Number"
                        placeholderTextColor={"white"}
                        color="white"
                        style={{height:50,borderBottomColor:"white",borderBottomWidth:2}}                                                
                            />
                        </View>
                    </View>
                </View>

                <View style={{padding:10}}>
                    <Text style={{color:"white"}}>
                        Password
                    </Text>
                    <View>
                        <TextInput 
                            placeholder="Enter your Password"
                            secureTextEntry={passVisible}
                            placeholderTextColor={"white"}
                            color="white"
                            style={{width:"100%",height:50,borderBottomColor:"white",borderBottomWidth:2}}
                            />
                        <TouchableOpacity 
                        color="white"
                        onPress={()=>setVisible(!passVisible)}
                        style={{position:"absolute",right:10,bottom:10}}>
                            <Image
                                source={passVisible? Visible_off : Visible}
                                style={{width:20,height:20}}
                            />
                        </TouchableOpacity>
                    </View>
                </View> 
                
                <View >
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate("camera")}
                    style={{backgroundColor:"black",
                    borderRadius:20,height:60,justifyContent:"center",alignItems:"center",
                    width:"80%",alignSelf:"center",paddingVertical:10}}> 
                        <Text style={{color:"white",fontSize:20}}>Continue</Text>
                    </TouchableOpacity>     
                </View>                                  
            </LinearGradient>

            {modalView &&
            <Modal 
            animationType="slide"
            transparent={true}
            visible={modalView}
            >
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <View style={{width:"60%",height:"60%",backgroundColor:"white",padding:10,borderRadius:20}}>
                    <FlatList
                    showsVerticalScrollIndicator={false}
                    data={COUNTRY}
                    keyExtractor={(item)=>item.name}
                    renderItem={({item})=> 
                    <TouchableOpacity onPress={()=>{
                        setModal(false);
                        console.log(item);
                        setArea(item)
                    }}>
                            <Text style={{fontSize:20}}>(+{item.callingCodes}) - {item.name}</Text>
                    </TouchableOpacity>}
                    />
                </View>
            </View>

            </Modal>}
        </KeyboardAvoidingView>
    )
}

export default SignUp