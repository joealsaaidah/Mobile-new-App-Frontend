import React from 'react'
import { Image, StyleSheet, Text, View,TouchableWithoutFeedback } from 'react-native'

import Title from '../common/Title'
import Subtitle from '../common/Subtitle'

const FlatCard = ({item,onPress}) => {

    const{thumbnail, title, desc} = item

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Image source={{uri:thumbnail}} style={styles.image}/>
                <View style={styles.content}>
                    <Title>{title}</Title>
                    <Subtitle>{desc}</Subtitle>
                </View>
            </View>
        </TouchableWithoutFeedback>
        
    )
}

export default FlatCard

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:8,
        overflow:'hidden',
        marginBottom:10,
        height:80,

    },
    image:{
        flex:0.35,
        height:'100%',
    },
    content:{
        flex:0.65,
        paddingHorizontal:5,
    },
})
