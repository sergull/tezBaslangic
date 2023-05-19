import { View, Text, Dimensions,TouchableOpacity } from "react-native";
import React from "react";
import styles from "./Card.Style";
import { Entypo } from '@expo/vector-icons'; 


const Card = ({name, price, date}) => {
  return (
    // <View style={{backgroundColor:"#fff8dc"}}>
    //   <View style={styles.inner_container}>
    //     <View style={styles.bill}>
    //       <View style={{backgroundColor:"#ffb74d", borderRadius:50, justifyContent:"center", width:Dimensions.get("window").width/4.2}}>
    //       <Text style={styles.money}>0 TL</Text>
    //       </View>
    //       <View style={styles.info}>
    //         <Text style={styles.date}>18.12.2022</Text>
    //         <Text style={styles.admin}>Sergül Sopcalı</Text>
    //       </View>
    //     </View>
    //   </View>
    // </View>
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>{price} TL</Text>
        </View>
        <View style={styles.inner_container}>
          <View style={styles.info_container}>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.dateText}>{date}</Text>
          </View>
        </View>
        <View>
          <Entypo name="chevron-right" size={30} color="#68B984" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
