import React,{Component} from 'react'

import ModalInput from './ModalInput'

class DataEntryModal extends Component{
    state={
        hide: false,
        id: "",
        title: "",
        director: "",
        duration: "",
        release: "",
        exit: "",
        source: ""
    }
    formHandler = (event)=>{
        event.preventDefault()
        const movie = {
            id:this.state.id,
            title:this.state.title,
            director:this.state.director,
            duration:this.state.duration,
            release:this.state.release,
            exit:this.state.exit,
            source:this.state.source
        }
        console.log(JSON.stringify(movie))
        fetch('https://letterboard-api.herokuapp.com/',{
            headers:{
                "Content-Type":"application/json",
            },
            method: "POST",
            body: JSON.stringify(movie)
        }).then((res)=>res.json()
            ).catch((err)=>console.log(err.message))
    }
    onChangeHandler = (event)=>{
        this.setState({[event.target.id]: event.target.value})
    }
    recaptchaHandler = ()=>{
        console.log('recaptchaHandler called')
        this.setState({hide:false})
    }
    render(){
    return(
        <div class="modal fade" id="dataEntryModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Enter New Movie Data</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <ModalInput
                            type="text"
                            label="id"
                            onChange={this.onChangeHandler}
                            />
                            <ModalInput
                            type="text"
                            label="title"
                            onChange={this.onChangeHandler}
                            />
                            <ModalInput
                            type="text"
                            label="director"
                            onChange={this.onChangeHandler}
                            />
                            <ModalInput
                            type="text"
                            label="duration"
                            onChange={this.onChangeHandler}
                            />
                            <ModalInput
                            type="text"
                            label="release"
                            onChange={this.onChangeHandler}
                            />
                            <ModalInput
                            type="text"
                            label="exit"
                            onChange={this.onChangeHandler}
                            />
                            <ModalInput
                            type="text"
                            label="source"
                            onChange={this.onChangeHandler}
                            />
                            <div class="g-recaptcha" data-sitekey="6LdH2sEUAAAAAGL9Luae10rCweXBhXrNPjvj0y0G" data-callback={this.recaptchaHandler}/>
                            <button class="btn btn-outline-primary" onClick={this.formHandler} hidden={this.state.hide}  value="Submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )    
    }
}


export default DataEntryModal