import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { Text,View,TouchableOpacity,Image } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ExamCard } from './innercomponents'
import { StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'
import * as Font from 'expo-font'

export default class Exams extends Component {
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
      'sans-bold':require('../assets/fonts/SourceSansPro-Bold.ttf'),
      'poppins-semi':require('../assets/fonts/Poppins-SemiBold.ttf'),
      'poppins-regular':require('../assets/fonts/Poppins-Regular.ttf')
    });
    this.setState({ fontsLoaded: true });}
  render() {
    return (
    <SafeAreaProvider style={{marginTop:40,backgroundColor:"white"}}>

{/* PROFILE PAGE  */}

     <View style={{flexDirection:"row",padding:25,height:100}}>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Homepage")}}>
        <Image style={{width:30,height:30,marginTop:10,marginRight:10}} source={{uri:"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679594419/left-arrow_jlddlp.png"}}/>
        </TouchableOpacity>
        <View style={{marginRight:"auto"}}>
        <Text style={{fontSize:17,fontFamily:"regular"}}> Class 12</Text>
        <Text style={{fontFamily:"sans-bold",fontSize:22,paddingTop:1}}> Courses</Text>
        </View>
        <View >
        <Image style={{width:55,height:55}} source={{uri:"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679584907/profile_zyskkn.png"}}/>
        </View>
        </View>

{/* VIEW FOR EXAM CARD COMPONENTS  */}

<ScrollView>
    <View>
    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Upcomingexams")}}>
    <ExamCard title={"Upcoming Tests"} url={"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679677724/upcoming_tt6yyf.png"}/> 
    </TouchableOpacity>
    <ExamCard title={"Registered Exams" }url={"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679596067/registered_ktopmd.png"} /> 
    <ExamCard title={"Completed Tests"} url={"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679677864/completed_kjtb6k.png"}/>
    </View>

{/* ATTENDED EXAMS COUNT COMPONENT  */}

    <View style={{width:310,height:300,backgroundColor:"#EAEAEA",marginLeft:"auto",marginRight:"auto",marginTop:20,borderRadius:15,alignItems:"center",justifyContent:"center"}}>
        <View style={{marginTop:5,alignItems:"center"}}>
        <Text style={{fontFamily:"poppins-semi",fontSize:20,paddingBottom:5}}>Recent Exam </Text>
        <Text style={{paddingBottom:5,fontFamily:"poppins-regular",fontSize:16}}>Your Score (in %)</Text>
        <Text style={{fontWeight:"bold"}}>No exams attended</Text>
        </View>
    </View>

{/* PERFORMANCE GRAPH COMPONENT  */}

    <View style={{width:310,height:500,backgroundColor:"#EAEAEA",marginLeft:"auto",marginRight:"auto",marginTop:20,borderRadius:15}}>
        <View style={{alignItems:"center",padding:20,marginTop:5,flexDirection:"column"}}>
            <Text style={{fontSize:22,padding:20,paddingBottom:40,fontFamily:"poppins-semi"}}>Performance Graph</Text>
            <View style={{width:300,height:200,marginLeft:"auto",marginRight:"auto"}}>
            <Image style={{ width:255,height:150}} source={{uri:"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679597907/performanceGraph_z51gjb.png"}}/>
            </View>
            <View style={{marginTop:-35,alignItems:"center"}}>
              <Text>Oops!, You need to attend atleast three tests to get your performance graph</Text>
              <View style={{alignItems:"center",justifyContent:"center",marginTop:30}}>
              <Text style={{fontSize:20,fontWeight:"bold"}}>Attempted Tests</Text>
              <Text style={{fontSize:20}}>0</Text>
            </View>
            </View>
        </View>

</View>
<View style={{width:300,height:30,backgroundColor:"white"}}>

</View>
</ScrollView>
   </SafeAreaProvider>

    )
  }
}
