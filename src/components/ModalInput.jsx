import React from 'react'

export default function ModalInput(props){
    return(
        <div class="form-group row my-5">
            <label for={props.label} class="col-sm-2 col-form-label">{props.label}</label>
            <div class="col-sm-10">
                <input class="form-control" id={props.label} type={props.type} onChange={props.onChange}></input>
            </div>
        </div>
    )
}