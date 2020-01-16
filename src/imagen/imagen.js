import React, {Component} from 'react';
import logo from '../logo.svg';
import './imagen.css'
import {connect} from 'react-redux'

class Imagen extends Component {

  render() {
    return (
        <img src={logo} className={this.props.rotacion} alt="logo" />
    );
  }
}

const mapStateToProps = (tienda) => ({
  rotacion: tienda.imagen.rotacion
})

export default connect(mapStateToProps, null)(Imagen);