import React, { Component } from 'react'
import { View,Text, TouchableOpacity, Button, Pressable } from 'react-native'
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'sans-semi': require('../assets/fonts/SourceSansPro-Italic.ttf'),
      'regular' : require('../assets/fonts/SourceSansPro-Regular.ttf')
    });
    this.setState({ fontsLoaded: true });
  }


  render() {
    return (
      <SafeAreaProvider style={{marginTop:20,backgroundColor:"white"}}>
      <View style={style.view}>

{/* HEADER */}

      <Text style={style.Text}>CARVE IT.</Text>
      
{/* CONTAINER 1 */}

      <View style={style.container1}>
        <Image style={{width:310,height:185,alignItems:"center",justifyContent:"center"}} source={{uri:"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679719363/accountCreationArt_frrqlg.png"}}/>
      </View>

{/* CONTAINER 2 */}

      <View style={style.container2}>

{/* INPUTS */}

      <View style={{flexDirection:"column",marginLeft:20,marginTop:30}}>
        <Text style={{color:"black",paddingBottom:30,fontSize:25,fontFamily:"sans-semi"}}>Login</Text>
          <View style={{marginLeft:17}}>

            {/* EMAIL ID */}

            <View style={{width:250,flexDirection:"row",paddingBottom:30}}>
            <Image style={{width:25,height:25,marginRight:10}} source={{uri:"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679719594/Group_1000002601_jl9lrm.png"}}/>
            <TextInput style={[style.input]} placeholder="Email Id"></TextInput>
            </View>



          {/* PASSWORD */}

            <View style={{width:250,flexDirection:"row",paddingBottom:12}}>
            <Image style={{width:25,height:25,marginRight:10}} source={{uri:"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679719779/Group_1000002599_lg3z6x.png"}}/> 
            <TextInput style={style.input}  placeholder="Password" secureTextEntry={true}></TextInput>
            <TouchableOpacity>
            <Image style={{width:20,height:20,marginLeft:-27}} source={{uri:"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679721714/Group_1000002597_xcmtws.png"}}/>
            </TouchableOpacity>
            </View>

{/* NAVIGATION FOR FORGOT PASSWORD */}

            <TouchableOpacity onPress={() => this.props.navigation.navigate("ForgotPassword")}>
            <Text style={{marginLeft:180,paddingTop:6,fontFamily:"sans-semi",paddingBottom:25}}>Forgot Password?</Text>
            </TouchableOpacity>
            </View>
       
      </View>

{/* NAVIGATION FOR HOME PAGE  */}

     <TouchableOpacity onPress={()=>this.props.navigation.navigate("Homepage")} style={style.Button}>
          <Text style={{color:"white",marginLeft:130,marginTop:-19,fontFamily:"sans-semi",fontSize:17}}>Login</Text>
      </TouchableOpacity>

    <Image style={{width:308,height:24,marginLeft:"auto",marginRight:"auto",marginTop:15,marginBottom:12}} source={{uri:"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679720483/Group_1000002607_byactx.png"}}/>
    
          
{/* SIGN IN WITH GOOGLE */}

      <TouchableOpacity >
      <View style={{marginLeft:"auto",marginRight:"auto",width:300,height:44,marginTop:10}}>
      <Image style={{width:"auto",height:44}} source={{uri:"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679719232/Group_1000002606_eeefzj.png"}}/>
      </View>
      </TouchableOpacity> 
     
{/* NAVIGATION FOR REGISTRATION PAGE */}

    <View style={{alignItems:"center",flexDirection:"row",justifyContent:"center",marginTop:25}}>
    <Text style={{color:"#939393",fontFamily:"regular",fontSize:15}}>New to Carve it.? </Text>
    <TouchableOpacity onPress={() => this.props.navigation.navigate("Register")}><Text style={{fontFamily:"regular",fontSize:16}}>Register</Text></TouchableOpacity>
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
    marginTop:0,
    fontFamily:"sans-semi"
  },
  Texts:{
    color:"white"
  },
  container1:{
    width:310,
    height:185,
    alignItems:"center",
    marginTop:13
  },
  container2:{
    width:"100%",
    height:"58%",
    backgroundColor:"white",
    color:"white",
    
  },
  hello:{
    color:"white",
    fontSize:20,
    fontFamily:"monospace",
    paddingBottom:10,
    fontWeight:"bold"
  },
  input:{
    borderBottomWidth:1.3,
    borderBottomColor:"gainsboro",
    width:250,
    color:"black",
    marginTop:-8,
    paddingLeft:8
  },
  Button:{
    width:300,
    marginLeft:30,
    height:45,
    paddingTop:30,
    borderRadius:10,
    backgroundColor:"black"
  },
  Button1:{
    width:300,
    marginLeft:30,
    height:45,
    paddingTop:30,
    borderRadius:10,
    backgroundColor:"whitesmoke"
  }
})