import React from 'react'

export default function MovieEntryButton(props){
    return(
        <div>
            <button type="button" hidden={props.hiddenEntryButton} class="btn btn-outline-primary" data-toggle="modal" data-target="#dataEntryModal">
                <i class="fas fa-plus"></i>
            </button>
        </div>
    )
}