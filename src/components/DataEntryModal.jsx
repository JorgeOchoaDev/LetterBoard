import React from 'react'

import ModalInput from './ModalInput'

export default function DataEntryModal(){
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
                            label="ID"
                            />
                            <ModalInput
                            type="text"
                            label="Title"
                            />
                            <ModalInput
                            type="text"
                            label="Director"
                            />
                            <ModalInput
                            type="text"
                            label="Duration"
                            />
                            <ModalInput
                            type="date"
                            label="Release"
                            />
                            <ModalInput
                            type="date"
                            label="Exit"
                            />
                            <div class="g-recaptcha" data-sitekey="6LdH2sEUAAAAAGL9Luae10rCweXBhXrNPjvj0y0G"/>
                            <br/>
                            <input type="submit" class="btn btn-outline-primary" value="Submit"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )    
}
