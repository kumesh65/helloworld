import React from "react"

class UserPorofile extends React.Component{
    render()
    {
        return(
            <div>
                {this.props.user.name} {this.props.user.email} <br/>

            </div>
        )
    }
}

export default UserPorofile;