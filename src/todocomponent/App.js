import React from "react";
import ToDoApplication from "./ToDoApplication";
import ToDoData from "./ToDoData"
import styles from "./ToDoStyle.module.css"
class App extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            tododata: ToDoData
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(id)
    {
        this.setState(prevState =>{
            const updatedToDos = prevState.tododata.map(todo =>{
                if(todo.id === id)
                {
                    todo.completed = !todo.completed
                    
                }
                return todo;
            });
            return{
                tododata : updatedToDos
            }
        });
    }
    render()
    {
        const todoRender = this.state.tododata.map(item =>
        
            <ToDoApplication data={item} key = {item.id} handleChange = {this.handleChange}/>
        );
        return(
            <div>
               {todoRender}
               <button className={styles.btn}>BUtton</button>
            </div>
        )
    }
}

export default App;