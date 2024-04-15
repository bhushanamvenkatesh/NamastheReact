import {RESTO_IMAGE} from '../utils/constants'
const RestaurentCard=({eachData})=>{
    // console.log(eachData)
    const {name,cloudinaryImageId,cuisines,avgRating,sla}=eachData
    
    return (
       <div className="restaurent-card">
          <img  className="resto-logo" src={RESTO_IMAGE+eachData.cloudinaryImageId} alt="rest-log"/>
          <h3>{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating}</h4>
          <h4>{sla.deliveryTime} minutes</h4>
       </div>
    )
 }

 export default RestaurentCard