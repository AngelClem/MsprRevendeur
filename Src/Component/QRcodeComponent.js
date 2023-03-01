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

const QRcodeComponent = (props)=>{

  useEffect(()=>{

  },[])

  return (<View style={styles.qrCodeContainer}>
    <QRCode
      value={"please passe"}
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
