import React, {Component} from 'react';
import axios from '../../axios-config';

class Countries extends Component {

    state = {
        countries: null
    };

    componentDidMount() {
        axios({
                  method: 'get',
                  url: '/country_region'
              })
                .then(response => {
                    this.setState({countries: response.data.results})
                })
    }

    render() {

        return (
                <div>
                    <p>{JSON.stringify(this.state.countries)}</p>
                </div>
        )
    }
}

export default Countries;