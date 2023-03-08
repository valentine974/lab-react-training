function Greeting(props) {
 
    return (
      <div className="greeting"> 
      {props.lang === 'de' && <h1>Hallo {props.children}</h1>}
      {props.lang === 'en' && <h1>Hello {props.children}</h1>}
      {props.lang === 'es' && <h1>Hola {props.children}</h1>}
      {props.lang === 'fr' && <h1>Bonjour {props.children}</h1>}
      </div>
    );
  }
  
  export default Greeting;
   