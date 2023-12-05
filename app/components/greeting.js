import { Text, View} from "react-native";
import React, { useState, useEffect } from 'react';
import { styles } from '..//styles'; 

const Greeting = props => {
    const messages = ['Hey', 'Whats up' , 'Welcome back,'];
    const [randomMessage, setRandomMessage] = useState('');
  
    useEffect(() => {
      // Generate a random index to select a message from the array
      const randomIndex = Math.floor(Math.random() * messages.length);
      setRandomMessage(messages[randomIndex]);
    }, []);
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style = {styles.greetingtext}>{randomMessage} {props.username}!</Text>
      </View>
    );
}



export default Greeting;