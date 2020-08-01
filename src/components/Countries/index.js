import React, { Component } from 'react';
import styles from './Countries.module.css';
import { Link } from 'react-router-dom'


class Countries extends Component {
    render() {
        const { error, isLoaded, countries } = this.props.state;
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
                        </li>
                    )
                    )}
                </ul>
            )
        }
    }
}

export default Countries;