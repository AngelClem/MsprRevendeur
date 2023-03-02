import { Text, TouchableOpacity } from "react-native";
import Share from 'react-native-share';


const ShareButtonComponent = (qrCodeValue) => {
  console.log(qrCodeValue.qrCodeValue)
  const shareQRCode = () => {
    const shareOptions = {
      title: 'QR Code',
      message: 'Veuillez trouver ci-joint le QR Code généré pour votre compte.',
      urls: [`data:image/svg+xml;base64,${qrCodeValue.qrCodeValue}`],
      type: 'image/svg+xml',
    };
    Share.open(shareOptions);
  };
  return (
    <TouchableOpacity
      style={{padding:10, margin : 5, fontSize : 15, fontWeight:"bold", borderRadius:15, borderWidth:0.5, width:'80%' ,backgroundColor:"#5bc0de"}}
      onPress={shareQRCode}>
      <Text style={{textAlign:'center', fontSize:25 ,color:'white'}}>Partager</Text>
    </TouchableOpacity>
  )
}


export default ShareButtonComponent
