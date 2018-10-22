import React, { Component } from 'react';

class MenuInfoComponent extends Component {
  render() {
    return (
      <div className="MenuInfoComponent">
        <div className="menu-container">
          <h3 style={{color:"#337AB7"}}>Menú</h3>
          <table className="table table-striped">
            <tbody>
              <tr>
                <th style={{color:"#32CD32"}}>Sopa</th>
                <th>
                  <span>
                    {this.props.soup}
                  </span>
                </th>
              </tr>
              <tr>
                <th style={{color:"#32CD32"}}>Principio</th>
                <th>
                  <span>
                    {this.props.appetizer}
                  </span>
                </th>
              </tr>
              <tr>
                <th style={{color:"#32CD32"}}>Seco</th>
                <th>
                  <span>
                    {this.props.main_course}
                  </span>
                </th>
              </tr>
              <tr>
                <th style={{color:"#32CD32"}}>Proteina</th>
                <th>
                  <span>
                    {this.props.protein}
                  </span>
                </th>
              </tr>
              <tr>
                <th style={{color:"#32CD32"}}>Jugo</th>
                <th>
                  <span>
                    {this.props.juice}
                  </span>
                </th>
              </tr>
              <tr>
                <th style={{color:"#32CD32"}}>Postre</th>
                <th>
                  <span>
                    {this.props.dessert}
                  </span>
                </th>
              </tr>
              <tr>
                <th style={{color:"#32CD32"}}>Ensalada</th>
                <th>
                  <span>
                    {this.props.salad}
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
export default MenuInfoComponent;
