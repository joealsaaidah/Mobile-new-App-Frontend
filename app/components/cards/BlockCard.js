import React from 'react'
import { Image, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'

import Title from '../common/Title'
import Subtitle from '../common/Subtitle'

const BlockCard = ({style, imageStyle, item, onPress}) => {

    const{thumbnail, title, desc} = item

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container, style]}>
                <Image source={{uri:thumbnail}} style={[styles.image, imageStyle]}/>
                <View style={styles.content}>
                    <Title>{title}</Title>
                    <Subtitle>{desc}</Subtitle>
                </View>
            </View>
        </TouchableWithoutFeedback>
        
    )
}

export default BlockCard

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height: 300,
        borderRadius:8,
        overflow:'hidden',
        backgroundColor:'#fff',
    },
    image:{
        width:'100%',
        height:200,
    },
    content:{
        padding:5,
    }
})
