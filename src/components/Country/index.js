import React from 'react';
import { useParams } from "react-router";

const Country = (props) => {
    let { cName } = useParams();
    let countryData = props.countries && props.countries.filter((obj) => obj["country_region"] === cName) 
    return (
        <div>
            <div>Country: {cName}</div>
            {/* <div>All data: {JSON.stringify(countryData)}</div> */}
            <div>All data: {typeof countryData}</div>
            <div>All data: { Object.keys(countryData)}</div>
            {/* <div>All data: {countryData.country_region}</div> */}
            {/* <div>Confirmed cases: {countryData["confirmed"]}</div> */}
        </div>
    )
};

export default Country;