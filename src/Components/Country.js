import React, { Component } from 'react';
import {connect} from 'react-redux';

export class Country extends Component {

    render() {
        const {data} = this.props;
        return (
            <div className="container">
            <h4 className="text-center mb-5">COVID-19 Info</h4>
            <div className="row">
                <div className="col-md-6 text-center">
                    <div className="card card-body border-warning p-2">
                        <h4><strong>{data[0].country}</strong></h4>
                        <p>last Update:</p>
                        {data[0].lastUpdate}
                    </div>
                </div>
                <div className="col-md-6">
                            <ul className="list-group">
                                <li className="list-group-item p-1">
                                    <h5 className="card-item">Confirmed: {data[0].confirmed}</h5>
                                </li>
                                <li className="list-group-item p-1">
                                    <h5>Death: {data[0].deaths}</h5>
                                </li>
                                <li className="list-group-item p-1">
                                    <h5>Recovered: {data[0].recovered}</h5>
                                </li>    
                            </ul>
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