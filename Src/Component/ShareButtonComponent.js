import { Text, TouchableOpacity } from "react-native";
import Share from 'react-native-share';


const ShareButtonComponent = (qrCode, props) => {
  const shareQRCode = () => {
    const shareOptions = {
      title: 'QR Code',
      message: 'Veuillez trouver ci-joint le QR Code généré pour votre compte.',
      urls: [`data:image/svg+xml;base64,${qrCode}`],
      type: 'image/svg+xml',
    };
    Share.open(shareOptions);
  };
  return (
    <TouchableOpacity onPress={shareQRCode}>
      <Text>Partager</Text>
    </TouchableOpacity>
  )
}


export default ShareButtonComponent
