import React from 'react'

export default function MovieEntryButton(){
    return(
        <div>
            <button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#dataEntryModal">
                <i class="fas fa-plus"></i>
            </button>
        </div>
    )
}