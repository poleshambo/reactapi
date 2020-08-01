import React from 'react';
import { useParams } from "react-router";

const Country = (props) => {
    let { cName } = useParams();
    let { countryData } = props.countries;
    return (
            <div>
                <div>Country: {cName}</div> 
                <div>Confirmed cases: </div>
            </div>
    )
};

export default Country;