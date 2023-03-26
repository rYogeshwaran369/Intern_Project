import React, { Component } from 'react'
import { Text,View,TouchableOpacity,Image,TextInput } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import { ExamDetail } from './innercomponents'
import * as Font from 'expo-font'

export default class Upcomingexams extends Component {
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

{/* HEADER PROFILE  */}

<View style={{flexDirection:"row",padding:25,height:100}}>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Exams")}}>
        <Image style={{width:30,height:30,marginTop:10,marginRight:10}} source={{uri:"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679594419/left-arrow_jlddlp.png"}}/>
        </TouchableOpacity>
        <View style={{marginRight:"auto"}}>
        <Text style={{fontSize:17,fontFamily:"regular"}}> Class 12</Text>
        <Text style={{fontFamily:"sans-bold",fontSize:22,paddingTop:1}}> Upcoming Exams</Text>
        </View>
        <View >
        <Image style={{width:55,height:55}} source={{uri:"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679584907/profile_zyskkn.png"}}/>
        </View>
        </View>

{/* SEARCH BAR  */}

        <View style={{paddingLeft:50,flexDirection:"row",backgroundColor:"#EAEAEA",width:300,height:45,borderRadius:8,justifyContent:"center",alignItems:"center",marginTop:25,marginLeft:"auto",marginRight:"auto"}}>
        <Image style={{width:24,height:24,marginLeft:10}} source={{uri:"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679725521/Group_1000002613_q3nfm8.png"}}/>
        <TextInput placeholder='     Search' style={{width:300,height:45,borderRadius:8,paddingLeft:10}}></TextInput>
         </View>

{/* EXAM Detail CARDS  */}

        <ScrollView style={{marginBottom:20}}>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Testdetail")}}>
        <ExamDetail topic={"Electronics Mock Test - 03"} syllabus={"State Board"} date={"01-04-2023 -6PM"} price={"₹ 45"}/>
        </TouchableOpacity>
        <ExamDetail topic={"Sample Free Mock Test - 01"} syllabus={"NEET"} date={"01-04-2023 -6PM"} price={"Free"}/>
        <ExamDetail topic={"Full Exam - JEE Mains - 01"} syllabus={"JEE - Mains"} date={"01-04-2023 -6PM"} price={"Free"}/>
        <ExamDetail topic={"Sample Free Mock Test - 01"} syllabus={"NEET"} date={"01-04-2023 -6PM"} price={"Free"}/>
        <ExamDetail topic={"Full Exam - JEE Mains - 01"} syllabus={"JEE - Mains"} date={"01-04-2023 -6PM"} price={"Free"}/>
        </ScrollView>
        </SafeAreaProvider>
    )
  }
}
