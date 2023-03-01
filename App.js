/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPageComponent from "./Src/Component/MainPageComponent";
import ListProductComponent from "./Src/Component/ListProductComponent";
import DetailProductComponent from "./Src/Component/DetailProductComponent";
import QRcodeComponent from "./Src/Component/QRcodeComponent";
import ScannerComponent from "./Src/Component/ScannerQrCodeComponent";
import ConnexionForm from "./Src/Component/ConnexionForm";
import ViroSceneSampleTest from "./Src/Component/ARVisualisationComponent";



const App: () => Node = () => {

  const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainPage">
          <Stack.Screen name={"Connexion"} component={ConnexionForm}></Stack.Screen>
          <Stack.Screen name={"QRCode"} component={QRcodeComponent}></Stack.Screen>
          <Stack.Screen name={"MainPage"} component={MainPageComponent}></Stack.Screen>

          <Stack.Screen name={"ListProduct"} component={ListProductComponent}></Stack.Screen>
          <Stack.Screen name={"ScannerQR"} component={ScannerComponent}></Stack.Screen>

          <Stack.Screen name={"DetailProduct"} component={DetailProductComponent}></Stack.Screen>
          
        </Stack.Navigator>

      </NavigationContainer>
   );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
