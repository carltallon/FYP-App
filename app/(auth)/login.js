import { styles } from '../styles'; // Import the style
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    StatusBar,
    Pressable,
} from "react-native";
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";


const Login = () =>  {

    const auth = getAuth();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleLogin = async () => {
        setLoading(true);
        if (email.trim() === '') {
            setError('We need an email!!');
            return;
        } else if (password.trim() === '') {
            setError('We need a password!!');
            return;
        } 
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)   
            const user = userCredential.user;    
            router.replace('/loginloader');
            
        } catch(error) {
            setLoading(false);
            if (error.code === 'auth/invalid-email') {
                setError('We don\'t have an account under that email.');
            } else {
                // Other error types can be handled here
                setError('Your password is wrong.');
            }
        }
    };

    return (

        <View style={styles.container}>

            <StatusBar
                    barStyle="dark-content"
                    backgroundColor="transparent" 
                    translucent 
            />

            <View style={styles.iconcontainer}>
                    <Image
                        source={require('../images/icon.png')} 
                        style={styles.icon}
                    />
            </View>
            <Text style={styles.title}>eReceipt</Text>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
                placeholderTextColor="black" 
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
                style={styles.input}
                placeholderTextColor="black" 
            />

            {error && <Text style={styles.errorText}>Wait! {error}</Text>}

            <Pressable  style={styles.loginbtn} onPress={handleLogin}>
                <Text style={styles.loginText}>Login</Text>
            </Pressable>

            <Link href="/register" asChild>
                <Pressable  style={styles.otherbutton}>
                    <Text style={styles.otherText}>Register Instead</Text>
                </Pressable>
            </Link>
            

        </View>
    )
}

export default Login;
