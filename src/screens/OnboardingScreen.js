import { View, Text, StyleSheet, Button, Image,Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';

const Skip = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}
  >
      <Text style={{fontSize:16}}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}
  >
      <Text style={{fontSize:16}}>Next</Text>
  </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}
  >
      <Text style={{fontSize:16}}>Done</Text>
  </TouchableOpacity>
);



const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding 
    SkipButtonComponent={Skip}
    NextButtonComponent={Next}
    DoneButtonComponent={Done}
    onSkip ={()=>{navigation.replace("Start")}}//replace skipe bastiktan sonra onbooardinge geri dnmeyi engelliyor
    onDone ={()=>{navigation.navigate("Start")}}

    pages={[
      {
        backgroundColor: '#fff',
        image: <Image style={styles.imgBill} source={require('../../assets/checklist-1896517.png')} />,
        title: 'Eksikleri Not Al',
        subtitle: 'Nelere ihtiyaç varsa notlar kısmına yaz.',
      },
      {
        backgroundColor: '#fff',
        image: <Image style={styles.img} source={require('../../assets/calculation.png')} />,
        title: 'Hesap Derdine Düşme',
        subtitle: 'Tutarları gir, kimin kime ne kadar borcu var otomatik hesaplansın.',
      },
      {
        backgroundColor: '#fff',
        image: <Image style={styles.imgBill} source={require('../../assets/bill.png')} />,
        title: 'Fatura Tutarlarını Gir',
        subtitle: 'Sadece market masrafları değil, eve ait fatura tutarlarını da girebilirsin.',
      },
      {
        backgroundColor: '#fff',
        image: <Image style={styles.img} source={require('../../assets/camera.png')} />,
        title: 'Fiş/Fatura Fotoğrafı Ekle',
        subtitle: 'Yapılan alışverişin detaylarını görmek için faturanın fotoğrafına bakabilirsin.',
      },
    ]}
  />
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    img:{
      width : Dimensions.get('window').width/1.7,
      height : Dimensions.get('window').height/3
    },
    imgBill:{
      width : Dimensions.get('window').width/1.7,
      height : Dimensions.get('window').height/3,
      marginLeft:10
    }
})