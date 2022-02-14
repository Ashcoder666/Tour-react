import React from 'react'
import Tour from './Tour'

const Tours = ({tours,deleteFunction}) => {
  return (
    <div>
      {tours.map(tour=>{
          return(
              <div>
                  <Tour key={tour.id} {...tour} deleteFunction={deleteFunction} />
              </div>
          )
      })}
    </div>
  )
}

export default Tours
