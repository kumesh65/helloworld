import React from "react";

import {Directory, ShowName} from "./Directory";
//import ShowName from "./Directory";

class App extends React.Component
{
    render()
    {

        return(
            <div>
                <ShowName name ="Umesh Thakur" />
                <Directory contact = {{name:"Hello world..", email:"email.email.com",phone:1234442334}}/>
            </div>
            
        )
    }
}

export default App;
