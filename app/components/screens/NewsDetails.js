import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native'
import newsApi from '../../api/newsApi'
import Close from '../common/Close'
import HorizontaleList from '../lists/HorizontaleList'
import {useNavigation} from '@react-navigation/native'
import ActivityIndicator from '../common/ActivityIndicator'

const {width, height} = Dimensions.get('window')

const NewsDetails = ({route}) => {
    const {id: postId, category: postCategory} = route.params.item
    const [news, setNews] = useState({})
    const [relatedNews,setRealatedNews] = useState([]) 
    const navigation = useNavigation()
    const [loading, setLoading] = useState(false)

    const fetchPost = async(id)=>{
        setLoading(true)
        const result = await newsApi.getSingle(id)
        setNews(result)
    }

    const fetchRelatedNews = async(category)=>{
        const result = await newsApi.getByCategory(category,6)
        setRealatedNews(result.filter(item=>item.id!== postId))
        setLoading(false)
    }

    useEffect(() => {
        fetchPost(postId)
        fetchRelatedNews(postCategory)        
    }, [])
    const {title,content,thumbnail} = news
    return (
        <>
            <ActivityIndicator visible={loading}/>
            <ScrollView>
                <Image style={styles.image} source={{uri:thumbnail}}/>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.content}>
                        {content}
                    </Text>
                </View>
                <View style={styles.relatedNewsContaner}>
                    <HorizontaleList data={relatedNews} title='Related Posts'/>
                </View>
            </ScrollView>
            <Close onPress={()=> navigation.popToTop()}/>
        </>
    )
}

export default NewsDetails

const styles = StyleSheet.create({
    image:{
        width:width,
        height:height/3,
    },
    contentContainer:{
        padding:10,
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,

    },
    content:{
        fontSize:16,
        color:'#4e4d4d',
    },
    relatedNewsContaner:{
        padding:10,
    },
})
