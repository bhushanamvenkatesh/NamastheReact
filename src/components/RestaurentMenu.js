import React, { useEffect } from 'react'
import { RESTO_MENU } from '../utils/constants/'
import {useParams} from 'react-router-dom'


const fetchMenu=async ({restId})=>{
   
    let data=await fetch(RESTO_MENU+restId)
    let json=await data.json()
    console.log(json)
    let s=json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3]
    console.log(s)

}

function RestaurentMenu() {
    let restId=useParams()
    useEffect(()=>{
        fetchMenu(restId)
    },[])
  return (
    <div>RestaurentMenu</div>
  )
}

export default RestaurentMenu