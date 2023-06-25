
import React from "react";
import Draggable,{DraggableCore} from "react-draggable";
import Xarrow,{Xwrapper} from "react-xarrows";
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
        this.handleSightSeeingSubmit=this.handleSightSeeingSubmit.bind(this);
        this.nodeConnector=this.nodeConnector.bind(this);
        this.nodeSetter=this.nodeSetter.bind(this);
        this.state={menuVisibility:0,travelBlocksToAdd:["travel","travel"],menuItemLoc:0};
        this.placeholderBlock=undefined;
        this.formData=undefined;
        this.formEntries=undefined;
        this.nodeBearer=React.createRef();
        this.nodes=React.createRef();
        this.canSetNode=React.createRef();
        this.nodeArray=[]
        this.spawnConnections=this.spawnConnections.bind(this);
    }
    componentDidMount(){
this.nodeBearer.current=new Map();
this.nodes.current=[];
this.canSetNode.current=true;
    }
    spawnConnections(){
        if(this.nodeBearer.current!==null){
        for(var a of this.nodeBearer.current.keys()){
            console.log(this.nodeBearer.current);
            this.nodeBearer.current.get(a).neighbours.forEach(b=>{this.nodeArray.push([a,b]);});
        }
        }
    }
   nodeSetter(id){
    for(var c of this.nodeBearer.current.keys()){
        if(id.toString()===c){return;}
    }
   this.nodeBearer.current.set(id.toString(),{neighbours:[]});
   }
   nodeConnector(event){
    if(this.canSetNode.current){
        this.canSetNode.current=false;
        this.nodes.current.push(event.target.id.toString());
    }
    else{
        
        this.nodeBearer.current.get(this.nodes.current[0]).neighbours.push(event.target.id.toString());
        //this.nodeBearer.current.get(this.nodes.current[0].toString()).push(event.target.id);
        this.canSetNode.current=true;
        this.nodes.current.pop();
    }
   }
    handleTravelSubmit(event){
        event.preventDefault();
        this.formPlaceHolder=new FormData(event.currentTarget);
        this.formEntries=Object.fromEntries(this.formPlaceHolder);
        var parent=event.currentTarget.parentNode;
        event.currentTarget.remove();
        for (var key in this.formEntries){
            if(this.formEntries[key].length!=0){
            if(key==="Image"){
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
        var d=document.createElement('button');
        d.onclick=function(e){e.currentTarget.parentNode.remove()};
        d.innerHTML="Delete";
        parent.appendChild(d);
    }
    handleSightSeeingSubmit(event){
        event.preventDefault();
        this.formPlaceHolder=new FormData(event.currentTarget);
        this.formEntries=Object.fromEntries(this.formPlaceHolder);
        var parent=event.currentTarget.parentNode;
        event.currentTarget.remove();
        for (var key in this.formEntries){
            if(this.formEntries[key].length!=0){
            if(key==="SightSeeing Site"){
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
        var d=document.createElement('button');
        d.onclick=function(e){e.currentTarget.parentNode.remove()};
        d.innerHTML="Delete";
        parent.appendChild(d);   
    }
    handlePhotoSubmit(event){
        event.preventDefault();
        this.formPlaceHolder=new FormData(event.currentTarget);
        this.formEntries=Object.fromEntries(this.formPlaceHolder);
        var parent=event.currentTarget.parentNode;
        event.currentTarget.remove();
        for (var key in this.formEntries){
            if(this.formEntries[key].length!=0){
            if(key==="Pictures"){
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
        var d=document.createElement('button');
        d.onclick=function(e){e.currentTarget.parentNode.remove()};
        d.innerHTML="Delete";
        parent.appendChild(d);
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
    else if(a==="photo"){return (<Draggable><li className="photoBlock"key={h}><h1>Image</h1><form onSubmit={this.handlePhotoSubmit}><label htmlFor="Pictures"></label><input name="Pictures" type="text"></input></form></li></Draggable>);}
    else{
        this.nodeSetter(h);
        return (<Draggable><li className="destBlock"key={h}><div id={h} onClick={this.nodeConnector} onDrag={this.arrowUpdater} onStop={this.arrowUpdater} style={{borderRadius:"50%",backgroundColor:"black",width:"50px",height:'50px',marginLeft:"auto",marginRight:"auto",position:'relative',top:"-20px"}}>  </div><h1>Destination</h1><form onSubmit={this.handleSightSeeingSubmit}><label htmlFor="SightSeeing Site">Site Photo</label><input name="SightSeeing Site" type="text"></input><label htmlFor="Tickets and Prices">Tickets and Prices</label><input name="Tickets and Prices" type="text"></input><input type="submit"></input></form></li></Draggable>);}
})}</ul>
 {this.spawnConnections()}{this.nodeArray.map(z=>{return <Xwrapper><Xarrow start={z[0]} end={z[1]}/></Xwrapper>;})}
</>
        );

    }

   }
