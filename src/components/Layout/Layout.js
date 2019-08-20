import React from 'react'
import Aux from '../../hoc/Auxil'
import './Layout.css'

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrawer</div>
        <main className="Content">
            {props.children}
        </main>
    </Aux>
)

export default layout