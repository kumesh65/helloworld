import React from "react";
import Directory from "./Directory";
import UserData from "./UserData";

function App()
{
   // var user =[1,2,3,4,5,6,7];

    var newuser = UserData.map(function(user){
            return  <Directory contact={user} key={user.id} />
    });
    console.log(newuser);
    return(
        <div>
           
            {newuser}
        </div>
    )
    }

export default App;