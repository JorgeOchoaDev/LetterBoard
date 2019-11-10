import React,{Component} from 'react'
import './App.css'

import Nav from './components/Nav'
import Footer from './components/Footer'
import CardContainer from './components/CardContainer'
import DataEntryModal from './components/DataEntryModal'
import { throwStatement } from '@babel/types'

class App extends Component {
  state={
    logged: false,
    input:"",
    moviesCollection:[]
  }
  componentDidMount(){
    fetch('https://letterboard-api.herokuapp.com/getmovies',{
      headers:{
        "Content-Type":"application/json",
      },
      method: "GET",
    }).then(res=>res.json())
      .then((data)=>{
          this.setState({moviesCollection:[...this.state.moviesCollection,data]})        
      })
  }
  render(){
    let flattener= this.state.moviesCollection.flat()
    console.log(this.state)
    return (
      <>
        <DataEntryModal/>
        <div className="App">
          <Nav/>
          <CardContainer movies={flattener}/>
          <Footer/>
        </div>
      </>
    )
  }  
}

export default App
