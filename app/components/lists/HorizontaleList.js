import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import SmallCard from '../cards/SmallCard'

import Title from '../common/Title'
import {useNavigation} from '@react-navigation/native'

const HorizontaleList = ({title,data}) => {
    const navigation = useNavigation()
    return (
        <>
            <Title size={20}>{title}</Title>
            <View style={styles.listStyle}>
                <FlatList 
                    data={data} 
                    keyExtractor={item => item.id} 
                    horizontal 
                    showsHorizontalScrollIndicator={false} 
                    renderItem={({item})=><SmallCard onPress={()=>navigation.push('NewsDetails',{item})} item={item}/>} // use push to make it works for the related news as well
                />
            </View>
        </>
    )
}

export default HorizontaleList

const styles = StyleSheet.create({
    listStyle:{
        marginVertical:15,
    }
})
