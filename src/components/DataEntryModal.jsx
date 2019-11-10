import React,{Component} from 'react'

import ModalInput from './ModalInput'

class DataEntryModal extends Component{
    state={
        hide: false
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
                        <form action="https://letterboard-api.herokuapp.com/" method="POST">
                            <ModalInput
                            type="text"
                            label="id"
                            />
                            <ModalInput
                            type="text"
                            label="title"
                            />
                            <ModalInput
                            type="text"
                            label="director"
                            />
                            <ModalInput
                            type="text"
                            label="duration"
                            />
                            <ModalInput
                            type="text"
                            label="ImgLink"
                            />
                            <ModalInput
                            type="text"
                            label="Release"
                            />
                            <ModalInput
                            type="text"
                            label="exit"
                            />
                            <div class="g-recaptcha" data-sitekey="6LdH2sEUAAAAAGL9Luae10rCweXBhXrNPjvj0y0G" data-callback={this.recaptchaHandler}/>
                            <input type="submit" class="btn btn-outline-primary" hidden={this.state.hide}  value="Submit"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )    
    }
}


export default DataEntryModal