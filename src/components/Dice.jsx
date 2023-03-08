import { useState } from "react"; 
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'
import diceEmpty from '../assets/images/dice-empty.png'

function Dice() { 

// const [dice, setDice]=useState("../images/dice-empty.png")
const [dice, setDice]=useState(diceEmpty)

console.log(dice)
 
    // function randomDice (){
    //     setDice("../images/dice-empty.png") 
    //     setTimeout(() => {
    //         const randomNb = Math.floor(Math.random() * 6)
    //         const link =`../images/dice${randomNb}.png`
    //         setDice(link) 
    //     }, 1000);
        
    // } 

    function randomDice (){
        setDice(diceEmpty) 
        setTimeout(() => {
            const randomNb = Math.floor(Math.random() * 6)
            const link =`dice${randomNb}`
            setDice(link) 
        }, 1000);
        
    } 

    return (
      <div className="Dice" >  
        <img src={dice} alt="dice"/> 
        
        <button onClick={(()=> randomDice())}> launch dice</button>

      
      </div>
    );
  }
  
  export default Dice;