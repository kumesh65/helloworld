import React from "react";

class Addition extends React.Component{
    render(props)
    {
        const firstNumber = this.props.first;
        const secondNumber = this.props.second;
        console.log("Additon componnet");
        return(
            <div>
                <h1>
                    Addtion of two
                </h1>
                 Sum of two numbers :{parseInt(firstNumber)+ parseInt(secondNumber)}
            </div>
            
        )
    }
}

export default Addition;