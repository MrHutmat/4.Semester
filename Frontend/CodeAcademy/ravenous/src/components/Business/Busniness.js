import React from 'react'


const business = {
    imageSrc,
    name,
    adress,
    city,
    state,
    zipCode,
    category,
    rating,
    reviwCount
};



const Busniness = () => {
  return (
    <div>
        <div>
            <img src={business.imageSrc} alt="" />
        </div>
    </div>
  )
}

export default Busniness