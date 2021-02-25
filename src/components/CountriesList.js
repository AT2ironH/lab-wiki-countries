import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom';
import CountryDetails from "./CountryDetails"

 class CountriesList extends Component {
    render() {
        return (
          <div className="sth">
            <div>
              {this.props.countries.map((singleCountry, index) => {
                return (
                  <div>
                    <Link to={`/${singleCountry.cca3}`}>
                      {' '}
                      {singleCountry.name.common}
                    </Link>{' '}
                  </div>
                );
              })}
            </div>
            <div className="col-5">
              <Route
                path={'/:countryCode'}
                render={(routeProps) => {
                  return <CountryDetails {...routeProps} />;
                }}
              />
            </div>
          </div>
        );
    }
}

export default CountriesList;