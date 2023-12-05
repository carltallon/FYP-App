import { styles } from './styles'; // Import the style
import { Link } from 'expo-router';
import React from 'react';
import { SafeAreaView, ScrollView } from "react-native";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    Pressable,
  } from "react-native";

export default function Page()  {
    return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>

            <Text style={styles.attemptmessage}> Waiting for NFC connection.</Text>

            <View style={styles.questionmarkcontainer}>
                <Image
                    source={require('./images/NFC-3x.png')} // Replace with the path to your "X" image
                    style={styles.nfcimage}
                />
            </View>

            <Link href="/collection">Continue FLow</Link>
            <Link href="/receiptfail">Continue error FLow</Link>

            <Link href="/" asChild>
                    <Pressable  style={styles.cancelonlybtn}> 
                        <Text style={styles.blacktext}>Cancel</Text>
                    </Pressable> 
            </Link>
            
        </View>
        
    </SafeAreaView>
    )
}
