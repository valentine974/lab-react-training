import { useState } from "react";

function LikeButton() { 

const [nbLikes, setNbLikes] =useState(0) 
const colorArray = ['purple','blue','green','yellow','orange','red']

const [colorIndex, setColorIndex] =useState(0) 

function update (){
    setNbLikes(nbLikes +1)
    if(colorIndex<colorArray.length){
        setColorIndex(colorIndex+1)
    } else {setColorIndex(0)}

}

    return (
      <div className="LikeButton">  
      <button style={{backgroundColor:`${colorArray[colorIndex]}`}} onClick={(()=>{update()} )}>{nbLikes} Likes</button>
      </div>
    );
  }
  
  export default LikeButton;