/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

import {
  Alert,
  Button,
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextInput} from '@react-native-material/core';
import EncryptedStorage from 'react-native-encrypted-storage';
import {useNavigation} from '@react-navigation/native';
import Mailer from 'react-native-mail';
import QRCode from "react-native-qrcode-svg";
import jwt from 'jsonwebtoken';
import { privateKey } from "../Config";

const ConnexionForm = props => {
  const [login, SetLogin] = useState(null);
  const [passwd, SetPasswd] = useState(null);


  const sendEmailWithQRCode = () => {

    const token = jwt.sign({ id: 1 }, privateKey, { expiresIn: '10h' });
    // Générer le QR code en utilisant la bibliothèque react-native-qrcode-svg
    const qrCode = (
      <QRCode
        value={token}
        size={200}
      />
    );


    Mailer.mail({
      subject: 'QR code généré',
      recipients: [login],
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
  };

    // Envoyer un e-mail avec le QR code en tant que pièce joint
  const createQR = () => {
      console.log("Putain")
  }

  const goTo = () => {
    props.navigation.replace('Profil');
  };
  useEffect(() => {

  }, [props]);

  return (
    <ScrollView style={{minHeight: '100%'}}>
      <View>
        <ImageBackground
          source={{
            uri: 'https://www.commissionoceanindien.org/wp-content/uploads/2022/02/formation.jpg',
          }}
          style={{
            height: Dimensions.get('window').height / 2.5,
          }}
        />
      </View>
      <View style={styles.bottomHeader}>
        <View style={{padding: 40}}>
          <TextInput
            onChangeText={textLog => SetLogin(textLog)}
            variant="standard"
            placeholder="Nom d'utilisateur"
            style={styles.textInputContainer}
          />
          <Button onPress={sendEmailWithQRCode}  title={"Générer le QR de connexion"}/>


        </View>
        <View style={styles.boutonLogin}>
          <Button
            onPress={() => loginFunction(login, passwd, props)}
            title={'Connexion'}
            style={styles.loginText}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ConnexionForm;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    paddingVertical: 15,
  },
  textInputContainer: {
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  bottomHeader: {
    flex: 1.5,
    backgroundColor: 'white',
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
    height: 600,
  },
  boutonLogin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginText: {
    borderColor: 'grey',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
});
