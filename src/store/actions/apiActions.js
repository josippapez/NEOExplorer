import Axios from "axios"

var apiKey="QnCEMFdmeYQRH588hNRQVYtjQeJlKgsvs8XXIN5B";
var start_date=""
var end_date=""
var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0');
var yyyy = date.getFullYear();
date = yyyy+"-"+mm+"-"+dd;

export const fetchNearEarthObjectsForToday=()=>{
    return(dispatch,getState)=>{
        start_date=date;
        end_date=date;
        Axios.get(`https://api.nasa.gov/neo/rest/v1/feed/?start_date=${start_date}&end_date=${end_date}&detailed=true&api_key=${apiKey}`)
        .then(res => dispatch({type:'FETCH_NEO', data:res.data})
        )
        .catch((err)=>{
            dispatch({type:'FETCH_NEO_ERROR',err})
        })
    }
}
function getMonday(date) {
    date = new Date(date);
    var day = date.getDay(),
        diff = date.getDate() - day + (day === 0 ? -6:1);
    return new Date(date.setDate(diff));
  }

export const fetchNearEarthObjectsForThisWeek=()=>{
    return(dispatch,getState)=>{
        end_date=date;
        start_date=getMonday(end_date);
        var dd = String(start_date.getDate()).padStart(2, '0');
        var mm = String(start_date.getMonth() + 1).padStart(2, '0');
        var yyyy = start_date.getFullYear();
        start_date = yyyy+"-"+mm+"-"+dd;
        
        Axios.get(`https://api.nasa.gov/neo/rest/v1/feed/?start_date=${start_date}&end_date=${end_date}&detailed=true&api_key=${apiKey}`)
        .then(res => dispatch({type:'FETCH_NEO_THIS_WEEK', data:res.data})
        )
        .catch((err)=>{
            dispatch({type:'FETCH_NEO_THIS_WEEK_ERROR',err})
        })
    }
}