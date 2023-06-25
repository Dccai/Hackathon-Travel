import React from "react";
import Draggable,{DraggableCore} from "react-draggable";
import Xarrow,{Xwrapper,useXarrow} from "react-xarrows";
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
        this.state={menuVisibility:0,travelBlocksToAdd:[],menuItemLoc:0,updater:0};
        this.placeholderBlock=undefined;
        this.formData=undefined;
        this.handleMealClick=this.handleMealClick.bind(this);
        this.formEntries=undefined;
        this.nodeBearer=React.createRef();
        this.deletedNodes=React.createRef();
        this.nodes=React.createRef();
        this.canSetNode=React.createRef();
        this.nodeArray=[]
        this.spawnConnections=this.spawnConnections.bind(this);
        this.handleMealSubmit=this.handleMealSubmit.bind(this);
        this.handleRestClick=this.handleRestClick.bind(this);
        this.handleRestSubmit=this.handleRestSubmit.bind(this);
        this.handleRentClick=this.handleRentClick.bind(this);
        this.handleRentSubmit=this.handleRentSubmit.bind(this);
    }
    componentDidMount(){
this.nodeBearer.current=new Map();
this.nodes.current=[];
this.canSetNode.current=true;
this.deletedNodes.current=[];
    }
    spawnConnections(){
        if(this.nodeBearer.current!==null){
        for(var a of this.nodeBearer.current.keys()){
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
        this.canSetNode.current=true;
        this.nodes.current.pop();
    }
   }
   handleMealSubmit(event){
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
        var d=document.createElement('button');
        d.id=(this.state.travelBlocksToAdd.length-1).toString();
        d.onclick=function(e){e.currentTarget.parentNode.remove(); };
        d.innerHTML="Delete";
        parent.appendChild(d);
   }
   handleRentSubmit(event){
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
    var d=document.createElement('button');
    d.id=(this.state.travelBlocksToAdd.length-1).toString();
    d.onclick=function(e){e.currentTarget.parentNode.remove(); };
    d.innerHTML="Delete";
    parent.appendChild(d);
   }
   handleRestSubmit(event){
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
        var d=document.createElement('button');
        d.id=(this.state.travelBlocksToAdd.length-1).toString();
        d.onclick=function(e){e.currentTarget.parentNode.remove(); };
        d.innerHTML="Delete";
        parent.appendChild(d);
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
        d.id=(this.state.travelBlocksToAdd.length-1).toString();
        d.onclick=function(e){e.currentTarget.parentNode.remove(); };
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
        d.id=(this.state.travelBlocksToAdd.length-1).toString();
        d.onclick=function(e){e.currentTarget.parentNode.remove();};
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
        d.id=(this.state.travelBlocksToAdd.length-1).toString();
        d.onclick=function(e){e.currentTarget.parentNode.remove();};
        d.innerHTML="Delete";
        parent.appendChild(d);
    }
    handleRentClick(){
        this.placeholderBlock=this.state.travelBlocksToAdd;
        this.placeholderBlock.push("rent");
        this.setState({travelBlocksToAdd:this.placeholderBlock});
    }
    handleRestClick(){
        this.placeholderBlock=this.state.travelBlocksToAdd;
        this.placeholderBlock.push("rest");
        this.setState({travelBlocksToAdd:this.placeholderBlock});
    }
    handleMenuClick(){
       if(this.state.menuVisibility===0){this.setState({menuVisibility:100,menuItemLoc:-200})}
       else{
        this.setState({menuVisibility:0,menuItemLoc:0});
       }
       document.getElementById("Menu").style.opacity=this.state.menuVisibility;
    }
    handleMealClick(){
        this.placeholderBlock=this.state.travelBlocksToAdd;
        this.placeholderBlock.push("meal");
        this.setState({travelBlocksToAdd:this.placeholderBlock});
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
        <div style={{position:"static"}} id="Menu"  ><button style={{position:"relative",color:"red",top:`${this.state.menuItemLoc}px`}} onClick={this.handleTravelClick}>Travel Block</button><button style={{position:"relative",color:"blue",top:`${this.state.menuItemLoc}px`}} onClick={this.handlePhotoClick}>Picture Block</button><button style={{position:"relative",color:"green",top:`${this.state.menuItemLoc}px`}} onClick={this.handleDestinationBlock}>Destination Block</button>
        <button style={{position:"relative",color:"yellow",top:`${this.state.menuItemLoc}px`}} onClick={this.handleMealClick}>Meal Block</button><button style={{position:"relative",color:"orange",top:`${this.state.menuItemLoc}px`}} onClick={this.handleRestClick}>Place To Stay</button>
        <button style={{position:"relative",color:"purple",top:`${this.state.menuItemLoc}px`}} onClick={this.handleRentClick}>Rental</button><button onClick={()=>{this.setState({updater:this.state.updater+1})}}>Refresher</button></div>
<ul>{this.state.travelBlocksToAdd.map((a,h)=>{
    if(a==="travel"){
        this.nodeSetter(h);
        return (<Draggable ><li className="travelBlock"key={h}><div id={h} onClick={this.nodeConnector}  style={{borderRadius:"50%",backgroundColor:"black",width:"50px",height:'50px',marginLeft:"auto",marginRight:"auto",position:'relative',top:"-20px"}}>  </div><h1>Travel</h1><form onSubmit={this.handleTravelSubmit}><label htmlFor="Transport">Transportation</label>
    <input name="Transport"type="text"></input><label htmlFor="Image">Photo</label><input type="text" name="Image"></input>
    <label htmlFor="Date and Time">Time and Date</label><input type="text" name="Date and Time"></input><div><label htmlFor="From">From</label><input type="text" name="From"></input> <label htmlFor="To">To</label> <input name="To" type="text"></input></div><label htmlFor="Travel Reminders">Reminders</label><input type="text" name="Travel Reminders"></input><label htmlFor="Travel Seats">Seats</label><input name="Travel Seats"></input><input type="submit" ></input></form></li></Draggable>);}
    else if(a==="photo"){
        this.nodeSetter(h);
        return (<Draggable ><li className="photoBlock"key={h}><div id={h} onClick={this.nodeConnector}  style={{borderRadius:"50%",backgroundColor:"black",width:"50px",height:'50px',marginLeft:"auto",marginRight:"auto",position:'relative',top:"-20px"}}>  </div><h1>Image</h1><form onSubmit={this.handlePhotoSubmit}><label htmlFor="Name of Picture">Picture Name</label><input name ="Name of Picture" type="text"></input><label htmlFor="Picture Url">Url</label><input name="Picture Url" type="text"></input><input type="submit"></input></form></li></Draggable>);}
    else if(a==="meal"){
        this.nodeSetter(h);
        return (<Draggable ><li className="mealBlock"key={h}><div id={h} onClick={this.nodeConnector}  style={{borderRadius:"50%",backgroundColor:"black",width:"50px",height:'50px',marginLeft:"auto",marginRight:"auto",position:'relative',top:"-20px"}}>  </div><h1>Meals</h1><form onSubmit={this.handleMealSubmit}><label htmlFor="Restuarant Name">Restaurant Name</label><input name="Restaurant Name" type="text"></input><label htmlFor="Restuarant Address">Adress</label><input name="Restaurant Address" type="text"></input><label htmlFor="Reservation">Reservation</label><input type="text" name="Reservation"></input><label htmlFor="Price Range">Price Range</label><input name="Price Range" type="text"></input><input type="submit"></input></form></li></Draggable>);
    }
    else if(a==="rest"){
        this.nodeSetter(h);
        return (<Draggable ><li className="restBlock"key={h}><div id={h} onClick={this.nodeConnector}  style={{borderRadius:"50%",backgroundColor:"black",width:"50px",height:'50px',marginLeft:"auto",marginRight:"auto",position:'relative',top:"-20px"}}>  </div><h1>Place to Stay</h1><form onSubmit={this.handleRestSubmit}><label htmlFor="Place to Stay">Place to Stay</label><input name="Place to Stay" type="text"></input><label htmlFor="Address">Address</label><input name="Address" type="text"></input><label htmlFor="Reservation Note">Reservation Note</label><input type="text" name="Reservation Note"></input><label htmlFor="Price">Price</label><input name="Price" type="text"></input><label htmlFor="How Many Days?">How Many Days?</label><input type="text" name="How Many Days?"></input><input type="submit"></input></form></li></Draggable>);
    }
    else if(a==="rent"){
        this.nodeSetter(h);
        return (<Draggable ><li className="rentBlock"key={h}><div id={h} onClick={this.nodeConnector}  style={{borderRadius:"50%",backgroundColor:"black",width:"50px",height:'50px',marginLeft:"auto",marginRight:"auto",position:'relative',top:"-20px"}}>  </div><h1>Rental</h1><form onSubmit={this.handleRentSubmit}><label htmlFor="Place for Rental">Place to Rent</label><input name="Place for Rental" type="text"></input><label htmlFor="Rental Address">Rental Address</label><input name="Rental Address" type="text"></input><label htmlFor="What to Rent?">What to Rent?</label><input type="text" name="What to Rent?"></input><label htmlFor="Rent Price">Rent Price</label><input name="Rent Price" type="text"></input><label htmlFor="Rent Time">Rent Time</label><input type="text" name="Rent Time"></input><input type="submit"></input></form></li></Draggable>);
    }
    else{
        this.nodeSetter(h);
        return (<Draggable ><li className="destBlock"key={h}><div id={h} onClick={this.nodeConnector}  style={{borderRadius:"50%",backgroundColor:"black",width:"50px",height:'50px',marginLeft:"auto",marginRight:"auto",position:'relative',top:"-20px"}}>  </div><h1>Destination</h1><form onSubmit={this.handleSightSeeingSubmit}><label htmlFor="SightSeeing Site">Site Photo</label><input name="SightSeeing Site" type="text"></input><label htmlFor="Tickets and Prices">Tickets and Prices</label><input name="Tickets and Prices" type="text"></input><input type="submit"></input></form></li></Draggable>);
        }
})}</ul>
 {this.spawnConnections()}{this.nodeArray.map(z=>{
    if(document.getElementById(z[0])!==null &&document.getElementById(z[1])!==null){
    return <Xwrapper><Xarrow start={z[0]} end={z[1]}/></Xwrapper>;
    }
    })}
</>
        );

    }

   }
   
