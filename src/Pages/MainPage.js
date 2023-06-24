
import React from "react";
import Draggable,{DraggableCore} from "react-draggable";
export class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.handleMenuClick=this.handleMenuClick.bind(this);
        this.state={menuVisibility:false};
    }
    handleMenuClick(){
       if(this.state.menuVisibility){this.setState({menuVisibility:false})}
       else{
        this.setState({menuVisibility:true});
       }
       document.getElementById("Menu").style.visibility=this.state.menuVisibility;
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
