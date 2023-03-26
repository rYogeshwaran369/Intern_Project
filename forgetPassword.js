import React, { Component } from 'react'
import { View,Text, TouchableOpacity,TextInput } from 'react-native'
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import * as Font from 'expo-font'


export default class ForgotPassword extends Component {
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
        <SafeAreaProvider style={{backgroundColor:"white"}}>
   
{/* HEADER IMAGE  */}

      <View style={[style.container1,{justifyContent:"center",alignItems:"center",marginLeft:5}]}>
        <Image style={{width:310,height:189,justifyContent:"center",alignItems:"center",marginLeft:"auto",marginRight:"auto"}} source={{uri:"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679726731/undraw_settings_tab_mgiw_1_dvianl.png"}}/>
      </View>

      <View style={[style.container2,{marginTop:-30}]}>
        <View style={{marginLeft:20,paddingBottom:10,paddingTop:20}}>
            <Text style={{fontFamily:"sans-bold",fontSize:25}}> Forgot {"\n"} Password ?</Text>
        </View>
        <Text style={{marginLeft:20,color:"#939393",fontFamily:"sans-semi",fontSize:16}}>
        Dont worry! It happens. Please enter the address associated with your account.
        </Text>

{/* INPUT FIELD */}

        <View style={{width:250,flexDirection:"row",paddingBottom:25,alignContent:"center",alignItems:"center",paddingLeft:40,paddingTop:50}}>
        <Image style={{width:25,height:25,marginRight:10}} source={{uri:"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679719594/Group_1000002601_jl9lrm.png"}}/>
            <TextInput style={style.input} placeholder="Email Id"></TextInput>
            </View>

{/* NAVIGATION FOR EMAIL SEND PAGE  */}

            <TouchableOpacity style={style.Button} onPress={() => this.props.navigation.navigate("EmailSend")}>
            <Text style={{color:"white",marginLeft:110,marginTop:-19,fontFamily:"sans-semi",fontSize:17}}>Get Link</Text>
      </TouchableOpacity>

      </View>
  
    </SafeAreaProvider>
    )
  }
}
const style=StyleSheet.create({
  view:{
    justifyContent:"center",
    alignItems:"center",
    marginTop:13
  },
  Text:{
    fontWeight:"bold",
    fontSize:20
  },
  Texts:{
    color:"white"
  },
  container1:{
    width:"100%",
    height:"40%",marginLeft:"auto",
    marginRight:"auto",
  },
  container2:{
    width:"100%",
    height:"70%",
    backgroundColor:"white",
    color:"white",
   alignContent:"flex-start"
  },
  hello:{
    color:"white",
    fontSize:20,
    fontFamily:"monospace",
    paddingBottom:10,
    fontWeight:"bold"
  },
  input:{
    borderBottomWidth:2,
    borderBottomColor:"gainsboro",
    width:250,
    color:"grey",
    marginTop:-8
  },
  Button:{
    width:300,
    marginLeft:30,
    height:45,
    paddingTop:30,
    marginTop:30,
    borderRadius:10,
    backgroundColor:"black"
  },
})