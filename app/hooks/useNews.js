import { useEffect, useState } from "react"
import newsApi from '../api/newsApi'

export default useNews = ()=>{
  const [featuredNews, setFeaturedNews] = useState({})
  const [breackingNews, setBreackingNews] = useState([])
  const [politicalNews, setPoliticalNews] = useState([])
  const [techNews, setTechNews] = useState([])
  const [entertainmentNews, setEntertainmentNews] = useState([])
  qty = 5
  const [loading, setLoading] = useState(false)

  const filterFeatured = (data)=>{
    return [...data].filter(item =>item.featured ==='on').reverse()[0];
  }

  const fliterByCategory=(data, category)=>{
    const result = data.filter(item => item.category ===category).reverse().splice(0,qty)

    if(result.length){
        result.push({type:'viewMore', category:category, id:category})
    }
    return result
  }

  const filterMultipleNews = async ()=>{
    setLoading(true)
    const allNews = await newsApi.getAll()
    
    setFeaturedNews(filterFeatured(allNews))

    setBreackingNews(fliterByCategory(allNews,'breaking-news'))
    setPoliticalNews(fliterByCategory(allNews,'political'))
    setEntertainmentNews(fliterByCategory(allNews,'entertainment'))
    setTechNews(fliterByCategory(allNews,'tech'))
    setLoading(false)
  }

  useEffect(() => {
    filterMultipleNews()
  }, [])

  return [
    featuredNews, 
    breackingNews, 
    politicalNews, 
    techNews, 
    entertainmentNews,
    loading,
  ]
}