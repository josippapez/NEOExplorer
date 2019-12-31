import React, { Component } from 'react'
import CardList from '../cards/cardList'
import { connect } from 'react-redux';
import { fetchNearEarthObjectsForToday, fetchNearEarthObjectsForThisWeek } from '../../store/actions/apiActions';
import _ from 'lodash';

class Dashboard extends Component {
    state={
        flag:true
    }
    componentDidMount(){
        this.props.fetchNEOforToday();
    }
    handleClickToday=()=>{
        this.setState({
            flag:true
        },()=>{this.componentDidMount();})
    }
    handleClickThisWeek=()=>{
        this.setState({
            flag:false
        },()=>{this.props.fetchNEOforThisWeek();})
    }
    render(){
        var merged = _.flatMap(this.props.data.near_earth_objects);
        console.log(merged);
        
        return (
            <div className="container">
                <div className="selectors top-buffer">
                    <button type="button" className="btn btn-light mx-2" onClick={this.handleClickToday} disabled={this.state.flag}>Today</button>
                    <button type="button" className="btn btn-light" onClick={this.handleClickThisWeek} disabled={!this.state.flag}>This Week</button>
                </div>
                {merged && <CardList merged={merged}/>}
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
        fetchNEOforToday: () => dispatch(fetchNearEarthObjectsForToday()),
        fetchNEOforThisWeek: () => dispatch(fetchNearEarthObjectsForThisWeek()),
    };
};
  
export default connect(mapStateToProps, mapStateToDispatch)(Dashboard);
