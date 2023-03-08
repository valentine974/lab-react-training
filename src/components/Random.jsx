function Random({min, max}) {
 
  function randomNumber (min, max){
    const numberFound = Math.floor(Math.random() * max);
    return numberFound
  }  
    return (
      <div className="random">  
      <p>Random value between {min} and {max} is {randomNumber(min,max)} </p>
      </div>
    );
  }
  
  export default Random;