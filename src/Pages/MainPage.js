
import React from "react";
import Draggable,{DraggableCore} from "react-draggable";
import { AddBlock } from "../Components/AddBlock";
export class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.handleMenuClick=this.handleMenuClick.bind(this);
        this.handleTravelClick=this.handleTravelClick.bind(this);
        this.state={menuVisibility:0,blocksToAdd:[]};
    }
    handleMenuClick(){
       if(this.state.menuVisibility===0){this.setState({menuVisibility:100})}
       else{
        this.setState({menuVisibility:0});
       }
       document.getElementById("Menu").style.opacity=this.state.menuVisibility;
    }
    handleTravelClick(){
       return;
    }
    render(){
        return (
            <>
        <h1 onClick={this.handleMenuClick}>Travel Icon Options</h1>
        <div id="Menu" style={{color:"blue"}} ><button style={{color:"red"}} onClick={this.handleTravelClick}>Travel Block</button></div>
<Draggable><h1>Hi</h1></Draggable>
<AddBlock type="red"/>

</>
        );

    }

   }
