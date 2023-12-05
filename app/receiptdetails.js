import React, { useEffect, useState } from 'react';
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { styles } from './styles'; 
import { Link } from 'expo-router';
import db from './config';
import Loading from './components/loading';
import { collection, query, where, getDocs } from "firebase/firestore";
import {
    Image,
    Pressable} from "react-native";

import axios from 'axios';

const ReceiptDetails = () => {
    const route = useRoute();
    const receiptID = route.params?.receiptID;
    const [receiptname, setreceiptname] = React.useState(null);
    const [receiptAmount, setreceiptAmount] = React.useState(null);
    const [receiptLocation, setreceiptLocation] = React.useState(null);
    const [receiptDate, setreceiptDate] = React.useState(null);
    const [barcodeImage, setBarcodeImage] = useState(null);

    const getreceipt = async (receiptID) => {
        const receipt =[];
        const receiptquery = query(collection(db, "Receipts"), where("ReceiptID", "==", receiptID));
        const querySnapshot = await getDocs(receiptquery);
        querySnapshot.forEach((doc) => {
            receipt.push(doc.data());
        });  
        setreceiptname(receipt[0].Name);
        setreceiptAmount(receipt[0].Amount);
        setreceiptLocation(receipt[0].Location);
        setreceiptDate(convertFirestoreTimestampToDate(receipt[0].Date));
    };
    
    // Function to convert timestamp to a JavaScript Date objects
    const convertFirestoreTimestampToDate = (timestamp) => {
        const date = new Date(timestamp.seconds * 1000); // Convert seconds to milliseconds
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are 0-indexed
        const day = String(date.getDate()).padStart(2, '0');
        return `${day}/${month}/${year}`;
    };

    useEffect(() => {
        // Call getreceipts when the component mounts
        getreceipt(receiptID);

        // Function to fetch the barcode image 
        // Activate venv source myenv/bin/activate
        // Check IP address
        const fetchBarcodeImage = async (receiptID) => {
            try {
            const response = await axios.get(`http://192.168.68.109:5000/receipts/${receiptID}`, {
                responseType: 'blob', // Set the response type to 'blob' for images
            });
    
            // Create a URL for the blob response
            const imageUrl = URL.createObjectURL(response.data);
            setBarcodeImage(imageUrl);
            } catch (error) {
            console.error('Error fetching barcode image:', error);
            }
        };
    
        fetchBarcodeImage(receiptID);
    }, []); 


    return (
        <>
            {receiptname ? 
            
            <View style={styles.container}>
                <Link href="/" asChild>
                <Pressable style={styles.closebtn}>
                    <Image
                        source={require('./images/Close_square3x.png')} 
                        style={styles.buttonImage}
                    />
                </Pressable>
                </Link>

                <Text style={styles.receiptnametext}>{receiptname}</Text>

                <Text style={styles.receiptlocationtext} >{receiptLocation}</Text>

                <View style={styles.dateview}>
                    <Text style={styles.datetext}>{receiptDate}</Text>
                    </View>

                <View style={styles.amountview}>
                    <Text style={styles.amounttext} > €{receiptAmount}</Text>
                </View>
                
                <View style={styles.barcodecontainer}>
                    {barcodeImage && <Image source={{ uri: barcodeImage }} style={styles.barcode} />}
                </View>
            </View> 
            
            : <Loading />}
            
        </>
    );
};

export default ReceiptDetails;

