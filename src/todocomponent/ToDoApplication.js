import React from "react";
import "./App.css";
import styles from "./ToDoStyle.module.css"
class ToDoApplication extends React.Component
{
    render(){

        return(
            <div>
                <input type = 'checkbox' 
                checked ={this.props.data.completed} 
                onChange={() => this.props.handleChange(this.props.data.id)}/>
                <span className={this.props.data.completed ? styles.completed : styles.notcompleted}>
                    {this.props.data.item}
                </span>
            </div>
        )
    }
}

export default ToDoApplication;