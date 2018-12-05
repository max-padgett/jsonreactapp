import React, { Component } from 'react';



class FormCard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Title: '',
            Description: '',
            Priority: 3
         }
    }
    onAdd(){
        
    } 
    render() { 
        return (
            <div>
                <div className="JsonCard">
                    <form>
                        <label>Title: </label>
                        <br/>
                        <input name="Title" style={{width:'80%'}} type="text" ></input>
                        <br/>
                        <label>Description: </label>
                        <br/>
                        <textarea name="Description"  style={{width:'80%'}} type="text" ></textarea>
                        <br/>
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <button class="btn btn-success" style={{margin:'.5vh'}} onClick={this.onAdd()} type="submit">Add</button>
                    </form>
                </div> 
            </div>
           
        );
    }
}
 
export default FormCard;