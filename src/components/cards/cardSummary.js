import React, { Component } from 'react'
import randomColor from 'randomcolor'

class CardSummary extends Component {
    componentDidMount() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        var my_gradient;
        var randomX;
        var randomY;
        for(let i= 0 ; i<Math.random()*5;i++){
            randomX=Math.random()*140;
            randomY=Math.random()*50;
            my_gradient=ctx.createRadialGradient(randomX, randomX, randomY, randomX, randomX, 0);
            my_gradient.addColorStop(0, "black");
            my_gradient.addColorStop(0.3, "white");
            ctx.fillStyle = my_gradient;
            ctx.beginPath();
            ctx.arc(randomX, randomX, randomY, 0, 2 * Math.PI);
            ctx.fill();
        }
        ctx.beginPath();
        ctx.lineWidth=3;
        ctx.arc(100,100,100,0,2*Math.PI);
        ctx.stroke();
    }
    render(){
    var {nearEarthObject} = this.props;
    return (
        <div className="card shadow-lg mb-3" style={{'backgroundColor': `${randomColor({luminosity: 'dark'})}`}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <canvas className="top-buffer" ref="canvas" width="200px" height="200px" style={{'backgroundColor': '#e0ebeb'}}/>
                    <h5 className="text-white card-title">{nearEarthObject.name}</h5>
                </div>
                <div className="card-body col-md-8 bg-light p-5">

                    <p className="font-weight-bold">ESTIMATED DIAMETER</p>
                    <div className="row neo-data">
                        <div className="col-md-6">
                            <p>ESTIMATED DIAMETER (min):</p>
                            <p>ESTIMATED DIAMETER (max):</p>
                            <p>ESTIMATED DIAMETER (mean):</p>
                            <p>IS IT POTENTIALLY HAZARDOUS:</p>
                        </div>
                        <div className="col-md-6">
                            <p>{Number(nearEarthObject.estimated_diameter.meters.estimated_diameter_min).toFixed(2)} m</p>
                            <p>{Number(nearEarthObject.estimated_diameter.meters.estimated_diameter_max).toFixed(2)} m</p>
                            <p>{Number((nearEarthObject.estimated_diameter.meters.estimated_diameter_max + 
                                nearEarthObject.estimated_diameter.meters.estimated_diameter_min)/(2)).toFixed(2)} m</p>
                            <p>{(nearEarthObject.is_potentially_hazardous_asteroid) ? ("YES") : ("NO")}</p>
                        </div>
                    </div>

                    {(nearEarthObject.close_approach_data.length>0 ? (
                    <div>
                        <p className="font-weight-bold">CLOSE APPROACH DATA</p>
                        <div className="row neo-data">
                            <div className="col-md-6">
                                <p>ORBITING BODY:</p>
                                <p>RELATIVE VELOCITY:</p>
                                <p>MISS DISTANCE:</p>
                            </div>
                            <div className="col-md-6">
                                <p>{nearEarthObject.close_approach_data[nearEarthObject.close_approach_data.length-1].orbiting_body}</p>
                                <p>{Number(nearEarthObject.close_approach_data[nearEarthObject.close_approach_data.length-1].relative_velocity.kilometers_per_hour).toFixed(2)} km/h</p>
                                <p>{(nearEarthObject.close_approach_data[nearEarthObject.close_approach_data.length-1].miss_distance.kilometers.length>5) ?
                                (Number((nearEarthObject.close_approach_data[nearEarthObject.close_approach_data.length-1].miss_distance.astronomical)*499.004784).toFixed(3) + " ls")
                                :
                                (Number(nearEarthObject.close_approach_data[nearEarthObject.close_approach_data.length-1].miss_distance.kilometers).toFixed(0)) + " km"}</p>
                            </div>
                        </div>
                    </div>

                    ):(""))}
                    <p className="font-weight-bold">ORBITAL DATA</p>
                    <div className="row neo-data">
                        <div className="col-md-6">
                            <p>FIRST OBSERVATION DATE:</p>
                            <p>LAST OBSERVATION DATE:</p>
                            <p>ORBIT DETERMINATION DATE:</p>
                        </div>
                        <div className="col-md-6">
                            <p>{nearEarthObject.orbital_data.first_observation_date}</p>
                            <p>{nearEarthObject.orbital_data.last_observation_date}</p>
                            <p>{nearEarthObject.orbital_data.orbit_determination_date}</p>
                        </div>
                    </div>
                    {(nearEarthObject.orbital_data.orbit_class!=null ? (
                    <div className="row neo-data">
                        <div className="col-md-6">
                            <p>ORBIT CLASS TYPE:</p>
                            <p>ORBIT CLASS DESCRIPTION:</p>
                        </div>
                        <div className="col-md-6">
                            <p>{nearEarthObject.orbital_data.orbit_class.orbit_class_type}</p>
                            <p>{nearEarthObject.orbital_data.orbit_class.orbit_class_description}</p>
                        </div>
                    </div>
                    ) :(""))}

                </div>
            </div>
        </div>
    )
    }
}

export default CardSummary;
