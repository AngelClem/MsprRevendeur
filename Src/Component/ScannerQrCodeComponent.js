import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import EncryptedStorage from "react-native-encrypted-storage";
import { Alert } from "react-native";

  const ScannerComponent = (props)=> {
    console.log(props.route.params.token)
   const onSuccess = (e) => {
    // Fonction à exécuter lorsque le QR code est scanné avec succès
    console.log('QR code scanné avec succès', e.data);

    // Exécuter une fonction en fonction du contenu du QR code
    executeFunction(e.data);
  };

  const executeFunction = (data) => {
    if(data === props.route.params.token){
      EncryptedStorage.clear().then(()=>{
        let session = {"username":login,"token":token}
        EncryptedStorage.setItem("userSession", JSON.stringify(session)).then(()=>{

          props.navigation.replace('MainPage')
        })
      })

    } else {
      Alert.alert("Veuillez scanner un QRCode correct")
    }
  };
    return (
      <QRCodeScanner onRead={onSuccess} />

    );
}

export default ScannerComponent
