
import React from "react";
import Draggable,{DraggableCore} from "react-draggable";
export class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.handleMenuClick=this.handleMenuClick.bind(this);
        this.state={menuVisibility:0};
    }
    handleMenuClick(){
       if(this.state.menuVisibility===0){this.setState({menuVisibility:100})}
       else{
        this.setState({menuVisibility:0});
       }
       alert(this.state.menuVisibility);
       document.getElementById("Menu").style.opacity=this.state.menuVisibility;
       alert('Hi');
    }
    render(){
        return (
            <>
        <h1 onClick={this.handleMenuClick}>Travel Icon Options</h1>
        <div id="Menu" >Menu</div>
<Draggable><h1>Hi</h1></Draggable>
</>
        );

    }

   }
