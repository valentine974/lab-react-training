function Rating(props) { 
    
let rating =""
function nbStars (child) {
    for(let i=1; i<=Math.round(child);  i++) {
        rating +="★"
        
    }
    for(let i=1; i<=5-Math.round(child);  i++) {
        rating +="☆"
        
    }
    return rating
}

    return (
      <div className="rating">  
      {nbStars(props.children)} 
      </div>
    );
  }
  
  export default Rating;
   