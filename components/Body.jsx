import React from 'react'
import RestaurantCard from './RestaurantCard'
const Body = () => {
  return (
    <div className='body'>
        <div className='Search'>Search</div>
        <div className='res-conatainer'>
            <RestaurantCard 
              resName="Megna Foods"
              cuisine="Biryani,North Indian,Asian"
              />
            <RestaurantCard
              resName="KFC"
              cuisine="Burger,Fast Food"
            />
        </div>
    </div>
  )
}

export default Body