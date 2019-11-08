import React from 'react'

export default function CollapseToggler(){
    return(
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
                <i class="fas fa-ellipsis-v"></i>
        </button>
    )
}