import React, { Component } from 'react';
import './App.css';
import axios from './axios-config';
import Countries from "./components/Countries/";
import Country from "./components/Country/";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

class App extends Component {

    state = {
        countries: null,
        isLoaded: false,
        error: null
    };
    
    componentDidMount() {
        axios({
            method: 'get',
            url: '/country_region'
        }).then(response => {
                this.setState({
                    countries: response.data.results,
                    isLoaded: true
                });
            },
                error => {
                    this.setState({
                        isLoaded: false,
                        error
                    })
                });
    }


    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={()=> <Countries state={this.state} />} />
                        <Route path="/country/:cName" component={() => <Country countries={this.state.countries} /> } />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
