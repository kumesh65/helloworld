import React from "react";
import Information from "./Information"
import UserData from "./UserData"
class App extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            users : UserData

        }
    }
   
    render()
    {
        const user = this.state.users.map(function(item){
            return (
                <Information users = {item} key = {item.id} />
            )
        });
        return(
            <div>
                {user}
            </div>
        )
    }
}

export default App;