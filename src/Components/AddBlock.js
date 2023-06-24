import React from "react";
import Draggable,{DraggableCore} from "react-draggable";
export function AddBlock (props){
if(props.type==="red"){
    return <Draggable><input>Hello</input></Draggable>;
}
return <Draggable><p>Why Name Is John Cena</p></Draggable>;
}