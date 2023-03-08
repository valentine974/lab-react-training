import './CreditCard.css'

function CreditCard(props) { 
    return (
      <div className="CreditCard" style={{backgroundColor:`${props.bgColor}`, color:`${props.color}`}}> 
      <div className="image">
      {props.type ==="Visa" && <img src='../assets/images/visa.png' alt="logo visa"/>}
      {props.type ==="Master Card" && <img src='../assets/images/master-card.svg' alt="logo MC"/>}
        
      </div>
      <div>
      <h1>**** **** **** {props.number.slice(12,16)} </h1> 
      </div>
      <div>
        <p>Expires {props.expirationMonth}/{props.expirationYear}</p> 
       
        <p>{props.bank}</p>
      </div>
      <div>
      <p>{props.owner}</p>
      </div>
      
      </div>
    );
  }
  
  export default CreditCard;