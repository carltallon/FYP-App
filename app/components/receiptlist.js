import React, { useEffect } from 'react';
import { styles } from '../styles';
import {ScrollView } from 'react-native';
import Receiptbox from './receiptquickview';
import db from '..//config';
import { collection, query, where, getDocs } from "firebase/firestore";
import Loading from './loading';
import SearchBar from './searchbar'; 


const ReceiptList = props => {
  const [receiptstate, setreceiptsstate] = React.useState(null);
  const [filteredReceipts, setFilteredReceipts] = React.useState(null);

  const fillreceipts = async (uid) => {
    const receipts =[];
    const receiptsquery = query(collection(db, "Receipts"), where("UserID", "==", uid));
    const querySnapshot = await getDocs(receiptsquery);
    querySnapshot.forEach((doc) => {
      receipts.push(doc.data());
    });  
    setreceiptsstate(receipts);
    setFilteredReceipts(receipts);
  };

  useEffect(() => {
    // Call fillreceipts when the component mounts
    fillreceipts(props.userID);
  }, []); 

  const handleSearch = (searchText) => {
    const filtered = receiptstate.filter((receipt) => {
      return receipt.Name.toLowerCase().includes(searchText.toLowerCase());
    });

    setFilteredReceipts(filtered);
  };

 

  return (<>

    <SearchBar onSearch={handleSearch} />

    <ScrollView style={styles.listcontainer}>
      
      {receiptstate ? <>
      {filteredReceipts.map((receipt, index) => (
          <Receiptbox
            key={index}
            index={index}
            receiptID={receipt.ReceiptID}
            receiptname={receipt.Name}
            receiptprice={receipt.Amount}  
          />
      ))}</> 
      
      : <Loading />}

    </ScrollView>

    </>
  );
};

export default ReceiptList;
