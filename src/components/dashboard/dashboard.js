import React, { Component } from 'react'
import CardList from '../cards/cardList'
import { connect } from 'react-redux';
import { fetchNearEarthObjects } from '../../store/actions/apiActions';

class Dashboard extends Component {
    componentDidMount(){
        this.props.fetchNEO();
    }
    render(){
        var data=this.props.data;
        console.log(data);
        
        return (
            <div className="container">
                {data && <CardList data={data}/>}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.data
    };
};
  
const mapStateToDispatch = (dispatch) => {
    return {
        fetchNEO: () => dispatch(fetchNearEarthObjects())
    };
};
  
export default connect(mapStateToProps, mapStateToDispatch)(Dashboard);
