/* import Header from './components/Header'
import Footer from './components/Footer'
import Message from './components/Message'
function App(){
    
    
    return <div>
        <h1>App Component</h1>

        <Header/>
            <Message/>
        <Footer/>
       
    </div>
}

export default App */

import Navbar from "./Navbar/Navbar"
import Movies from "./movies/Movies"
function App(){
    return <div>
        <Navbar/>
        <Movies/>
    </div>
}export default App