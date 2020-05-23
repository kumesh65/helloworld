import React from "react";

class Helper extends React.Component{

    constructor(){
        super();
        this.state = {
            name:"Umesh"
        }
        //this.handleChange = this.handleChange.bind(this);
    }
  /* componentDidMount()
    {
        alert("ComponentDidMount called");
    }

    static getDerivedStateFromProps(props, state)
    {
        return{
            name:props.name
        }
    }
    shouldComponentUpdate()
    {
        return true;
    }
    handleChange()
    {
        this.setState({
            name:"Hello"
        });
    }
*/
    componentWillUnmount()
    {
        alert("component will unmont");
    }
    render(){
        return(
            <div>
                <h3>
                    my name is {this.state.name}
                </h3>
            </div>
        )
    }
}

export default Helper;