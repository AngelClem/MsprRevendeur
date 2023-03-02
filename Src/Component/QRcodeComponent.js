import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text, TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import QRCode from 'react-native-qrcode-svg';
import ShareButtonComponent from "./ShareButtonComponent";
import jwt from "jsonwebtoken";
import { privateKey } from "../Config";
import Mailer from "react-native-mail";

const QRcodeComponent = (props)=>{
  const [token, setToken] = useState(jwt.sign({ id: 1, email:props.route.params.email }, privateKey, { expiresIn: '10h' }));
  const [refQr, setRefQR] = useState("")

  const goToScanner =() =>{
    props.navigation.navigate("ScannerQR", {token:token})
  }
  const goToMainPage =() =>{
    props.navigation.replace("MainPage")
  }
  const shareQRCode = () => {
   // const token = jwt.sign({ id: 1 }, privateKey, { expiresIn: '10h' });

    // Générer le QR code en utilisant la bibliothèque react-native-qrcode-svg
    const qrCode = (
      <QRCode
        value={token}
        size={200}
      />
    );

/*
    Mailer.mail({
      subject: 'QR code généré',
      //recipients: [login],
      body: 'qrCode',
      isHTML: true,
      attachment: {
        base64:qrCode.current.btoa(qrCode.toString()),
        type: 'png',
        name: 'qrcode.png',
      },
    }, (error, event) => {
      if (error) {
        console.log('Erreur lors de l\'envoi de l\'e-mail', error);
      } else {
        console.log('E-mail envoyé avec succès', event);
      }
    });

 */
  }

  useEffect(()=>{

  },[])
  const getDataUrl =  () =>{
    this.getRef()
  }

  return (<View style={styles.qrCodeContainer}>
    <QRCode
      value={token}
      size={200}
      getRef={(c)=>(setRefQR(this))}
    />
    <ShareButtonComponent qrCodeValue={token} />

    <TouchableOpacity style={{
      margin: 5,
      padding: 5,
      flexDirection: 'column',
      borderRadius: 15,
      borderWidth: 0.5,
      height: '10%',
      width: '80%',
      backgroundColor: '#22bb33',
    }}
                      onPress={goToScanner}>
      <Text style={{textAlign:"center",color:'white', fontSize:20}}>
        Scanner votre QR
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={{


        flexDirection: 'column',
        borderRadius: 15,
        borderWidth: 0.5,
        height: '8%',
        width: '80%',
        backgroundColor: '#f0ad4e',
      }}
      onPress={goToMainPage}>
      <Text style={{textAlign: 'center', fontSize: 15, paddingTop: 7, color:"white"}}>
        Continuer sur la page d'accueil (Demo Only)
      </Text>
    </TouchableOpacity>


  </View>)
}
const styles = StyleSheet.create({
  qrCodeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  }});


export default QRcodeComponent
