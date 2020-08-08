import React, { Component } from 'react';
import {connect} from 'react-redux';

export class Country extends Component {

    render() {
        const {data} = this.props;
        return (
            <div className="container">
            <div className="row mt-5">
                <div className="col-md-6 text-center">
                    <div className="card card-body border-warning p-2">
                        <h4><strong>{data[0].country}</strong></h4>
                        <p>last Update: {data[0].lastUpdate}</p>
                    </div>
                </div>
                <div className="col-md-6 text-center">
                    <div className="card card-body border-warning p-2">
                        <h4><strong>Worldwide</strong></h4>
                        <p>1,345,673</p>
                        <p>last Update:</p>
                        {data[0].lastUpdate}
                    </div>
                </div>
                <div className="row text-center m-2 col-md-6">
                                <div className="card shadow mr-1 col-md-4 p-2">
                                    <h5 className="card-item">Confirmed: {data[0].confirmed}</h5>
                                </div>
                                <div className="card shadow mr-1 col-md-3 p-2">
                                    <h5 className="card-item">Death: {data[0].deaths}</h5>
                                </div>
                                <div className="card shadow mr-1 col-md-4 p-2">
                                    <h5 className="card-item">Recovered: {data[0].recovered}</h5>
                                </div>    
                        </div>
                    </div>
                    </div>
        )
    }
}

const mapStateToProps = state =>({
    country: state.country.country,
    data: state.country.data
})

export default connect(mapStateToProps)(Country)