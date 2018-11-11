import React, { Component } from 'react';
import Todo from '../src/data/todo.json'

class JsonComp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                {Todo.map((detail,index)=>{
                    if(detail.Priority === this.props.priority)
                    {
                        return (
                                <div className="JsonCard">
                                    <h1>{detail.Title}</h1>
                                    <p>{detail.Description}</p>
                                </div> 
                            )
                    }
                })}
             </div>
           
        );
    }
}
 
export default JsonComp;