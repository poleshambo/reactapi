import React from 'react';
import { useParams } from "react-router";

const Country = (props) => {
    let { cName } = useParams();
    return (
            <div>
                <div>Country: {cName}</div> 
                <div>Confirmed cases: {props.length}</div>
            </div>
    )
};

export default Country;