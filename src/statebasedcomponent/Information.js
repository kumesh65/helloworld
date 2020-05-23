import React from 'react';

class Information extends React.Component
{
    render()
    {
        return(
            <div>
                <h1>
                name : {this.props.users.name}
                </h1>
                <p>
                    email : {this.props.users.email}
                </p>
                <p>
                    phone : {this.props.users.phone}
                </p>
            </div>
        )
    }
}

export default Information;