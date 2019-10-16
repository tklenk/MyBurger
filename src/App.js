import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

class App extends Component {
  //state and componentDidMount to check if componentWillUnmount (eject) works in withErrorHandling
  state = {
    show: true 
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({show: false})
    }, 5000)
  }

  render () {
    return (
      <div>
        <Layout>
          {this.state.show ? <BurgerBuilder/> : null}
        </Layout>
      </div>
    );
    }
}

export default App;
