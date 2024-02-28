import React from 'react'

const RestaurantCard = (props) => {
  console.log(props);

  const {resName,cuisine}=props
  return (
    <div className='res-card'>
        <img 
            className='res-logo'
            alt='res-logo'
            src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/xqwpuhgnsaf18te7zvtv'

        />
        <h3>{resName}</h3>
        <h4>{cuisine}</h4> 
        <h4>4.4 stars</h4>
        <h4>38 Mins</h4>
    </div>
  )
}

export default RestaurantCard