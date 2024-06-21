import React from 'react'
import { CORN_LOGO } from '../Utils/constants';

const RestaurantCard = (props) => {
 
  const {resData}=props
  const {
    cloudinaryImageId,
    name,
    avgRating,
    costForTwo,
    deliveryTime,
    sla
  }=resData?.info


  return (
    <div className='res-card' style={{backgroundColor:'#f0f0f0'}}>
        <img 
            className='res-logo'
            alt='res-logo'
            src={CORN_LOGO + cloudinaryImageId}

        />
        <h3>{name}</h3>
        {/* <h4>{cuisine}</h4>  */}
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo} </h4>
        <h4>{sla?.deliveryTime} Mins </h4>
    </div>
  )
}

export default RestaurantCard