import React, { Component } from 'react'
import { View,Text,TouchableOpacity,Image } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native'
import * as Font from 'expo-font';



export default class Testdetail extends Component {
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
        
{/* HEADER PROFILE PAGE  */}

<View style={{flexDirection:"row",padding:25,height:100}}>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Upcomingexams")}}>
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


{/* TEST TOPIC HEADER  */}

<View style={{alignItems:"center",justifyContent:"center",paddingTop:10}}>
    <Text style={{fontFamily:"sans-bold",fontSize:23,padding:4}}>Sample Free Mock Test - 01</Text>
    <Text style={{fontFamily:"regular",fontSize:18}}>01-04-2023</Text>
</View>

{/* TEST DETAILS CARD  */}

<ScrollView style={{marginBottom:10}}>
<View style={{backgroundColor:"gainsboro",width:310,height:420,borderRadius:10,marginLeft:"auto",marginRight:"auto",margin:20}}>
    
    <View style={{marginLeft:"auto",marginRight:"auto"}}>
        <Text style={{marginLeft:"auto",marginRight:"auto",marginTop:10,fontFamily:"sans-bold",fontSize:20,color:"#21A445"}}>₹ 45</Text>
          
{/* NAVIGATION FOR TEST REGISTRATION PAGE  */}

        <TouchableOpacity onPress={()=>this.props.navigation.navigate("Testregistrationstatus")} style={style.Button}>
            <Text style={{color:"white",marginLeft:100,marginTop:-19,fontFamily:"sans-semi",fontSize:17}}>Register</Text>
      </TouchableOpacity>
    
    </View>

{/* VIEW FOR TEST TIMING  */}

    <View style={{marginLeft:20,marginTop:5,padding:10}}>
    <View>
        <Text style={{fontFamily:"sans-bold",fontSize:20}}>Timing</Text>
        <View style={{marginLeft:20}}>
        <Text style={{padding:2}}>06:00 PM to 07:30 PM (IST) </Text>
        </View>
    </View>

{/* TEST DETAIL INFO  */}

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

{/* COVERED TOPICS  */}

    <View style={{backgroundColor:"gainsboro",width:310,borderRadius:10,height:130,marginLeft:"auto",marginRight:"auto"}}>
        <View style={{margin:20}}>
        <Text style={{fontFamily:"sans-bold",fontSize:18}}>Topics to be covered</Text>
        <View style={{marginLeft:20}}>
            <Text style={{fontSize:17,fontFamily:"regular",paddingTop:5}}>• Introduction to Electrostatics</Text>
            <Text style={{fontSize:17,fontFamily:"regular",paddingTop:5}}>• Gauss Law</Text>
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