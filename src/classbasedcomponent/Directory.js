import React from "react";

export class Directory extends React.Component
{
    render()
    {
        return(
            <div>
            <h1>
               <ShowName name = {this.props.contact.name} />
            </h1>
            <p>
                email : {this.props.contact.email}
            </p>
            <p>
                phone : {this.props.contact.phone}
            </p>
        </div>
        )
    }
}

export function ShowName(props)
{
    return(
        <div>
            Name : {props.name}
        </div>
    )
}
//export default Directory;