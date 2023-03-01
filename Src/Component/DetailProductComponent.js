import React, {useEffect} from 'react';
import type {Node} from 'react';
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
import {
    ViroARScene,
    ViroText,
    ViroConstants,
    ViroARSceneNavigator
} from '@viro-community/react-viro'


const DetailProductComponent = (props) =>{

    useEffect(()=>{

    },[props])
    function goToArVisualisation(){
        props.navigation.navigate("ARVisualisation")
    }

    return(<View style={{alignItems:"center",justifyContent:"center"}}>
        <Text style={{color:"black"}}>Titre de l'item</Text>
        <TouchableOpacity onPress={goToArVisualisation}>
            <View style={{height:'40%', width:'100%'}}>
                <Text>ALLER MARCHE</Text>
            </View>
        </TouchableOpacity>






    </View>)
}

export default DetailProductComponent
