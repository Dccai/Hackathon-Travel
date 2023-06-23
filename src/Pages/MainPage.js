
import React from "react";
import Draggable,{DraggableCore} from "react-draggable";
export class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.handleMenuClick=this.bind(handleMenuClick);
    }
    handleMenuClick(){
       return; 
    }
    render(){
        return (
            <>
        <h1>Travel Icon Options</h1>
        <div onClick={this.handleMenuClick}>Menu</div>
<Draggable><h1>Hi</h1></Draggable>
</>
        );

    }

   }
