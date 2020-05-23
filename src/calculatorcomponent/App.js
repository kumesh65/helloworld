import React from "react";

class App extends React.Component{
    constructor()
    {
        super();
        this.state = {
            firstNumber:"0",
            secondNumber: "0",
            addition:"0"
        }
        this.hadleChange = this.hadleChange.bind(this);
        this.sumOfTwo = this.sumOfTwo.bind(this);
    }
    hadleChange(event)
    {
        const{name, value} = event.target;
        this.setState({
            [name]: value
        });
    }
    sumOfTwo(event)
    {
        event.preventDefault();
        console.log(parseInt(this.state.firstNumber)+parseInt(this.state.secondNumber))
        this.setState({
            addition:parseInt(this.state.firstNumber)+parseInt(this.state.secondNumber)
        });
    }
 render(){
    return(
        <React.Fragment>
            <form>
                <input type = "text" name = "firstNumber" onChange = {this.hadleChange} />
                <input type = "text" name = "secondNumber" onChange = {this.hadleChange} />
                <button onClick = {this.sumOfTwo}> Add</button> 
            </form>
            {this.state.firstNumber} {this.state.secondNumber} {this.state.addition}
        </React.Fragment>
    )
}
}
export default App;
