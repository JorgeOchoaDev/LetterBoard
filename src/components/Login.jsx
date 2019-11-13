import React from 'react'

export default function Login(props){
        return(
            <form class="form-inline">
                <input class="form-control-sm mr-2"  onChange={props.nameChange} hidden={props.hiddenLogin} type="text" placeholder="username" aria-label="Username"></input>
                <input class="form-control-sm mr-2" onChange={props.passChange} hidden={props.hiddenLogin} type="password" placeholder="password" aria-label="Password"></input>
                <button class="btn btn-outline-primary my-2 my-sm-0 btn-sm" hidden={props.hiddenLogin} onClick={props.login}><i class="fas fa-sign-in-alt"></i></button>
            </form>
        )
}