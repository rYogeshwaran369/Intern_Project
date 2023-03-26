import React, { Component } from 'react'
import { View,Text,TouchableOpacity,Image, ScrollView,StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import * as Font from 'expo-font'

export default class Testregistrationstatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fontsLoaded: false,
        };
      }
      async componentDidMount() {
        await Font.loadAsync({
            'algreya':require('../assets/fonts/AlegreyaSans-Bold.ttf'),
          'sans-semi': require('../assets/fonts/SourceSansPro-SemiBold.ttf'),
          'regular' : require('../assets/fonts/SourceSansPro-Regular.ttf'),
          'sans-bold':require('../assets/fonts/SourceSansPro-Bold.ttf')
        });
        this.setState({ fontsLoaded: true });}
  render() {
    return (
        <SafeAreaProvider style={{marginTop:40,backgroundColor:"white"}}>
        
{/* PROFILE HEADER          */}
        
<View style={{flexDirection:"row",padding:25,height:100}}>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Testdetail")}}>
        <Image style={{width:30,height:30,marginTop:10,marginRight:10}} source={{uri:"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679594419/left-arrow_jlddlp.png"}}/>
        </TouchableOpacity>
        <View style={{marginRight:"auto"}}>
        <Text style={{fontSize:17,fontFamily:"regular"}}> Class 12</Text>
        <Text style={{fontFamily:"sans-bold",fontSize:22,paddingTop:1}}> Exams</Text>
        </View>
        <View >
        <Image style={{width:55,height:55}} source={{uri:"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679584907/profile_zyskkn.png"}}/>
        </View>
        </View>

<ScrollView>

{/* EXAM TOPIC HEADER  */}

<View style={{alignItems:"center",justifyContent:"center",paddingTop:10}}>
    <Text style={{fontFamily:"sans-bold",fontSize:23,padding:4}}>Sample Free Mock Test - 01</Text>
    <Text style={{fontFamily:"regular",fontSize:18}}>01-04-2023</Text>
</View>


<Image style={{width:300,height:229,marginLeft:"auto",marginRight:"auto",marginTop:14}} source={{uri:"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679673570/markpage_biyjgi.png"}}/>

{/* REGISTRATION STATUS  */}

<Text style={{marginLeft:"auto",marginRight:"auto",fontFamily:"sans-bold",fontSize:23,color:"#21A445",padding:5,marginTop:7}}>Registration Successful! 🎊</Text>


{/* TEST TIMING  */}

<View style={{backgroundColor:"gainsboro",width:310,height:400,borderRadius:10,marginLeft:"auto",marginRight:"auto",margin:20}}>
    <View style={{marginLeft:20,marginTop:20,padding:10}}>
    <View>
        <Text style={{fontFamily:"sans-bold",fontSize:20}}>Timing</Text>
        <View style={{marginLeft:20}}>
        <Text style={{padding:2}}>06:00 PM to 07:30 PM (IST) </Text>
        </View>
    </View>

{/* TEST DETAILS  */}

       
    <View style={{paddingTop:10}}>
        <Text style={{fontFamily:"sans-bold",fontSize:20}}>Test Details</Text>
        <View style={{marginLeft:20}}>
            <Text style={{fontSize:17,padding:2,fontFamily:"regular"}}>Electrostatics</Text>
            <Text style={{fontSize:17,padding:2,fontFamily:"regular"}}>Class 12</Text>
            <Text style={{fontSize:17,padding:2,fontFamily:"regular"}}>State Board</Text>
            <Text style={{fontSize:17,padding:2,fontFamily:"regular"}}>Total 15 Questions</Text>
            <Text style={{fontSize:17,padding:2,fontFamily:"regular"}}>Positive Marks - 4</Text>
            <Text style={{fontSize:17,padding:2,fontFamily:"regular"}}>Negative Marks - 0</Text>
            <Text style={{fontSize:17,padding:2,fontFamily:"regular"}}>Total 60 Marks</Text>
            <Text style={{fontSize:17,padding:2,fontFamily:"regular"}}>15 Minutes test duration</Text>
        </View>
    </View>
        </View>
    </View>
    </ScrollView>
        </SafeAreaProvider>
    )
  }
}
const style=StyleSheet.create({
    Button:{
        width:270,
        height:45,
        paddingTop:30,
        borderRadius:10,
        backgroundColor:"black",
        marginTop:10
      }
})