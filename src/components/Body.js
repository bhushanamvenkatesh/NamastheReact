import RestaurentCard from './RestaurentCard'

import { useState,useEffect } from 'react'
import {RESTO_LIST} from '../utils/constants'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom'


const Body=()=>{
let [restArr,setRestArr]=useState([])
let [searchInput,setSearchInput]=useState("")
const [filteredRest,setFilteredRest]=useState([])
    useEffect(()=>{
        fetchApi()
    },[])
    

const fetchApi=async()=>{
    const data=await fetch(RESTO_LIST)
    const json=await data.json()
    setRestArr(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRest((a)=>{
        return [...json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants]
    })
  
    
    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0].info)
}


    return filteredRest.length==0?<div className="resto-container">
        <div className='restaurent-card'></div>
        <div className='restaurent-card'></div>
        <div className='restaurent-card'></div>
        <div className='restaurent-card'></div>
        <div className='restaurent-card'></div>
        <div className='restaurent-card'></div>
        <div className='restaurent-card'></div>
        <div className='restaurent-card'></div>
        <div className='restaurent-card'></div>
        <div className='restaurent-card'></div>
        <div className='restaurent-card'></div>
        <div className='restaurent-card'></div>
       

    </div> :(<div className="body">
        
       <div className="search">
        <button onClick={()=>{
            setFilteredRest(restArr.filter((each)=>each.info.avgRating>4))
        }}>Top Rated</button>

        <div>
            <input type='text' value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}/>
            <button onClick={()=>{
              
                let res=restArr.filter((each)=>each.info.name.toLowerCase().includes(searchInput.toLowerCase())?true:false
                )
             
                setFilteredRest(res)
            }}>search</button>
        </div>
       </div>
       <div className="resto-container">
    
          { 
             filteredRest.map((eachData)=>{
               return <Link to={"restaurents/"+eachData.info.id} key={eachData.info.id}><RestaurentCard  eachData={eachData.info}/>
              </Link>
             })
          }
       </div>
 
    </div>)
 }

 export default Body