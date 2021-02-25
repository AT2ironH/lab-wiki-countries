import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import CountriesJson from '../countries.json';

 class CountryDetails extends Component {

    state = {
        country: []
    } 

    getCountries = () => {
        
        let id = this.props.match.params.countryCode
        console.log(id);
        let country = CountriesJson.filter((singleCountry) => {
          return singleCountry.cca3 === id;
        });
        this.setState({
            country: country
        
        }) 
    }

    componentDidMount() {
        this.getCountries()
    }

    render() {
        const {country} = this.state
        return (
            <div>
            {
                country.map((singleCountry,index) => {
                    return (
                        <div key={index}>
                            {
                            singleCountry.name.common
                            }
                        </div>
                    )
                })
            }
            </div>
        )
    }
}
export default CountryDetails;