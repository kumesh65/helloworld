import React from "react";
import UserPorofile from "./UserPorofile"

class App extends React.Component{

    constructor()
    {
        super();
        this.state = {
            person: []
        }
    }
    componentDidMount()
    {
        fetch("http://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data =>{
            this.setState({
                person: data
            });
        })
    }
    
    render(){
        const users = this.state.person.map((item) =>{
            return(
                <UserPorofile user = {item}/>
            )
        });
        return(
            
           <div>
               {users}
           </div>
        )
    }

}
export default App;