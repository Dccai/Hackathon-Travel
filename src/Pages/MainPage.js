
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
        this.handleTravelSubmit=this.handleTravelSubmit.bind(this);
        this.handlePhotoSubmit=this.handlePhotoSubmit.bind(this);
        this.state={menuVisibility:0,travelBlocksToAdd:["travel","travel"],menuItemLoc:0};
        this.placeholderBlock=undefined;
        this.formData=undefined;
        this.formEntries=undefined;
    }
    handleTravelSubmit(event){
        event.preventDefault();
        this.formPlaceHolder=new FormData(event.currentTarget);
        this.formEntries=Object.fromEntries(this.formPlaceHolder);
        var parent=event.currentTarget.parentNode;
        event.currentTarget.remove();
        for (var key in this.formEntries){
            if(this.formEntries[key].length!=0){
            var b=document.createElement('li');
            b.innerHTML=`${key}: ${this.formEntries[key]}`;
            parent.appendChild(b);
            }
        }
    }
    handlePhotoSubmit(event){
        event.preventDefault();
        this.formPlaceHolder=new FormData(event.currentTarget);
        this.formEntries=Object.fromEntries(this.formPlaceHolder);
        var parent=event.currentTarget.parentNode;
        event.currentTarget.remove();
        for (var key in this.formEntries){
            if(this.formEntries[key].length!=0){
            if(key==="Landmark-Image"){
                var b=document.createElement('img');
                b.src=this.formEntries[key];
                parent.appendChild(b);
            }
            else{
            var b=document.createElement('li');
            b.innerHTML=`${key}: ${this.formEntries[key]}`;
            parent.appendChild(b);
            }
            }
        }
    }
    handleMenuClick(){
       if(this.state.menuVisibility===0){this.setState({menuVisibility:100,menuItemLoc:-200})}
       else{
        this.setState({menuVisibility:0,menuItemLoc:0});
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
        <div style={{position:"static"}} id="Menu"  ><button style={{position:"relative",color:"red",top:`${this.state.menuItemLoc}px`}} onClick={this.handleTravelClick}>Travel Block</button><button style={{position:"relative",color:"blue",top:`${this.state.menuItemLoc}px`}} onClick={this.handlePhotoClick}>Picture Block</button><button style={{position:"relative",color:"green",top:`${this.state.menuItemLoc}px`}} onClick={this.handleDestinationBlock}>Destination Block</button></div>
<ul>{this.state.travelBlocksToAdd.map((a,h)=>{
    if(a==="travel"){return (<Draggable><li className="travelBlock"key={h}><h1>Travel</h1><form onSubmit={this.handleTravelSubmit}><label htmlFor="Transport">Transportation</label>
    <input name="Transport"type="text"></input><label htmlFor="Image">Photo</label><input type="text" name="Image"></input>
    <label htmlFor="Date and Time">Time and Date</label><input type="text" name="Date and Time"></input><div><input type="text" name="From"></input> to <input name="To" type="text"></input></div><label htmlFor="Travel Reminders">Reminders</label><input type="text" name="Travel Reminders"></input><label htmlFor="Travel Seats">Seats</label><input name="Travel Seats"></input><input type="submit" ></input></form></li></Draggable>);}
    else if(a==="photo"){return (<Draggable><li className="photoBlock"key={h}><h1>Image</h1><form onSubmit={this.handlePhotoSubmit}><label htmlFor="Landmark-Image"></label><input name="Landmark-Image" type="text"></input></form></li></Draggable>);}
    else{return <Draggable><li className="destBlock"key={h}><h1>Destination</h1></li></Draggable>;}
})}</ul>
</>
        );

    }

   }
