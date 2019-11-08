import React,{Component} from 'react'
import './App.css'

import Nav from './components/Nav'
import Footer from './components/Footer'
import CardContainer from './components/CardContainer'
import DataEntryModal from './components/DataEntryModal'

class App extends Component {
  state={
    logged: false,
    moviesCollection:[
      {
        name:"Movie 1",
        description:"Some description 1"
      },{
        name:"Movie2",
        description:"Some description 2"
      },{
        name:"Movie2",
        description:"Some description 2"
      }
    ]
  }
  render(){
    return (
      <>
        <DataEntryModal/>
        <div className="App">
          <Nav/>
          <CardContainer movies={this.state.moviesCollection}/>
          <Footer/>
        </div>
      </>
    )
  }  
}

export default App
