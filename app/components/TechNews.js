import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HorizontaleList from './lists/HorizontaleList'

const TechNews = ({data}) => {
    return (
        <HorizontaleList title='Tech News' data={data}/>
    )
}

export default TechNews

const styles = StyleSheet.create({})
