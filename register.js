import React, { Component } from 'react'
import { View,Text, TouchableOpacity, Button, Pressable } from 'react-native'
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import  Icon  from 'react-native-vector-icons/FontAwesome';


export default class Register extends Component {
  render() {
    return (
        <SafeAreaProvider style={{marginTop:20,backgroundColor:"white"}}>
        <View style={style.view}>

{/* HEADER */}

        <Text style={style.Text}>CARVE IT</Text>

{/* HEADER IMAGE */}

      <View style={style.container1}>
        <Image style={{width:310,height:"100%",alignItems:"center",justifyContent:"center"}} source={{uri:"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679719363/accountCreationArt_frrqlg.png"}}/>
      </View>

{/* CONTAINER 2 FOR INPUTS */}

      <View style={style.container2}>
      <View style={{flexDirection:"column",marginLeft:20}}>
        <Text style={{color:"black",paddingBottom:30,fontWeight:"bold",fontSize:20,fontFamily:"monospace"}}>Sign Up</Text>

          <View style={{marginLeft:17}}>
            <View style={{width:250,flexDirection:"row",paddingBottom:30}}>
            <Image style={{width:25,height:25,marginRight:10}} source={{uri:"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679719594/Group_1000002601_jl9lrm.png"}}/>
            <TextInput style={style.input} placeholder="  Email Id"></TextInput>
            </View>

            <View style={{width:250,flexDirection:"row",paddingBottom:30}}>
            <Image style={{width:25,height:25,marginRight:10}} source={{uri:"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679719779/Group_1000002599_lg3z6x.png"}}/> 
            <TextInput style={style.input}  placeholder="  Password" secureTextEntry={true}></TextInput>
            <TouchableOpacity>
            <Image style={{width:20,height:20,marginLeft:-27}} source={{uri:"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679721714/Group_1000002597_xcmtws.png"}}/>
            </TouchableOpacity>
            </View>

            <View style={{width:250,flexDirection:"row"}}>
            <Image style={{width:25,height:25,marginRight:10}} source={{uri:"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679719779/Group_1000002599_lg3z6x.png"}}/> 
            <TextInput style={style.input}  placeholder="  Retype Password" secureTextEntry={true}></TextInput>
            <TouchableOpacity>
            <Image style={{width:20,height:20,marginLeft:-27}} source={{uri:"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679721714/Group_1000002597_xcmtws.png"}}/>
            </TouchableOpacity>
            </View>

            <Text style={{paddingTop:17,fontWeight:"bold",paddingBottom:30,marginLeft:10,fontSize:11.34,color:"grey"}}>By signing up, youre agree to our <Text style={{color:"black"}}>Terms & Conditions</Text> and <Text style={{color:"black"}}>Privacy Policy</Text></Text>
            </View>
      </View>

{/* SIGN UP BUTTON  */}

     <TouchableOpacity style={style.Button}>
            <Text style={{color:"white",marginLeft:110,marginTop:-19,fontWeight:"bold",fontSize:17}}>Sign Up</Text>
      </TouchableOpacity>

{/* NAVIGATION FOR LOGIN PAGE  */}

    <View style={{alignItems:"center",flexDirection:"row",justifyContent:"center",marginTop:20}}>
    <Text style={{color:"grey",fontWeight:"bold"}}>Already enjoying Carve it.? </Text>
    <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}><Text style={{fontWeight:"bold"}}>Login</Text></TouchableOpacity>
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
    fontWeight:"bold",
    fontSize:20
  },
  Texts:{
    color:"white"
  },
  container1:{
    width:310,
    height:185,
    alignItems:"center",
    marginTop:10,
    marginBottom:20
  },
  container2:{
    width:"100%",
    height:"58%",
    backgroundColor:"white",
    color:"white"
  },
  hello:{
    color:"white",
    fontSize:20,
    fontFamily:"monospace",
    paddingBottom:10,
    fontWeight:"bold"
  },
  input:{
    borderBottomWidth:1.7,
    borderBottomColor:"gainsboro",
    width:257,
    color:"grey",
    marginTop:-8
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