import React from "react";
import { View, Text,Image,  StyleSheet } from "react-native";
import Foundation from 'react-native-vector-icons/Foundation';
import { COLOR_PRIMARY } from "../utils/paleta";
export const CicleCategory = ({title, icon, isActive}) => {
    return(
        <View style={styles.container}>
            <View style={[styles.circulo, isActive ? {backgroundColor: COLOR_PRIMARY} : {backgroundColor:'#cdcdcd '}]} >
                <Foundation style={{padding:20, fontSize: 25}} name={icon}/>
            </View>
<Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
container:
{

    width:100,
    alignItems: 'center',
    height: 120,




},
title:{
textAlign:'center',
fontWeight: '500',


},
circulo:{
width:90,
height: 90,

borderRadius: 50,
marginBottom: 10,

},


}

)