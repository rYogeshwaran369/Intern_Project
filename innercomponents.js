import React, { Component } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { View,Text,Image } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import * as Font from 'expo-font';
export default class Homecard extends React.Component{
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
      'regular' : require('../assets/fonts/SourceSansPro-Regular.ttf')
    });
    this.setState({ fontsLoaded: true });}
  render() {
    return (
        <View style={{paddingLeft:9,paddingBottom:9,paddingTop:9,paddingRight:5}}>
        <View style={{backgroundColor:"black",width:150,height:150,borderRadius:14,alignItems:"center",justifyContent:"center"}}>
            <View style={{paddingBottom:20}}>
        <Text style={{color:"white",padding:15,fontSize:18,fontFamily:"algreya"}}>{this.props.course}</Text>
       <Image style={{width:80,height:80,justifyContent:"center",marginLeft:"auto",marginRight:"auto"}} source={{uri:this.props.url}}/>
       </View>
        </View>
        </View>
    )
  }
}


export class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'regular':require('../assets/fonts/AlegreyaSans-Regular.ttf'),
        'algreya':require('../assets/fonts/AlegreyaSans-Bold.ttf'),
      'sans-semi': require('../assets/fonts/SourceSansPro-SemiBold.ttf'),
    });
    this.setState({ fontsLoaded: true });}

  render() {
    const { topic, time, img } = this.props;
    const truncatedTopic = topic.length > 26 ? `${topic.substring(0, 23)}...` : topic.padEnd(26, ' ');    
    

    return (
      <View
        style={{
          width: 345,
          height: 66,
          backgroundColor: '#EAEAEA',
          flexDirection: 'row',
          borderRadius: 10,
          marginTop: 15,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image style={{ height: 35, width: 35, marginLeft: 15,marginRight:14 }} source={{ uri: img }} />

        <View style={{ flexDirection: 'column', marginLeft: 'auto', marginRight: 'auto', alignItems: 'flex-start',width:200}}>
          <Text style={{ fontFamily:"algreya",fontSize:18}}>{truncatedTopic}</Text>

          <Text style={{fontFamily:"regular",fontSize:14}}>{time}</Text>
        </View>

        <Image
          style={{ height: 40, width: 40, marginLeft: 'auto', marginRight: 14 }}
          source={{ uri: 'https://res.cloudinary.com/dxhmtgtpg/image/upload/v1679593292/videoplayer_a2qtrj.png' }}
        />
      </View>
    );
  }
}





export class ExamCard extends Component {
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
  name=this.props.name
  render() {
    return (
   
     <View style={{width:310,borderRadius:10,marginTop:22, height:160,backgroundColor:"#EAEAEA",marginLeft:"auto",marginRight:"auto",alignItems:"center",justifyContent:"center"}}>
        <Image style={{width:60,height:60,marginTop:22}} source={{uri:this.props.url}}/>
        <Text style={{padding:20,fontFamily:"algreya",fontSize:22}}>{this.props.title}</Text>
     </View>
    
    )
  }
}


export class ExamDetail extends React.Component {
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
      <View style={{width:310,borderRadius:15,marginTop:22, height:160,backgroundColor:"#EAEAEA",marginLeft:"auto",marginRight:"auto",alignItems:"center",justifyContent:"center"}}>
      <View style={{marginLeft:"auto",marginRight:"auto",marginTop:-10}}>
      <Text style={{fontFamily:"sans-bold",fontSize:22,paddingBottom:10,paddingTop:10}}>{this.props.topic}</Text>
      <Text style={{fontFamily:"sans-semi",fontSize:17,paddingBottom:5}}>{this.props.syllabus}</Text>
      <Text style={{paddingBottom:4,fontFamily:"regular",fontSize:17}}>{this.props.date}</Text>
      <Text style={{fontFamily:"sans-semi",fontSize:17,color:"#21A445"}}>{this.props.price}</Text>

      <View style={{flexDirection:"row",alignItems:"center",marginLeft:"auto"}}>
      <Text style={{textDecorationLine:"underline",color:"#266FC5",fontFamily:"sans-semi",fontSize:17,paddingRight:5}}>Learn More</Text>
      <Icon name='arrowright' color={"#266FC5"} size={17}/>
      </View>
      </View>
   </View>
    )
  }
}


