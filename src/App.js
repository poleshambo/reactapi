import React, { Component } from 'react';
import './App.css';
import axios from './axios-config';
import Countries from "./components/Countries/";
import Country from "./components/Country/";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

class App extends Component {

    state = {
        countries: null,
        isLoaded: false,
        error: null
    };

    componentDidMount() {
        // Mock State:
        this.setState({
            countries: [{
                "country_region": "Mainland China",
                "confirmed": 9074,
                "deaths": 294,
                "recovered": 215
            },
            {
                "country_region": "Ukraine",
                "confirmed": 9074,
                "deaths": 294,
                "recovered": 215
            }],
            isLoaded: true,
            error: null
        })

        // axios({
        //     method: 'get',
        //     url: '/country_region'
        // }).then(response => {
        //         this.setState({
        //             countries: response.data.results,
        //             isLoaded: true
        //         });
        //     },
        //         error => {
        //             this.setState({
        //                 isLoaded: false,
        //                 error
        //             })
        //         });

    }


    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={() => <Countries state={this.state} />} />
                        <Route path="/country/:cName" component={() => <Country countries={this.state.countries} />} />
                        <Route exact path="/country">
                            <Redirect to="/"></Redirect>
                        </Route> 
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
