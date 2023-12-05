import { styles } from './styles'; // Import the style
import { Link, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { SafeAreaView } from "react-native";
import Loading from './components/loading';
import { collection, query, where, getDocs } from "firebase/firestore";
import {
    Text,
    View,
    Image,
    Pressable,
    StatusBar
  } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import db from './config'; 


export default function Account()  {

    const auth = getAuth();
    const router = useRouter();
    const [username, setUsername] = React.useState(null);
    const [initializing, setInitializing] = React.useState(true);
    const [user, setUser] = React.useState(null);

    const handleLogOut = () => {
        auth.signOut();
        router.replace('/logoutloader');
    }

    // Handle user state changes
    const onAuthStateChangedHandler = (user) => {
        getusername(user.uid);
        setUser(user);

        if (initializing) {
        setInitializing(false);
        }
    };

    const usernames = [];
    const getusername = async (uid) => {
        const usernamequery = query(collection(db, "Users"), where("ID", "==", uid));
        const usernamesnapshot = await getDocs(usernamequery);
        usernamesnapshot.forEach((doc) => {
        usernames.push(doc.data());
        });
        setUsername(usernames[0].Username);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, onAuthStateChangedHandler);
    
        return unsubscribe;
      }, []);
    
      if (initializing) {
        return (
          <Loading />
        );
      }
    
    return (
        <>
        {user ? <SafeAreaView style={{ flex: 1 }}>

        <StatusBar
            barStyle="dark-content" 
            backgroundColor="transparent" 
            translucent 
        />

            <View style={styles.container}>

                <Link href="/" asChild>
                    <Pressable style={styles.closebtn}>
                        <Image
                            source={require('./images/Close_square3x.png')} 
                            style={styles.buttonImage}
                        />
                    </Pressable>
                </Link>

                <View style={styles.accountinfoview}>
                    { 
                        username ? 
                        <>
                            <Text style={styles.accountstatstextlrge}> {username}'s Stats</Text>

                            <View style={styles.accountstatscontainer}>
                                <View style={styles.leftView}>
                                    {/* Content for the left view */}
                                    <Text style={styles.accountstatsfigure}>12</Text>
                                    <Text style={styles.accountstatstext}>Receipts Collected</Text>
                                </View>
                                <View style={styles.gap}></View>
                                <View style={styles.rightView}>
                                    {/* Content for the right view */}
                                    <Text style={styles.accountstatsfigure}>5</Text>
                                    <Text style={styles.accountstatstext}>Receipts In Date</Text>
                                </View>
                            </View> 
                        </>
                    : 
                            <Loading />
                    }
                </View>

                <View style={styles.accountfooter}>
                    <Pressable  style={styles.logoutBtn} onPress={handleLogOut}> 
                        <Text style={styles.loginText}>Log Out</Text>
                    </Pressable> 

                    <Pressable style={styles.darkmodebtn}>
                            <Image
                                source={require('./images/Sun_fill3x.png')} 
                                style={styles.darkmodebtnimage}
                            />
                    </Pressable>
                </View>
            </View>
    </SafeAreaView> : <Loading />}
    </>
    )
}
