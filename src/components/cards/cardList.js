import React from 'react'
import CardSummary from './cardSummary'

function CardList({data}) {
    return (
        <div className="row m-5 p-0">
            <div className="col">
                {data.near_earth_objects && data.near_earth_objects.map(object=>{
                    return(
                        <div className="top-buffer" key={object.id}>
                            <CardSummary nearEarthObject={object}/>
                        </div>
                    )
                })} 
            </div>
        </div>
    )
}

export default CardList;