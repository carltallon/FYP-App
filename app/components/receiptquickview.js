import { View,Image, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

import { useNavigation } from "expo-router";

const Receiptbox = ( { receiptname, receiptprice, receiptID, index } ) => {
  
    const navigation = useNavigation();
    const colors = ['#4156F5', '#FFABD7'];
    const chosenbackgroundColor = colors[index % colors.length];
    
    const viewreceipt = (receiptID) => {
      navigation.navigate("receiptdetails", { receiptID });
    };

    return (
      
      <Pressable onPress={() => viewreceipt(receiptID)} style={[receiptbox.receiptboxbtn, { backgroundColor: chosenbackgroundColor }]}>
          <Text style={receiptbox.receiptname}>{receiptname}</Text>

          <View style={receiptbox.bottomcontainer}>
            <Text style={receiptbox.receipttotal}>€{receiptprice}</Text>
            <Image
                source={require('../images/arrow-right3x.png')} 
                style={receiptbox.expandrightimg}
            />
          </View>
        </Pressable> 

    );
};

const receiptbox = StyleSheet.create({
  receiptboxbtn: {
    padding: 10,
    margin: 10,
    width:  250,
    height: 120,
    borderRadius: 10,
    textAlign: 'center',
    alignItems: 'center',
  },
  expandrightimg: {
    width: 22,
    height: 17,
  }, 
  receiptname: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
  receipttotal: {
    fontSize: 18,
    color: 'white',
    textAlign: 'left',
  },
  bottomcontainer: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    width: '80%',
  }
  
});

export default Receiptbox;
  

