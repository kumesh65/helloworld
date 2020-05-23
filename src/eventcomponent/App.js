import React,{Component, Fragment} from "react";

class App extends Component
{
    constructor()
    {
        super();
        this.state = {
            counter : 0,
            button : "Click Me to Add"
        }
        this.handleEvent = this.handleEvent.bind(this);
    }
    handleEvent()
    {
        this.setState((prevState) =>{
           return{
            counter : prevState.counter+1
           } 
        });
    }

    render()
    {
        return(
            <Fragment>
                {this.state.counter}
                <button onClick={this.handleEvent}>{this.state.button}</button>
            </Fragment>
        )
    }

}
export default App;