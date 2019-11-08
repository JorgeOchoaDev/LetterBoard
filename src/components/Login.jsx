import React from 'react'

export default function Login(){
    return(
        <form class="form-inline">
            <input class="form-control-sm mr-2" type="text" placeholder="username" aria-label="Username"></input>
            <input class="form-control-sm mr-2" type="password" placeholder="password" aria-label="Password"></input>
            <button class="btn btn-outline-primary my-2 my-sm-0 btn-sm" type="submit"><i class="fas fa-sign-in-alt"></i></button>
        </form>
    )
}