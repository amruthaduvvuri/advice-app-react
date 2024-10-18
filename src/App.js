import React from "react";
import axios from "axios";
import './App.css';
import { render } from "@testing-library/react";

class App extends React.Component  {
    state = { advice : ' '} ; //doable things in that specific component 


    componentDidMount() {    //component
    //console.log('COMPONENT DID MOUNT ')  //lifecyle component , first render , componentdidmount , didnot mount , etc
   this.fetchAdvice(); //calling the function belonging to fetchAdvice class in the mount component 
}
  //class method created //method declaration 
  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then((response) => {
        const {advice} = response.data.slip;
        
        this.setState({advice : advice});
    })
    .catch((error) => {
        console.log(error);

    });
  }

render(){
    const {advice} = this.state;
    return(
          <div className="app">
            <div className="card">
                <h1 className ="heading">{advice}</h1>
                <button className="button" onClick={this.fetchAdvice}> 
                 <span>GIVE ME ADVICE</span>
                </button>
            </div>
          </div>
    );
}
}

export default App;