import React from "react";

class App extends React.Component{
    constructor()
    {
        super();
        this.state ={
            firstName : "",
            lastName : "",
            isGraduate:false,
            gender : ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event)
    {
        console.log(event.target)
        const {name, value, type, checked} = event.target;
        type ==="checkbox" ? this.setState({[ name ] : checked}) : this.setState({[ name ] : value});
    }
    render(){
        return(
            <div>
                <form>
                    <input type="text" 
                    name ="firstName" 
                    value={this.state.firstName}
                    placeholder="firstName" 
                    onChange = {this.handleChange} 
                    />
                    <br/>
                    <input type="text" 
                    name ="lastName" 
                    value={this.state.lastName} 
                    placeholder="lastName" 
                    onChange = {this.handleChange} 
                    />
                    <br />
                    <label>Is Graduate ?</label>
                    <input type="checkbox"
                    name="isGraduate"
                    checked = {this.state.isGraduate}
                    onChange={this.handleChange}
                    />
                    <label>Male</label>
                    <input type="radio"
                    name="gender"
                    value="male"
                    checked = {this.state.gender === "male"}
                    onChange={this.handleChange}
                    />
                    <label>Female</label>
                    <input type="radio"
                    name="gender"
                    value="female"
                    checked = {this.state.gender === "female"}
                    onChange={this.handleChange}
                    />
                    {this.state.firstName} {this.state.lastName}
                </form>
            </div>
        )
    }
}

export default App;