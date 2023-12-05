import { styles } from '../styles';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, KeyboardAvoidingView } from "react-native";
import { Text, View, Image, TextInput, Pressable, StatusBar,} from "react-native";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import db from '../config';
import { collection, addDoc } from "firebase/firestore"; 

const Register = () =>  {
    const auth = getAuth();
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleRegister = async () => {
        setLoading(true);
        if (email.trim() === '') {
            setError('We need an email!!');
            return;
        } else if (password.trim() === '') {
            setError('We need a password!!');
            return;
        } else if (username.trim() === '') {
            setError('We need a username!!');
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log(email, password);
            if (user) {
                const usernameref = await addDoc(collection(db, 'Users'), {
                    ID: user.uid,
                    Username: username,
                });
                router.replace('/registerloader');
            }
        } catch (error) { 
            setLoading(false);
            if (error.code === 'auth/invalid-email') {
                setError('Email is in use!');
            } else {
                // Other error types can be handled here
                setError('Error Occured');
            }
        }
    };


    return (
        <SafeAreaView style={{ flex: 1}}>
            <StatusBar
                    barStyle="dark-content" 
                    backgroundColor="transparent" // Set the background color
                    translucent
            />
            <KeyboardAvoidingView style={styles.container}>
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
                    placeholder="Username"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
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


                <Pressable  style={styles.loginbtn} onPress={handleRegister}>
                    <Text style={styles.loginText}>Register</Text>
                </Pressable>


                <Link href="/login" asChild>
                    <Pressable  style={styles.otherbutton}>
                        <Text style={styles.otherText}>Login Instead</Text>
                    </Pressable>
                </Link>

            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Register;