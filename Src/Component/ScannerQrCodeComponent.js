import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';

  const ScannerComponent = (props)=> {
   const onSuccess = (e) => {
    // Fonction à exécuter lorsque le QR code est scanné avec succès
    console.log('QR code scanné avec succès', e.data);

    // Exécuter une fonction en fonction du contenu du QR code
    executeFunction(e.data);
  };

  const executeFunction = (data) => {
    // Exécuter une fonction en fonction du contenu du QR code scanné
    // Par exemple, si le QR code contient une URL, vous pouvez ouvrir cette URL dans un navigateur
    // Ou si le QR code contient un code unique, vous pouvez effectuer une action en fonction de ce code
  };
    return (
      <QRCodeScanner onRead={onSuccess} />
    );
}

export default ScannerComponent
