import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { View,Text,Image } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Courses } from './innercomponents'
import * as Font from 'expo-font'

export default class ExploreCourses extends Component {
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

{/* COURSES COMPONENTS */}

<ScrollView style={{marginLeft:"auto",marginRight:"auto",marginBottom:5}}>
           <Courses topic={"Electrostatics"} time={"1hour, 20mins"} img={"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679592959/electrostatics_uihjte.png"}/>
           <Courses topic={"Ray Optics"} time={"1hour, 20mins"} img={"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679676488/rayOptics_vwexat.png"}/>
           <Courses topic={"Current Electricity"} time={"1hour, 20mins"} img={"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679676628/current_rmqadl.png"}/>
           <Courses topic={"Magnetism and Magnetic Effects"} time={"2hour, 20mins"} img={"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679676772/magnetism_hktsqt.png"}/>
           <Courses topic={"Electro Magnetic Waves"} time={"1hour, 20mins"} img={"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679676917/electromagneticWaves_xtxwev.png"}/>
           <Courses topic={"Wave Optics"} time={"1hour, 20mins"} img={"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679677006/waveOptics_we0upu.png"}/>
           <Courses topic={"Dual Nature"} time={"1hour, 20mins"} img={"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679677219/dualNature_zbfywx.png"}/>
           <Courses topic={"Atomic and Nuclear"} time={"1hour, 20mins"} img={"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679677311/atomic_vlfnhi.png"}/>
           <Courses topic={"Electronics "} time={"1hour, 20mins"} img={"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679677380/electronics_wnhnl7.png"}/>
           <Courses topic={"Recent Developements"} time={"1hour, 20mins"} img={"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679677458/recentDevelopment_asn26r.png"}/>
           <Courses topic={"Current Electricity"} time={"1hour, 20mins"} img={"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679592959/electrostatics_uihjte.png"}/>
           
</ScrollView>
     </SafeAreaProvider>
    )
  }
}
