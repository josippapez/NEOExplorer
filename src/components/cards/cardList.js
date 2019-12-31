import React from 'react'
import CardSummary from './cardSummary'

function CardList({merged}) {
    return (
        <div className="row m-5 p-0">
            <div className="col">
                {merged && merged.map(object=>{
                    return(
                        <div key={object.id}>
                            <CardSummary nearEarthObject={object}/>
                        </div>
                    )
                })} 
            </div>
        </div>
    )
}

export default CardList;