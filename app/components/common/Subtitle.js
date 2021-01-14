import React from 'react'
import {Text } from 'react-native'

const Subtitle = ({children, numberOfLines=2, size=15}) => {
    return (
        <Text style={{fontSize:size}} numberOfLines={numberOfLines}>
            {children}
        </Text>
    )
}

export default Subtitle
