import React,{Component} from 'react'

import ModalInput from './ModalInput'

class DataEntryModal extends Component{
    state={
        hide: false,
        id: "",
        title: "",
        director: "",
        duration: "",
        relese: "",
        exit: "",
        source: ""
    }
    formHandler = ()=>{

    }
    onChangeHandler = (event)=>{
        console.log('changing')
        this.setState({[event.target.label]: event.target.value})
    }
    recaptchaHandler = ()=>{
        console.log('recaptchaHandler called')
        this.setState({hide:false})
    }
    render(){
        console.log(this.state)
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
                            <input type="submit" class="btn btn-outline-primary" onclick={this.formHandler} hidden={this.state.hide}  value="Submit"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )    
    }
}


export default DataEntryModal