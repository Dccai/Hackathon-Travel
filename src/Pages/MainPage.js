
import React from "react";
import Draggable,{DraggableCore} from "react-draggable";
import "./MainPage.css";
export class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.handleMenuClick=this.handleMenuClick.bind(this);
        this.handleTravelClick=this.handleTravelClick.bind(this);
        this.handlePhotoClick=this.handlePhotoClick.bind(this);
        this.handleDestinationBlock=this.handleDestinationBlock.bind(this);
        this.state={menuVisibility:0,travelBlocksToAdd:["travel","travel"]};
        this.placeholderBlock=undefined;
    }
    handleMenuClick(){
       if(this.state.menuVisibility===0){this.setState({menuVisibility:100})}
       else{
        this.setState({menuVisibility:0});
       }
       document.getElementById("Menu").style.opacity=this.state.menuVisibility;
    }
    handleTravelClick(){
        this.placeholderBlock=this.state.travelBlocksToAdd;
        this.placeholderBlock.push("travel");
        this.setState({travelBlocksToAdd:this.placeholderBlock});
    }
    handlePhotoClick(){
        this.placeholderBlock=this.state.travelBlocksToAdd;
        this.placeholderBlock.push("photo");
        this.setState({travelBlocksToAdd:this.placeholderBlock});
    }
    handleDestinationBlock(){
        this.placeholderBlock=this.state.travelBlocksToAdd;
        this.placeholderBlock.push("destination");
        this.setState({travelBlocksToAdd:this.placeholderBlock});
    }
    render(){
        return (
            <>
        <h1 onClick={this.handleMenuClick}>Travel Icon Options</h1>
        <div id="Menu" style={{color:"blue"}} ><button style={{color:"red"}} onClick={this.handleTravelClick}>Travel Block</button><button onClick={this.handlePhotoClick}>Picture Block</button><button onClick={this.handleDestinationBlock}>Destination Block</button></div>
<Draggable><h1>Hi</h1></Draggable>
<ul>{this.state.travelBlocksToAdd.map((a,h)=>{
    if(a==="travel"){return <Draggable><li key={h}><h1>Travel</h1></li></Draggable>;}
    else if(a==="photo"){return <Draggable><li key={h}><h1>Image</h1></li></Draggable>;}
    else{return <Draggable><li key={h}><h1>Destination</h1></li></Draggable>;}
})}</ul>
</>
        );

    }

   }
