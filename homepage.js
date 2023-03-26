import React, { Component } from 'react'
import { View } from 'react-native'
import { Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import { TextInput } from 'react-native'
import  Icon  from 'react-native-vector-icons/FontAwesome';
import Homecard from './innercomponents'
import { ScrollView } from 'react-native'
import { Courses } from './innercomponents'
import { TouchableOpacity } from 'react-native'
import * as Font from 'expo-font'



export default class Homepage extends Component {
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
     
    <View style={{flexDirection:"column"}}>

{/* HEADER  PROFILE */}

        <View style={{flexDirection:"row",padding:25,height:100}}>
        <View style={{marginRight:"auto"}}>   
        <Text style={{fontSize:17,fontFamily:"regular"}}> Hello 👋🏻</Text>
        <Text style={{fontFamily:"sans-bold",fontSize:22,paddingTop:5}}> GUEST</Text>
        </View>
        <View >
       <Image style={{width:55,height:55}} source={{uri:"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679584907/profile_zyskkn.png"}}/>
        </View>
        </View>

{/* SEARCH BAR  */}

    <View style={{paddingLeft:50,flexDirection:"row",backgroundColor:"#EAEAEA",width:"85%",height:"8%",borderRadius:8,justifyContent:"center",alignItems:"center",marginLeft:"auto",marginRight:"auto"}}>
        <Image style={{width:24,height:24,marginLeft:10}} source={{uri:"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679725521/Group_1000002613_q3nfm8.png"}}/>
        <TextInput placeholder='     Search' style={{width:300,height:45,borderRadius:8,paddingLeft:10}}></TextInput>
    </View>

{/* NAVIGATION PAGES  */}

    <View style={{flexDirection:"column",marginLeft:"auto",marginRight:"auto",marginTop:"5%"}}>

        <View style={{flexDirection:"row"}}>
            {/* NAVIGATION FOR EXPLORE COURSES  */}
        <TouchableOpacity  onPress={()=>{this.props.navigation.navigate("ExploreCourses")}}>
        <Homecard course={"Explore Courses"} url={"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679590314/explore_hnbr3o.png"}/>
        </TouchableOpacity>

            {/* NAVIGATION FOR EXAMS PAGE  */}
        <TouchableOpacity  onPress={()=>{this.props.navigation.navigate("Exams")}}>
        <Homecard course={"Attend Exams"} url={"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679591657/attendExams_swaech.png"}/>
        </TouchableOpacity>

        </View>

        <View style={{flexDirection:"row"}}>

      
        <Homecard course={"  Community"} url={"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679591471/community_d1goeb.png"}/>
      

        
        <Homecard course={"Live Classes"} url={"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679591735/liveClasses_mjcazh.png"}/>
       
        </View>
        
         </View>

{/* LAST SEEN COURSES  */}

        <View style={{marginLeft:30,marginTop:10}}>
        <Text style={{fontFamily:"algreya",fontSize:20}}>Last Seen Courses</Text>
        </View>
         </View>
            <ScrollView style={{marginLeft:"auto",marginBottom:10,marginRight:"auto"}}>
           <Courses topic={"Electrostatics"} time={"1hour, 20mins"} img={"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679592959/electrostatics_uihjte.png"}/>
           <Courses topic={"Ray Optics "} time={"2hour, 20mins"} img={"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679676488/rayOptics_vwexat.png"}/>
           <Courses topic={"Current Electricity"} time={"1hour, 20mins"} img={"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679676628/current_rmqadl.png"}/>
           <Courses topic={"Magetism and magnetic"} time={"1hour, 20mins"} img={"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679676772/magnetism_hktsqt.png"}/>
        </ScrollView>
     </SafeAreaProvider>
    )
  }
}
