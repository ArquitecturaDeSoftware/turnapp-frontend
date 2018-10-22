import React, { Component } from 'react';

class PriceNTimeInfoComponent extends Component {
  render() {
    return (
      <div className="PriceNTimeInfoComponent">
        <div className="menu-container">
          <h3 style={{color:"#337AB7"}}>Información</h3>
          <table className="table table-striped">
            <tbody>
              <tr>
                <th style={{color:"#32CD32"}}>Precio</th>
                <th>
                <span>
                  {this.props.price} pesos
                </span>
                </th>
              </tr>
              <tr>
                <th style={{color:"#32CD32"}}>Turnos restantes</th>
                <th>
                  <span>
                    {this.props.line}
                  </span>
                </th>
              </tr>
              <tr>
                <th style={{color:"#32CD32"}}>Tiempo de espera</th>
                <th>
                  <span>
                  {this.props.time>=0 ? this.props.time : 0}
                  {this.props.time===1 ? " minuto" : " minutos"}
                  </span>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default PriceNTimeInfoComponent;
