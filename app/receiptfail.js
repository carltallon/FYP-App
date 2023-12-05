import { styles } from './styles'; // Import the style
import { Link } from 'expo-router';
import React from 'react';
import { SafeAreaView, ScrollView } from "react-native";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
  } from "react-native";

export default function Page()  {


    return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>

            <Text style={styles.errormessage}> No Receipt Found.</Text>

            <View style={styles.questionmarkcontainer}>
                <Image
                    source={require('./images/Question_fill-3x.png')} // Replace with the path to your "X" image
                    style={styles.questiomarkimage}
                />
            </View>
            <Link href="/nfcattempt" asChild>
                <Pressable  style={styles.tryagainbtn}> 
                    <Text style={styles.blacktext}>Try Again</Text>
                </Pressable> 
            </Link>

            <Link href="/" asChild>
                    <Pressable  style={styles.cancelbtn}> 
                        <Text style={styles.blacktext}>Cancel</Text>
                    </Pressable> 
            </Link>
            
        </View>
        
    </SafeAreaView>
    )
}
