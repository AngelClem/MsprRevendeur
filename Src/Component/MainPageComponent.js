

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
import { getCustomer} from "../Forms/ConnexionFormAPI";



const MainPageComponent = (props) => {


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
        props.navigation.navigate('Connexion');
    }

    const [customer, setCustomer] = useState({});
    const [company, setCompany] = useState("Formul PME")
    const [adress, setAdress] = useState("Nantes")


    useEffect(()=>{
        let c = {};
        getCustomer(1).then((custo)=>{
          console.log("custo.company")
          console.log(custo.company)
            setCustomer(custo);
            setCompany(custo.company.companyName)
            setAdress(custo.adress.city)
        })

    },[])

  const RenderItem = () => {
    let firstName = customer.firstName;
    let lastName = customer.lastName;

    // let company = customer.company.companyName;

    return (
      <View style={styles.customer}>
        <View style={styles.customerDetails}>
          <View style={{flexDirection : "row"}}>
            <Text style={styles.label}>
            Prénom:
            </Text>
            <Text style={styles.bold}>{firstName}</Text></View>
          <View style={{flexDirection:"row"}}>
            <Text style={styles.label}>
              Nom:
            </Text>
            <Text style={styles.bold}>{lastName}</Text>
          </View>

          <View style={{flexDirection:"row"}}>
            <Text style={styles.label}>
              Adresse :
            </Text>
            <Text style={styles.bold}>{adress}</Text>
          </View>

          <View style={{flexDirection:"row"}}>
            <Text style={styles.label}>
              Entreprise:
            </Text>
            <Text style={styles.bold}>{company}</Text>
          </View>
          <View style={{flexDirection:"row"}}>
            <Text style={styles.label}>
              Nombre de commande :
            </Text>
            <Text style={styles.bold}>2</Text>
          </View>

          <Text>

          </Text>
        </View>

        <Image
          style={styles.tinyLogo}
          source={{
            uri:'data:image/png;base64,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\n'
          }}
        />
      </View>
    );
  };


  return (
      <View style={{backgroundColor:'white' , height:'100%'}}>
        <Text style={{fontStyle:"italic", fontSize:45, textAlign:'center'}}>Paye Ton Kawa !</Text>
        <View>
            <TouchableOpacity
              style={{
                margin: 5,
                padding: 5,
                borderRadius: 15,
                borderWidth: 0.7,

                backgroundColor: '#14A44D',
              }}
              onPress={goToListDetails}>
              <Text style={{textAlign: 'center', fontSize: 18, paddingTop: 7,color:'white'}}>
                Liste des produits
              </Text>
            </TouchableOpacity>
          </View>

        <View style={{borderTopWidth : 0.5, margin:1}}>
          <Text
            style={{
              textAlign: 'center',
              padding: 15,
              fontWeight: 'bold',
              fontSize: 25,
            }}>
            Détails du Client
          </Text>
        </View>

          <RenderItem />
          <TouchableOpacity
            style={{
                marginTop: 10,
                marginBottom: 10,
                padding: 5,
                flexDirection: 'column',
                borderRadius: 15,
                borderWidth: 0.5,
                height: '8%',
                width: '80%',
                marginRight: 'auto',
                marginLeft: 'auto',
                backgroundColor: '#DC4C64',
            }}
            onPress={Deconnexion}>
              <Text style={{textAlign: 'center', fontSize: 18, paddingTop: 7, color:"white"}}>
                  Déconnexion
              </Text>
          </TouchableOpacity>
        <TouchableOpacity
            style={{

                padding: 5,
                flexDirection: 'column',
                borderRadius: 15,
                borderWidth: 0.5,
                height: '8%',
                width: '80%',
                marginRight: 'auto',
                marginLeft: 'auto',
                backgroundColor: '#f0ad4e',
            }}
            onPress={Deconnexion}>
              <Text style={{textAlign: 'center', fontSize: 18, paddingTop: 7, color:"white"}}>
                  Modifier les informations utilisateur
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
        marginLeft:2,
        fontSize: 15,
        textAlign: 'center',
    },
    label : {textDecorationLine:"underline" , fontSize:15, fontWeight:'bold'},
    customer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '40%',
        borderColor: 'grey',
        borderRadius:15,
        borderWidth:0.5,
        padding: 16,
      margin:2,
    },
    customerDetails: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
});

export default MainPageComponent
