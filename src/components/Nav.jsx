import React from 'react'

import NavBrand from './NavBrand'
import Login from './Login'
import CollapseToggler from './CollapseToggler'
import CollapseContainer from './CollapseContainer'

export default function Nav(props){
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark d-flex">
            <NavBrand/>
            <CollapseToggler/>
            <CollapseContainer>
                <Login
                nameChange={props.nameChange}
                passChange={props.passChange}
                hiddenLogin={props.hiddenLogin}
                login={props.login}
                />
            </CollapseContainer>
        </nav>
    )
}
