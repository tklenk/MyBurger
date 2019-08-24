import React, { Component } from 'react'
import Aux from '../../hoc/Auxil'
import './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDraw: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDraw: false})
    }

    render () {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer open={this.state.showSideDraw} closed={this.sideDrawerClosedHandler} />
                <main className="Content">
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout
