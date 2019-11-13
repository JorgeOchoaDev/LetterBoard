import React,{Component} from 'react'
import './App.css'

import Nav from './components/Nav'
import Footer from './components/Footer'
import CardContainer from './components/CardContainer'
import DataEntryModal from './components/DataEntryModal'

class App extends Component {
  state={
    logged: false,
    username: "",
    password: "",
    hiddenLogin: false,
    hiddenEntryButton: false,
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
  usernameHandler = (event) =>{
    this.setState({
      username: event.target.value
    })
  }
  passwordHandler = (event) =>{
    this.setState({
      password: event.target.value
    })
  }
  loginHandler = (event)=>{
    console.log("running login")
    event.preventDefault()
    fetch('https://letterboard-api.herokuapp.com/login',{
      headers:{
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*"
      },
      method: "POST",
    }).then((res)=>{
      res.json()
    }).then((data)=>{
      this.setState({logged: data})
    })
    .catch((err)=>{
          console.log(err)
      })
  }
  render(){
    let flattener= this.state.moviesCollection.flat()
    return (
      <>
        <DataEntryModal/>
        <div className="App">
          <Nav
          nameChange={this.usernameHandler}
          passChange={this.passwordHandler}
          hiddenLogin={this.state.hiddenLogin}
          login={this.loginHandler}
          />
          <CardContainer movies={flattener}/>
          <Footer
          hiddenEntryButton={this.state.hiddenEntryButton}
          />
        </div>
      </>
    )
  }  
}

export default App
