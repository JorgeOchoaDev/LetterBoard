import React from 'react'

export default function CollapseContainer(props){
    return(
        <div class="collapse navbar-collapse flex-grow-0" id="navbarNavAltMarkup">
            {props.children}
        </div>
    )
}