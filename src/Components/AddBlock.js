import React,{useState} from "react";
import { ReactDOM } from "react-dom";
import Draggable,{DraggableCore} from "react-draggable";
export function AddBlock (props){
let [blocks,addBlocks]=useState([]);
if(props.type==="red"){
    let newBlock=React.createElement("div",{style:{color:"red"}},<><p>Hello tHis is a red block</p></>)
    addBlocks(oldArray=>[...oldArray,newBlock]);
}
else{ let newBlock=React.createElement("div",{style:{color:"blue"}},<><p>Hello tHis is a blue block</p></>)
addBlocks(oldArray=>[...oldArray,newBlock]);}
return (<>{blocks.map(a=><Draggable>{a}</Draggable>)}</>);
}
ReactDOM.render(<AddBlock/>,document.getElementById("blocks"));