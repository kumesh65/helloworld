import React from "react";

function Directory(props)
{
    console.log(props);
    return(
        <div>
            <h1>
                id : {props.contact.id}
            </h1>
            <h1>
                name : {props.contact.name}
            </h1>
            <p>
                email : {props.contact.email}
            </p>
            <p>
                phone : {props.contact.phone}
            </p>
        </div>
    )
}
export default Directory;