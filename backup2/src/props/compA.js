import CompB from "./compB"
function CompA(){
    var msg ="Good morning"
    var name="Sunil"
    
    return(
        <div>
            <h2>Component A</h2>
            <h5>hello {msg},Mr {name}</h5>
            <hr/>


        <CompB greet={msg} name={name}/>            


        </div>
    )
}
export default CompA