import { styles } from './styles'; // Import the style
import { Link } from 'expo-router'; 
import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView } from "react-native";
import Loading from './components/loading';
import { collection, query, where, getDocs } from "firebase/firestore";
import {
    Text,
    Image,
    StatusBar,
    Pressable
  } from "react-native";
import ReceiptList from './components/receiptlist';
import Greeting from './components/greeting';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import db from './config'; 

const Home = () =>  {
    const auth = getAuth();
    const [username, setUsername] = React.useState(null);
    const [initializing, setInitializing] = React.useState(true);
    const [user, setUser] = React.useState(null);
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
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>

            <StatusBar
                barStyle="dark-content" 
                backgroundColor="transparent" 
                translucent
            />

            <ScrollView contentContainerStyle={styles.scrollview} showsHorizontalScrollIndicator={false}>

                <Link href="/account" asChild>
                    <Pressable style={styles.userbtn}>
                        <Image
                            source={require('./images/User_fill3x.png')} 
                            style={styles.userimage}
                        />
                    </Pressable>
                </Link>

                { username ? <Greeting username={username}/> : <Loading />}

                <Link href="/nfcattempt" asChild>
                    <Pressable  style={styles.collectbtn}> 
                        <Text style={styles.collectreceipttext}>Collect A Receipt</Text>
                        <Image
                            source={require('./images/Expand_right_double3x.png')} 
                            style={styles.expandrightimg}
                        />
                    </Pressable> 
                </Link>
            
                <Text style = {styles.largetext}> Your Receipts </Text>

                <ReceiptList userID={user.uid}/>

            </ScrollView>
      </SafeAreaView>
    )
}

export default Home;
