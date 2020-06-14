import React from "react";
import {addStudent, updateStudent, deleteStudent} from "./Actions"
import store from "./Store";

class App extends React.Component{
    render()
    {
        store.subscribe(()=>{
            console.log("currentStore is ",store.getState());
        });
        store.dispatch(addStudent("Umesh","Thakur"));
        store.dispatch(addStudent("Ramesh","Thakur"));
        store.dispatch(addStudent("Hello","How"));
        store.dispatch(updateStudent(3,"Ramkumar"));
        store.dispatch(deleteStudent(3));
        
       const storedata = store.getState();
       const studnetdata = storedata.map((student) =>{
           return student.fname;
           
       });
        return(
            <div>
                data from store :

                {JSON.stringify(studnetdata)}
            </div>
            )
    }
}
export default App;