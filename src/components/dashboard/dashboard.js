import React, { Component } from 'react'
import CardList from '../cards/cardList'
import { connect } from 'react-redux';
import { fetchNearEarthObjectsForToday, fetchNearEarthObjectsForThisWeek, fetchNearEarthObjectsSorted } from '../../store/actions/apiActions';

class Dashboard extends Component {
    state={
        mergedandSorted:[],
        flag:true,
        sorting:"ESTIMATED DIAMETER (mean)"
    }
    componentWillMount(){
        this.props.fetchNEOforToday(this.state.sorting);
    }
    handleClickToday=()=>{
        this.setState({
            flag:true
        },()=>{this.componentWillMount();})
    }
    handleClickThisWeek=()=>{
        this.setState({
            flag:false
        },()=>{this.props.fetchNEOforThisWeek(this.state.sorting);})
    }
    handleSortByDiameter=(merged)=>{
        this.setState({
            sorting:"ESTIMATED DIAMETER (mean)"
        }, ()=>{this.props.fetchNEOSorted(this.state.sorting,merged)})
    }
    handleSortByDistance=(merged)=>{
        this.setState({
            sorting:"MISS DISTANCE"
        }, ()=>{this.props.fetchNEOSorted(this.state.sorting,merged)})
    }
    handleSortByVelocity=(merged)=>{
        this.setState({
            sorting:"RELATIVE VELOCITY"
        }, ()=>{this.props.fetchNEOSorted(this.state.sorting,merged)})
    }
    render(){
        var merged = this.props.data;
        return (
            <div className="container">
                <div className="selectors top-buffer">
                    <button type="button" className="btn btn-light mx-2" onClick={this.handleClickToday} disabled={this.state.flag}>Today</button>
                    <button type="button" className="btn btn-light" onClick={this.handleClickThisWeek} disabled={!this.state.flag}>This Week</button>
                    <div className="text-white float-right">SORT BY:
                        <button className="btn btn-secondary dropdown-toggle ml-3" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {this.state.sorting}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <button className="dropdown-item" onClick={()=>{this.handleSortByDiameter(merged)}}>ESTIMATED DIAMETER (mean)</button>
                            <button className="dropdown-item" onClick={()=>{this.handleSortByDistance(merged)}}>MISS DISTANCE</button>
                            <button className="dropdown-item" onClick={()=>{this.handleSortByVelocity(merged)}}>RELATIVE VELOCITY</button>
                        </div>
                    </div>
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
        fetchNEOforToday: (sorting) => dispatch(fetchNearEarthObjectsForToday(sorting)),
        fetchNEOforThisWeek: (sorting) => dispatch(fetchNearEarthObjectsForThisWeek(sorting)),
        fetchNEOSorted: (sorting,merged) => dispatch(fetchNearEarthObjectsSorted(sorting,merged))
    };
};
  
export default connect(mapStateToProps, mapStateToDispatch)(Dashboard);
