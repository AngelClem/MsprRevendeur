

import React, {useEffect,useState} from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text, TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';
import { getCustomer, getProduct } from "../Forms/ConnexionFormAPI";



const MainPageComponent = (props) => {

    const RenderItem = () => {
        let firstName = customer.firstName;
        let lastName = customer.lastName;
        // let company = customer.company.companyName;

        return (
          <View style={styles.customer}>
              <View style={styles.customerDetails}>
                  <Text>
                      Prénom: <Text style={styles.bold}>{firstName}</Text>
                  </Text>
                  <Text>
                      Nom: <Text style={styles.bold}>{lastName}</Text>
                  </Text>
                  <Text>
                      {/* Entreprise: <Text style={styles.bold}>{company}</Text> */}
                  </Text>
              </View>

              <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'data:image/png;base64,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',
                }}
              />
          </View>
        );
    };

    function goToArVisualisation(){
        props.navigation.navigate("DetailProduct")
    }
    function goToScanner(){
        props.navigation.navigate("ScannerQR")
    }
    function goToListDetails() {
        props.navigation.navigate("ListProduct");
    }
    function goToLoginPage() {
        props.navigation.navigate("LoginPage");
    }
    function Deconnexion() {
        props.navigation.navigate('');
    }

    const [customer, setCustomer] = useState({});


    useEffect(()=>{
        let c = {};
        getCustomer(1).then((custo)=>{
            setCustomer(custo);
        })
        getProduct(1).then((prod)=>{
            console.log(prod, 'prod')
        })
    },[])

    return (
      <View>
          <Text style={styles.header}>Paye Ton Kawa</Text>
          <TouchableOpacity
            style={{
                margin: 25,
                padding: 5,
                flexDirection: 'column',
                borderRadius: 15,
                borderWidth: 0.5,
                height: '8%',
                width: '50%',
                marginRight: 'auto',
                marginLeft: 'auto',
                backgroundColor: 'lightgreen',
            }}
            onPress={goToListDetails}>
              <Text style={{textAlign: 'center', fontSize: 18, paddingTop: 7}}>
                  Liste des produits
              </Text>
          </TouchableOpacity>
          <Text
            style={{
                textAlign: 'center',
                padding: 20,
                fontWeight: 'bold',
                fontSize: 16,
            }}>
              Détails du Client
          </Text>
          <RenderItem />
          <TouchableOpacity
            style={{
                margin: 25,
                padding: 5,
                flexDirection: 'column',
                borderRadius: 15,
                borderWidth: 0.5,
                height: '8%',
                width: '50%',
                marginRight: 'auto',
                marginLeft: 'auto',
                backgroundColor: 'red',
            }}
            onPress={Deconnexion}>
              <Text style={{textAlign: 'center', fontSize: 18, paddingTop: 7}}>
                  Déconnexion
              </Text>
          </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    tinyLogo: {
        height: '100%',
        width: '50%',
        borderRadius: 15,
        borderColor: 'grey',
    },
    header: {
        width: '100%',
        height: '14%',
        backgroundColor: 'lightblue',
        textAlign: 'center',
        paddingTop: '9%',
        fontSize: 22,
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
    customer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '40%',
        borderColor: 'grey',
        borderRadius:15,
        borderWidth:0.5,
        padding: 16,
    },
    customerDetails: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
});

export default MainPageComponent
