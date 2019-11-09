import React from 'react'

import ModalForm from './ModalForm'

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
                        <ModalForm/>
                    </div>
                    <div class="modal-footer">                       
                        <form action="?" method="POST">
                            <div class="g-recaptcha" data-sitekey="6LdH2sEUAAAAAGL9Luae10rCweXBhXrNPjvj0y0G"></div>
                            <br/>
                            <input type="submit" value="Submit"/>
                        </form>
                        <button type="button" class="btn btn-outline-primary"><i class="fas fa-save"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )    
}
