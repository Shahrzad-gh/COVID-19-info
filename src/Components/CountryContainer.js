import React, { Component } from 'react'
import { connect } from 'react-redux';
import Country from './Country';

export class CountryContainer extends Component {
    render() {
        const {data} = this.props;
        let content ='';
        content = data.lenght !== 0 
        ? data.map((country,index) => <Country key={index} country={country} />)
        : null;
        return (
            <div>
                {content}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    data : state.country.data
})

export default connect(mapStateToProps)(CountryContainer);