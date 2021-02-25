import React, { Component } from 'react'
// import { Link, Route } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar"
import CountryDetails from "./components/CountryDetails"
import CountriesList from "./components/CountriesList"
import CountriesJson from  "./countries.json"
import "./App.css"



 class App extends Component {

state = {
  countries: CountriesJson,
}

  render() {
    return (
      <div>
        <Navbar />
        
        <CountriesList countries={this.state.countries} />

        
      </div>
    );
  }
}

export default App;