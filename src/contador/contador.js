import React, {Component} from 'react';
import {connect} from 'react-redux'

class Contador extends Component {

  render() {
    const {arroz} = this.props
    return (
      <div >
          {arroz}
      </div>
    );
  }
}

const mapStateToProps = (tienda) => ({
  arroz: tienda.estanteria.arroz
})

export default connect(mapStateToProps, null)(Contador);