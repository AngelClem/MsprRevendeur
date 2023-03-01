/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eslint-comments/no-unused-disable */

import React, {useEffect, useState} from 'react';
import {BASE_API_PORT, BASE_API_URL} from '../config';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

export function api() {
  return new Promise((resolve, reject) => {
    fetch(BASE_API_URL + ':' + BASE_API_PORT + '/api/customers/1', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(r => r.json())
      .then(r => {
        console.log(r);
        resolve(r);
      })
      .catch(error => {
        console.error(error);
        reject(error);
      });
  });
}

const MainPageComponent = props => {



  useEffect(() => {

    api().then(data => {
      setCustomer(data);
    });
  }, [props]);




};



