function BoxColor({r, g,b}) {
  
      return (
        <div className="box">   
        <div className="oneBox" style={{color: "white",  backgroundColor:`rgb(${r},${g},${b})`, border: "2px black",}}>
        <p>rgb({r},{g} ,{b} )</p>
        </div>
        </div>
      );
    }
    
    export default BoxColor;