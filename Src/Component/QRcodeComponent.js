import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import ShareButtonComponent from "./ShareButtonComponent";
import jwt from "jsonwebtoken";
import { privateKey } from "../Config";
import Mailer from "react-native-mail";

const QRcodeComponent = (props)=>{
  const token = jwt.sign({ id: 1 }, "privateKey", { expiresIn: '10h' });

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

  return (<View style={styles.qrCodeContainer}>
    <QRCode
      value={token}
      size={200}
    />
    <ShareButtonComponent />
  </View>)
}
const styles = StyleSheet.create({
  qrCodeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  }});


export default QRcodeComponent
