import React from 'react'

function CardSummary({nearEarthObject}) {
    console.log(nearEarthObject);
    
    return (
        <div className="card shadow-lg mb-3" style={{'backgroundColor': '#1f0033'}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <canvas className="top-buffer" style={{'borderRadius': '50%', 'height' : '200px', 'width' : '200px' , 'backgroundColor': 'white'}}/>
                    <h5 className="text-white card-title">{nearEarthObject.name}</h5>
                </div>
                <div className="card-body col-md-8">
                    
                </div>
            </div>
        </div>
    )
}

export default CardSummary;
