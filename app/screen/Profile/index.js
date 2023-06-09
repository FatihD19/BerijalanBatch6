import { View, ImageBackground, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { HEIGHT, Shadow, WIDTH, horizontalScale, verticalScale } from '../../assets/style';

import  Text  from '../../component/Text';
import images from '../../assets/images';
const Profile = () => {
  return (
    <View>
     <ImageBackground 
     source={images.BG_PROFILE}
     resizeMode="cover"
     style={{
        width:WIDTH,
        height:495,
        alignItems:"center"
     }}
     >
     <TouchableOpacity
     style={{borderWidth:2,
            marginTop:80, borderRadius:90,borderColor:"#FBD2A5"}}
     >

    <Image
        source={images.IMG_PERSON2}
        style={{
            width: 120,height:120,
        }}
    />
     </TouchableOpacity>
    <View style={{marginTop:16,alignItems:"center"}}>
    <Text bold fontSize={20} >Fatih Darmawan</Text>
     <Text bold fontSize={18} color="#909090">React Native Developer</Text>
    </View>
     </ImageBackground>

<View style={{marginHorizontal:16,marginTop:-190}}>

     <View style={[{
     padding:16, borderRadius:12,backgroundColor:"#FFFF"},Shadow]}>
    <View>
 
        <DataProfil kolom="ID" isi="A20134"/>
        <DataProfil kolom="Email" isi="mklxkooo@gmlai.com"/>
        <DataProfil kolom="Date Of Birth" isi="2 Desember 1999"/>
          <View style={{flexDirection:"row"}}>
            <Text bold style={{flex:1}}>Gender</Text>
            <Text bold color='#A7A7A7' style={{flex:1,textAlign:"right"}}>Male</Text>
        </View>
        </View>

    </View>

    <View style={[{
     padding:16, borderRadius:12,backgroundColor:"#FFFF",marginTop:20},Shadow]}>
    <View>
 
          <View style={{flexDirection:"row"}}>
          <View style={{flexDirection:"column"}}>

            <Text bold style={{flex:1}}>Team</Text>
            <Text bold color='#A7A7A7' style={{flex:1}}>React Native</Text>
          </View>
             <Image
                source={images.IMG_TEAM}
                style={{
                    marginLeft:150,
                    flex:1,
                    resizeMode:"contain",
                    width: 96 ,height:35,
                }}
            />
        </View>
        </View>
    </View>

     <View style={[{
     padding:16, borderRadius:12,backgroundColor:"#FFFF",marginTop:20},Shadow]}>
    <View>
 
          <View style={{flexDirection:"row"}}>
             <Image
                source={images.PRIVACY}
                style={{
                    
                    resizeMode:"contain",
                    width: 96 ,height:35,
                }}
            />
             <Text bold style={{flex:1}}>Privacy and Security</Text>
        </View>
        </View>
    </View>

     
     
</View>

    </View>
  )
}

const DataProfil = (props) => {
   return (
     <View>
        <View style={{flexDirection:"row"}}>
            <Text bold style={{flex:1}}>{props.kolom}</Text>
            <Text bold color='#A7A7A7' style={{flex:1,textAlign:"right"}}>{props.isi}</Text>
        </View>
        <View style={{borderTopWidth:1,borderColor:"#D3D3D3",marginVertical:13}}/>
        </View>

   )
}
const AppInfo = (props) => {
   return (
     <View>
        <View style={{flexDirection:"row"}}>
        <Image
                source={images.PRIVACY}
                style={{
                    marginLeft:150,
                    flex:1,
                    resizeMode:"contain",
                    width: 96 ,height:35,
                }}
            />
            <Text bold style={{flex:1}}>{props.kolom}</Text>
            <Image
                source={images.ARROW}
                style={{
                    marginLeft:150,
                    flex:1,
                    resizeMode:"contain",
                    width: 96 ,height:35,
                }}
            />
        </View>
        <View style={{borderTopWidth:1,borderColor:"#D3D3D3",marginVertical:13}}/>
        </View>

   )
}

export default Profile;

