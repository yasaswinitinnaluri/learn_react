function Protfolio(){
    function f(v){
        console.log(v);
        if(v == "a"){
            return alert("hiii")
            
            ;
        }
        else{
            return alert("Great Shot!");
        }
    }
    return(
    <div>
        <h1>welcome to my portfolio</h1>
        <button onClick={f("b")}>Take the shot!</button>
    </div>    
        
    );
    
}
export default Protfolio;