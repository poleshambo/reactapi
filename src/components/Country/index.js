import React from 'react';
import { useParams } from "react-router";

const Country = (props) => {
    let { cName } = useParams();
    return (
            <li>
                <div>Country: {props.countries.cName}</div> 
                {/* <div>Confirmed cases: {props.countries.id.confirmed}</div> */}
            </li>
    )
};

export default Country;