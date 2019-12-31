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
                <div className="card-body col-md-8 bg-light p-5">
                    <p className="font-weight-bold">ESTIMATED DIAMETER</p>
                    <p>ESTIMATED DIAMETER (min): {Number(nearEarthObject.estimated_diameter.meters.estimated_diameter_min).toFixed(2)} m</p>
                    <p>ESTIMATED DIAMETER (max): {Number(nearEarthObject.estimated_diameter.meters.estimated_diameter_max).toFixed(2)} m</p>
                    <p>ESTIMATED DIAMETER (mean): {Number((nearEarthObject.estimated_diameter.meters.estimated_diameter_max + nearEarthObject.estimated_diameter.meters.estimated_diameter_min)/(2)).toFixed(2)} m</p>
                    <p>IS IT POTENTIALLY HAZARDOUS: {(nearEarthObject.is_potentially_hazardous_asteroid) ? ("YES") : ("NO")}</p>
                    {(nearEarthObject.close_approach_data.length>0 ? (
                        <div>
                            <p className="font-weight-bold">CLOSE APPROACH DATA</p>
                            <p>ORBITING BODY: {nearEarthObject.close_approach_data[nearEarthObject.close_approach_data.length-1].orbiting_body}</p>
                            <p>RELATIVE VELOCITY: {Number(nearEarthObject.close_approach_data[nearEarthObject.close_approach_data.length-1].relative_velocity.kilometers_per_hour).toFixed(2)} km/h</p>
                            <p>MISS DISTANCE: {(nearEarthObject.close_approach_data[nearEarthObject.close_approach_data.length-1].miss_distance.kilometers.length>5) ?
                            (nearEarthObject.close_approach_data[nearEarthObject.close_approach_data.length-1].miss_distance.astronomical + " au")
                            :
                            (Number(nearEarthObject.close_approach_data[nearEarthObject.close_approach_data.length-1].miss_distance.kilometers).toFixed(0)) + " km"}</p>
                        </div>
                    ):(""))}
                    <div>
                            <p className="font-weight-bold">ORBITAL DATA</p>
                            <p>FIRST OBSERVATION DATE: {nearEarthObject.orbital_data.first_observation_date}</p>
                            <p>LAST OBSERVATION DATE: {nearEarthObject.orbital_data.last_observation_date}</p>
                            <p>ORBIT DETERMINATION DATE: {nearEarthObject.orbital_data.orbit_determination_date}</p>
                    
                    {(nearEarthObject.orbital_data.orbit_class!=null ? (
                        <div>
                            <p>ORBIT CLASS TYPE: {nearEarthObject.orbital_data.orbit_class.orbit_class_type}</p>
                            <p>ORBIT CLASS DESCRIPTION: {nearEarthObject.orbital_data.orbit_class.orbit_class_description}</p>
                        </div>
                    ) :(""))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardSummary;
