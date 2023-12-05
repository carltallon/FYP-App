import { Text, View} from "react-native";
import React, { useState, useEffect } from 'react';

export default function Loading() {
    const messages = ['Loading...', 'Here it comes...', 'Be patient...'];
    const [randomMessage, setRandomMessage] = useState('');
  
    useEffect(() => {
      // Generate a random index to select a message from the array
      const randomIndex = Math.floor(Math.random() * messages.length);
      setRandomMessage(messages[randomIndex]);
    }, []);
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{randomMessage}</Text>
      </View>
    );
  }
