import { styles } from './styles'; // Import the style
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView } from "react-native";
import {
    Text,
    View,
    Image,
    TextInput,
    Pressable,
  } from "react-native";

export default function Page()  {

    const [receiptname, setreceiptname] = useState(null);
    
    return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>

            <Text style={styles.attemptmessage}> Receipt Collected!</Text>

            <View style={styles.questionmarkcontainer}>
                <Image
                    source={require('./images/tick-3x.png')} // Replace with the path to your "X" image
                    style={styles.questiomarkimage}
                />
            </View>

            <View style={styles.textcontainer}>
                <Text style={styles.attemptmessage}> What would you like to call this receipt?</Text>
            </View>

            <TextInput
            placeholder="Receipt Name"
            style={styles.input}
            />

            <Link href="/" asChild>
                <Pressable  style={styles.tryagainbtn}> 
                    <Text style={styles.blacktext}>Save</Text>
                </Pressable> 
            </Link>

            
        </View>
        
    </SafeAreaView>
    )
}
