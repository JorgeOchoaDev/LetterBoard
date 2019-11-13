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
    hiddenEntryButton: true,
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
  componentDidUpdate(prevProps, prevState){
    if (prevState.logged === false && this.state.logged === true){
      this.setState({
        hiddenLogin : true,
        hiddenEntryButton: false
      })
    }
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
  loginHandler = async (event)=>{
    console.log("running login")
    event.preventDefault()
    const credentials = {
      username : this.state.username,
      password : this.state.password
    }
    console.log(credentials)
    const response = await fetch('https://letterboard-api.herokuapp.com/login',{
      headers:{
        "Content-Type":"application/json"
      },
      method: "POST",
      body: JSON.stringify(credentials)
    })
    const isValid = await response.json()
    const loggedState =await isValid.login
    this.setState({logged: loggedState})
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
