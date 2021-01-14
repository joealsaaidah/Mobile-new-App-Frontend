import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import useNews from '../../hooks/useNews'
import Screen from '../common/Screen'
import EntertainmentNews from '../EntertainmentNews'
import FeaturedNews from '../FeaturedNews'
import BreackingNews from '../BreakingNews'
import PoliticalNews from '../PoliticalNews'
import SearchBar from '../SearchBar'
import TechNews from '../TechNews'
import ActivityIndicator from '../common/ActivityIndicator'

const Home = () => {
  const [isSearchFocused, setSearchFocused] = useState(false)
  const [
    featuredNews, 
    breackingNews, 
    politicalNews, 
    techNews, 
    entertainmentNews,
    loading
  ] = useNews()
  

  return (
    <>
      <ActivityIndicator visible={loading}/>
      <Screen isSearchFocused={isSearchFocused}>
        <SearchBar setSearchFocused = {setSearchFocused}/>
        <FeaturedNews item ={featuredNews}/>
        <BreackingNews data={breackingNews}/>
        <PoliticalNews data={politicalNews}/>
        <TechNews data={techNews}/>
        <EntertainmentNews data={entertainmentNews}/>
      </Screen>
    </>
  )
}

export default Home

const styles = StyleSheet.create({})
