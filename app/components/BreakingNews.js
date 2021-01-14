import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HorizontaleList from './lists/HorizontaleList'

const BreakingNews = ({data}) => {
    return (
        <HorizontaleList title='Breaking News' data={data}/>
    )
}

export default BreakingNews

const styles = StyleSheet.create({})
