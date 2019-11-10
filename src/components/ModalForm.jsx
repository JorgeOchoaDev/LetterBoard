import React from 'react'

import ModalInput from './ModalInput'

export default function ModalForm(){
    return(
        <form>
            <ModalInput
            type="text"
            label="ID"
            />
            <ModalInput
            type="text"
            label="Title"
            />
            <ModalInput
            type="text"
            label="Director"
            />
            <ModalInput
            type="text"
            label="Duration"
            />
            <ModalInput
            type="text"
            label="Img Link"
            />
            <ModalInput
            type="date"
            label="Release"
            />
            <ModalInput
            type="date"
            label="Exit"
            />
        </form>
    )
}