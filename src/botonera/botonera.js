import React, {Component} from 'react';
import {connect} from 'react-redux'

class Botonera extends Component {

  render() {
    const {inc, dec} = this.props
    return (
      <div >
          <button onClick={inc}>incrementar</button>
          <button onClick={dec}>decrementar</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  inc: () => dispatch({type: 'incrementar'}),
  dec: () => dispatch({type: 'decrementar'})
})

export default connect(null, mapDispatchToProps)(Botonera);