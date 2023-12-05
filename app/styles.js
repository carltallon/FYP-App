// styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    color: 'black',
  },
  input: {
    width: '60%',
    height: "5%",
    borderColor: 'gray',
    borderWidth: 1,
    opacity: 1,
    marginBottom: 10,
    marginTop: 10,
    paddingLeft: 10,
    borderRadius: 10,
  },
  loginbtn: {
    width:"50%",
    borderRadius:10,
    height:"5%",
    alignItems:"center",
    justifyContent:"center",
    marginTop:30,
    backgroundColor:"#4156F5",
  },
  loginText: {
    fontSize: 20,
    color: 'white',

  },
  closebtn: {
    position: 'absolute',
    top: 30, 
    left: 20, 
  },
  buttonImage: {
    width: 30, 
    height: 30, 
  },
  userbtn: {
    position: 'absolute',
    top: 30, 
    left: 20, 
  },
  userimage: {
    width: 30, 
    height: 30, 
  },
  logoutBtn: {
    width:120,
    borderRadius:10,
    height:45,

    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#F11919",
  },
  accountstatscontainer: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: 160,
    
  },
  accountstatstext: {
    fontSize: 12,
  },
  accountinfoview: {
    marginTop: 150,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  leftView: {
    flex: 1, 
    backgroundColor: 'lightgray', 
    width: 85,
    height: 80,
    padding: 10,
    borderRadius:10,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  gap: {
    width: 20, 
  },
  rightView: {
    flex: 1, 
    backgroundColor: 'lightgray', 
    width: 85,
    height: 80,
    padding: 10,
    borderRadius:10,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  accountstatsfigure: {
    fontSize: 28,
  },
  accountstatstextlrge: {
    fontSize: 28,
    marginBottom: 10.
  },
  errormessage: {
    fontSize: 24,
    marginBottom: 20,
    marginTop: 40,
  },
  tryagainbtn: {
    width:205,
    borderRadius:10,
    height:45,
    alignItems:"center",
    justifyContent:"center",
    marginTop: 240,
    backgroundColor:"#52F21A",
  },
  nfcimage: {
    width: 230,
    height: 230,
  },
  questiomarkimage: {
    width: 230,
    height: 230,
  },
  cancelbtn: {
    width:205,
    borderRadius:10,
    height:45,
    alignItems:"center",
    justifyContent:"center",
    marginTop: 20,
    backgroundColor:"#F11919",
  },
  cancelonlybtn: {
    width:205,
    borderRadius:10,
    height:45,
    alignItems:"center",
    justifyContent:"center",
    marginTop: 250,
    backgroundColor:"#F11919",
  },
  blacktext: {
    fontSize: 20,
    color: 'black',
  }, 
  attemptmessage: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 60,
  },
  textcontainer: {
    alignItems:"center",
    justifyContent:"center",
  },
  iconcontainer: {
    marginTop: '50%',
  },
  icon: {
    width:90,
    height:90,
  },
  iconloader: {
    width:120,
    height:120,
  },
  collectbtn: {
    width:'70%',
    borderRadius:10,
    height:'10%',
    backgroundColor:"lightgray",
    marginTop: '10%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  largetext: {
    marginTop: '10%',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  expandrightimg: {
    height: '20%',
    width: '10%',
  },
  collectreceipttext: {
    fontSize: 25,
  },
  greetingtext: {
    fontSize: 22,
    marginTop: 140,
    marginBottom: '20%',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  centeredView: {
    alignItems: 'center', // Horizontally center content
  },
  scrollview: {
    alignItems: 'center',
  },
  darkmodebtn:{
    width:50,
    borderRadius:10,
    height:50,
    backgroundColor:"lightgray",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  darkmodebtnimage: {
    height:40,
    width: 40
  },
  accountfooter: {
    border: 10,
    marginTop: '110%',
    width: '60%',
    borderColor: 'black',
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
  },
  receiptnametext: {
    fontSize: 42,
    marginTop: '40%',
    textAlign: 'center',
  },
  receiptlocationtext: {
    fontSize: 22,
    marginTop: '2.5%',
    textAlign: 'center',
  },
  dateview: {
    borderRadius: 10,
    backgroundColor: '#4156F5',
    height: '8%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15%',
    width: '50%',
  },
  amountview: {
    borderRadius: 10,
    backgroundColor: '#DCDCDC',
    height: '8%',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '8%',
  },
  datetext: {
    color: '#FFFFFF',
    fontSize: 20,
  }, 
  amounttext: {
    color: '#000000',
    fontSize: 24,
  },
  receiptbarcodeimg: {
    height: '50%',
    width: '100%',
  }
  ,barcodecontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30%',
  },
  listcontainer: {
    marginTop: '5%',
  },
  otherbutton: {
    width:"50%",
    borderRadius:10,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    backgroundColor:"#DADADA",
  },
  otherText: {
    fontSize: 20,
    color: 'black',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
  barcode: {
    height: 160,
    width: 60
  }
});