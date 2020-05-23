import React from "react";
import Helper from "./Helper"

class WillUnmountDemo extends React.Component{
    constructor(){
        super();
        this.state = {
            hide:true
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange()
    {
        this.setState({
            hide:false
        });
    }
    render()
    {
        return(
            <div>
                {this.state.hide ? <Helper /> : null}
                <button onClick={this.handleChange} >TO Update the sate</button>
            </div>
        )
    }
}
export default WillUnmountDemo;