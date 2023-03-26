import React, { Component } from 'react'
import { View,Text, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';


export default class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'sans-semi': require('../assets/fonts/SourceSansPro-SemiBold.ttf'),
      'regular' : require('../assets/fonts/SourceSansPro-Regular.ttf')
    });
    this.setState({ fontsLoaded: true });}

  render() {
    const { fontsLoaded } = this.state;

    return (
    <SafeAreaProvider style={{marginTop:20,backgroundColor:"white"}}>

    <View style={style.view}>

{/* HEADER */}

      <Text style={style.Text}>CARVE IT.</Text>

{/* CONTAINER 1 */}

      <View style={style.container1}>
        <Image style={{width:"100%",height:"100%"}} source={{uri:"https://img.freepik.com/free-vector/online-school-platform-abstract-concept-vector-illustration-homeschooling-covid2019-qarantine-online-education-platform-digital-classes-virtual-courses-lms-school-abstract-metaphor_335657-5850.jpg?w=826&t=st=1679416888~exp=1679417488~hmac=1b1c8df230c8e0b2774a64015128290cca7743f6ea92f4aceb1458a6a7bf36d6"}}/>
      </View>

{/* CONTAINER 2 */}

      <View style={style.container2}>
        <View style={{justifyContent:"center",alignItems:"center",}}>
      <Text style={[style.hello,{fontFamily:"sans-semi"}]}>   Learning  {"\n"}Everywhere</Text>
      <Text style={{color:"grey",fontSize:16,fontFamily:"regular"}}>Learn with Pleasure with us, {"\n"}    whereever you are!</Text>

{/* NAVIGATION FOR LOGIN PAGE */}

      <TouchableOpacity  onPress={() => this.props.navigation.navigate("Login")}>
        <Text style={{color:"black",fontFamily:"sans-semi",fontSize:18,backgroundColor:"#D9D9D9",marginTop:50,paddingBottom:7,paddingTop:7,paddingLeft:40,paddingRight:40,borderRadius:20}}>Start</Text>
      </TouchableOpacity>

      
      </View>
      </View>
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
    padding:20,
    fontSize:23,
    marginTop:20,
    fontFamily:"sans-semi"
  },
  Texts:{
    color:"white"
  },
  container1:{
    width:"100%",
    height:"43%"
  },
  container2:{
    width:"100%",
    height:"50%",
    backgroundColor:"black",
    color:"white",
    alignContent:"center",
    justifyContent:"center"
  },
  hello:{
    color:"white",
    fontSize:20,
    paddingBottom:10,
    fontWeight:"bold"
  }
})