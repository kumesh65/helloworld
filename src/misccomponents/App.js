import React from "react";
class App extends React.Component{
    constructor(){
        super();
        console.log("constructor");
        this.state = {
            name : "hellow world"
        }
    }
    componentDidMount()
    {   
        console.log("component did mount");
    }
    render()
    {
        return(
            <div>
                <h3>
                    Render called...!
                </h3>
                </div>
        )
    }
}

export default App;