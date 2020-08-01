import React, { Component } from 'react';
import axios from '../../axios-config';
import styles from './Countries.module.css';
import Country from '../Country';
import {
    Switch,
    Link,
    Route
} from 'react-router-dom'

class Countries extends Component {

    state = {
        countries: null,
        isLoaded: false,
        error: null
    };

    componentDidMount() {
        axios({
            method: 'get',
            url: '/country_region'
        })
            .then(response => {
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
        const { error, isLoaded, countries } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div> Loading... </div>
        } else {
            return (
               
                    <ul className={styles.mainList}>
                        {countries.map(country => (
                            <li key={country.country_region}>
                                <Link to={`/country/${country.country_region}`}>
                                    {country.country_region}
                                </Link>
                                {country.confirmed}
                            </li>
                        )
                        )}
                    </ul>
                   
               
            )
        }
    }
}

export default Countries;