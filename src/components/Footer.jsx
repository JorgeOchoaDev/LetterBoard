import React from 'react'

import MovieEntryButton from './MovieEntryButton'

export default function Footer(props){
    return(
        <footer class="footer py-3 fixed-bottom">
            <div class="container-fluid d-flex flex-row-reverse">
                <MovieEntryButton
                hiddenEntryButton={props.hiddenEntryButton}
                />
            </div>
        </footer>
    )
}