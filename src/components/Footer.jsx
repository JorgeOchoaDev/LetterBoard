import React from 'react'

import MovieEntryButton from './MovieEntryButton'

export default function Footer(){
    return(
        <footer class="footer py-3 fixed-bottom">
            <div class="container-fluid d-flex flex-row-reverse">
                <MovieEntryButton/>
            </div>
        </footer>
    )
}