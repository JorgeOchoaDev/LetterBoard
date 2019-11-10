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
        id:"01",
        title:"Movie 1",
        director:"someone",
        release:"some date",
        exit: "some other date",
        source:"https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX675_CR0,0,675,999_AL_.jpg"
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
