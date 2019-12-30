import Axios from "axios"

var apiKey="QnCEMFdmeYQRH588hNRQVYtjQeJlKgsvs8XXIN5B";

export const fetchNearEarthObjects=()=>{
    return(dispatch,getState)=>{
        Axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?page=0&size=20&api_key=${apiKey}`)
        .then(res => dispatch({type:'FETCH_NEO', data:res.data})
        )
        .catch((err)=>{
            dispatch({type:'FETCH_NEO_ERROR',err})
        })
    }
}